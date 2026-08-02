import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message, productInterest, budget } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Split name into first and last name for HubSpot
    const nameParts = name.trim().split(/\s+/);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Standardized Recipient Mailing List (from Mailing_Lists.json)
    const mailingList = [
      'addworkssibanda@gmail.com',
      'buhleyb@gmail.com',
      'alwandemzingaye@gmail.com',
      'mmhlangankosana2211@gmail.com'
    ];

    // Resend Setup (using env variable strictly)
    const resendApiKey = process.env.RESEND_API_KEY;
    const resendFromEmail = process.env.RESEND_FROM_EMAIL || 'briefing@augmentmyteam.com';

    let resendSuccess = false;
    let resendError = null;

    // Send notification emails via Resend API if API Key is configured
    if (!resendApiKey) {
      resendError = 'RESEND_API_KEY environment variable is not configured.';
    } else {
      try {
        const emailHtml = `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e4e4e7; rounded: 12px; background-color: #ffffff;">
            <h2 style="color: #0f172a; border-bottom: 2px solid #10b981; padding-bottom: 10px; margin-top: 0;">New Inbound Lead Received 🚀</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563; width: 35%;">Name:</td>
                <td style="padding: 8px 0; color: #0f172a;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Email:</td>
                <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Company:</td>
                <td style="padding: 8px 0; color: #0f172a;">${company || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Product Interest:</td>
                <td style="padding: 8px 0; color: #0f172a;"><span style="background-color: #ecfdf5; color: #065f46; padding: 2px 8px; border-radius: 4px; font-size: 13px; font-weight: bold;">${productInterest || 'General Inquiry'}</span></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Est. Budget:</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: bold;">${budget || 'Undetermined'}</td>
              </tr>
            </table>
            <div style="margin-top: 25px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #10b981; border-radius: 4px;">
              <p style="margin: 0; font-weight: bold; color: #4b5563; margin-bottom: 5px;">Message / Specs:</p>
              <p style="margin: 0; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            <div style="margin-top: 30px; border-top: 1px solid #e4e4e7; padding-top: 15px; text-align: center; font-size: 12px; color: #94a3b8;">
              NAK Group Venture Studio Lead Dispatcher. Locally compliant & secure.
            </div>
          </div>
        `;

        // Dispatch to each recipient in the marketing list
        const resendPromises = mailingList.map(recipient => 
          fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${resendApiKey}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              from: resendFromEmail,
              to: recipient,
              subject: `⚡ [NAK LEAD] ${firstName} from ${company || 'Inbound'} (${productInterest || 'Agency'})`,
              html: emailHtml
            })
          })
        );

        const resendResponses = await Promise.all(resendPromises);
        const resendResults = await Promise.all(resendResponses.map(r => r.json()));
        
        resendSuccess = resendResponses.some(r => r.ok);
        if (!resendSuccess) {
          resendError = resendResults;
        }
      } catch (err: any) {
        resendError = err.message || err;
      }
    }

    // HubSpot Lead Injection Setup
    const hubspotAccessToken = process.env.HUBSPOT_ACCESS_TOKEN;
    let hubspotSuccess = false;
    let hubspotResult = null;

    if (hubspotAccessToken) {
      try {
        const hubspotPayload = {
          properties: {
            email: email,
            firstname: firstName,
            lastname: lastName,
            company: company || '',
            message: message,
            lead_source___product_interest: productInterest || 'Custom Software Development (Agency)',
            lead_quality___budget__usd_: budget || 'Undetermined'
          }
        };

        const hsResponse = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${hubspotAccessToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(hubspotPayload)
        });

        hubspotResult = await hsResponse.json();
        hubspotSuccess = hsResponse.ok;
      } catch (err: any) {
        hubspotResult = err.message || err;
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Lead received successfully.',
      dispatched: {
        resend: {
          success: resendSuccess,
          error: resendError
        },
        hubspot: {
          integrated: !!hubspotAccessToken,
          success: hubspotSuccess,
          result: hubspotResult
        }
      }
    });

  } catch (error: any) {
    return NextResponse.json(
      { error: 'An unexpected error occurred: ' + error.message },
      { status: 500 }
    );
  }
}
