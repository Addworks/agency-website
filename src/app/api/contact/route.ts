import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message, productInterest, budget } = body;

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
    const resendFromEmail = process.env.RESEND_FROM_EMAIL || 'briefing@naktechgroup.com';

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
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Phone:</td>
                <td style="padding: 8px 0; color: #0f172a;">${phone || 'N/A'}</td>
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
              NAK Tech Group Venture Studio Lead Dispatcher. Locally compliant & secure.
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
              subject: `🚀 [NAK LEAD] ${firstName} from ${company || 'Inbound'} (${productInterest || 'Agency'})`,
              html: emailHtml
            })
          })
        );

        // Elegant Lead Confirmation Email Template
        const leadConfirmationHtml = `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e4e4e7; border-radius: 16px; background-color: #ffffff; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
            <div style="text-align: center; margin-bottom: 20px;">
              <span style="font-size: 24px; font-weight: 900; letter-spacing: -0.05em; color: #0f172a;">NAK <span style="color: #10b981; font-weight: 300;">TECH GROUP</span></span>
            </div>
            <h2 style="color: #0f172a; border-bottom: 2px solid #10b981; padding-bottom: 12px; margin-top: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.025em;">Technical Inquiry Confirmed 🚀</h2>
            <p style="color: #334155; line-height: 1.6; font-size: 15px;">Hi ${firstName},</p>
            <p style="color: #334155; line-height: 1.6; font-size: 15px;">Thank you for reaching out to NAK Tech Group. We have successfully received your project parameters and technical scoping request.</p>
            <p style="color: #334155; line-height: 1.6; font-size: 15px;">Our core engineering committee is already reviewing your requirements. <strong>One of our technical leads will contact you shortly</strong> (typically within 1 business day) to discuss your architecture or coordinate a brief technical scoping session.</p>
            
            <div style="margin-top: 25px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #10b981; border-radius: 6px;">
              <p style="margin: 0; font-weight: bold; color: #4b5563; margin-bottom: 8px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Your Registered Parameters:</p>
              <p style="margin: 0; color: #1e293b; font-size: 14px; line-height: 1.6;">
                <strong>Company:</strong> ${company || 'N/A'}<br>
                <strong>Phone Number:</strong> ${phone || 'N/A'}<br>
                <strong>Target Platform / Interest:</strong> ${productInterest || 'Custom Software Development'}<br>
                <strong>Budget Framework:</strong> ${budget || 'Undetermined'}
              </p>
            </div>
            
            <p style="color: #334155; line-height: 1.6; font-size: 15px; margin-top: 25px;">We look forward to collaborating with you and bridging high-impact software design with your business goals.</p>
            
            <p style="color: #0f172a; font-weight: bold; margin-top: 30px; margin-bottom: 0; font-size: 15px;">Best regards,</p>
            <p style="color: #4b5563; margin-top: 5px; font-size: 14px; line-height: 1.4;">The NAK Tech Group Engineering Committee<br><a href="https://naktechgroup.com" style="color: #10b981; text-decoration: none; font-weight: bold;">naktechgroup.com</a></p>
            
            <div style="margin-top: 35px; border-top: 1px solid #e4e4e7; padding-top: 15px; text-align: center; font-size: 11px; color: #94a3b8;">
              This is an automated confirmation of your secure inquiry. NAK Tech Group Venture Studio.
            </div>
          </div>
        `;

        // Direct confirmation call to the lead
        const leadConfirmationPromise = fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: resendFromEmail,
            to: email,
            subject: `We've received your request - NAK Tech Group`,
            html: leadConfirmationHtml
          })
        });

        const resendResponses = await Promise.all([...resendPromises, leadConfirmationPromise]);
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
        // Standard CRM Contact Properties
        // Note: 'message' is NOT a standard contact property in HubSpot. We must map it to 'description'.
        const stdProperties = {
          email: email,
          firstname: firstName,
          lastname: lastName,
          company: company || '',
          phone: phone || '',
          description: message || ''
        };

        const customProperties = {
          ...stdProperties,
          lead_source___product_interest: productInterest || 'Custom Software Development (Agency)',
          lead_quality___budget__usd_: budget || 'Undetermined'
        };

        // 1. Try with full custom properties
        let hsResponse = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${hubspotAccessToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ properties: customProperties })
        });

        let hsData = await hsResponse.json();

        // 2. Fail-Safe Fallback: If custom fields fail to map (400 Bad Request), retry with standard CRM properties only!
        if (!hsResponse.ok && hsResponse.status === 400) {
          console.warn('[HubSpot API] Custom properties validation mismatch. Falling back to standard CRM fields...');
          hsResponse = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${hubspotAccessToken}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ properties: stdProperties })
          });
          hsData = await hsResponse.json();
        }

        hubspotSuccess = hsResponse.ok;
        hubspotResult = hsData;

        // Auto-create a linked Deal for inbound web inquiries to match scrapers!
        if (hubspotSuccess && hsData.id) {
          try {
            const dealPayload = {
              properties: {
                dealname: `${company || firstName}'s Web Inquiry - ${productInterest || 'Custom Dev'}`,
                dealstage: "appointmentscheduled", // Maps to '1 - Lead Generated'
                pipeline: "default"
              },
              associations: [
                {
                  to: {
                    id: hsData.id
                  },
                  types: [
                    {
                      associationCategory: "HUBSPOT_DEFINED",
                      associationTypeId: 3 // Deal -> Contact
                    }
                  ]
                }
              ]
            };

            await fetch('https://api.hubapi.com/crm/v3/objects/deals', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${hubspotAccessToken}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(dealPayload)
            });
          } catch (dealErr: any) {
            console.error('[HubSpot Inbound Sync] Failed to auto-generate linked deal:', dealErr);
          }
        }
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
