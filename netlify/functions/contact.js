// Netlify Serverless Function for Contact Form with SMTP2GO
const https = require('https');

exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ success: false, message: 'Method not allowed' })
        };
    }

    try {
        // Parse form data
        const data = JSON.parse(event.body);
        const { name, email, phone, service, message } = data;

        // Validate required fields
        if (!name || !email || !message) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    success: false,
                    message: 'Missing required fields'
                })
            };
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    success: false,
                    message: 'Invalid email address'
                })
            };
        }

        // Get SMTP2GO API key from environment variables
        const apiKey = process.env.SMTP2GO_API_KEY;
        if (!apiKey) {
            console.error('SMTP2GO_API_KEY not configured');
            return {
                statusCode: 500,
                body: JSON.stringify({
                    success: false,
                    message: 'Email service not configured'
                })
            };
        }

        // Prepare email content
        const serviceLabel = service ? `\nService Type: ${service}` : '';
        const phoneLabel = phone ? `\nPhone: ${phone}` : '';

        const emailBody = `
New Contact Form Submission from LegisPro Website

Name: ${name}
Email: ${email}${phoneLabel}${serviceLabel}

Message:
${message}

---
Sent from LegisPro Contact Form
        `.trim();

        // SMTP2GO API payload
        const smtp2goPayload = {
            api_key: apiKey,
            to: ['office@legispro.sk'],
            sender: 'noreply@legispro.sk',
            subject: `New Contact Form: ${name}`,
            text_body: emailBody,
            html_body: emailBody.replace(/\n/g, '<br>')
        };

        // Send email via SMTP2GO
        const result = await sendEmailViaSMTP2GO(smtp2goPayload);

        if (result.success) {
            return {
                statusCode: 200,
                body: JSON.stringify({
                    success: true,
                    message: 'Message sent successfully'
                })
            };
        } else {
            console.error('SMTP2GO error:', result.error);
            return {
                statusCode: 500,
                body: JSON.stringify({
                    success: false,
                    message: 'Failed to send message'
                })
            };
        }

    } catch (error) {
        console.error('Contact form error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                success: false,
                message: 'Internal server error'
            })
        };
    }
};

// Helper function to send email via SMTP2GO API
function sendEmailViaSMTP2GO(payload) {
    return new Promise((resolve, reject) => {
        const postData = JSON.stringify(payload);

        const options = {
            hostname: 'api.smtp2go.com',
            port: 443,
            path: '/v3/email/send',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(postData)
            }
        };

        const req = https.request(options, (res) => {
            let responseBody = '';

            res.on('data', (chunk) => {
                responseBody += chunk;
            });

            res.on('end', () => {
                try {
                    const response = JSON.parse(responseBody);

                    if (res.statusCode === 200 && response.data && response.data.succeeded > 0) {
                        resolve({ success: true });
                    } else {
                        resolve({
                            success: false,
                            error: response.data?.error || 'Unknown error'
                        });
                    }
                } catch (e) {
                    resolve({ success: false, error: 'Invalid response from email service' });
                }
            });
        });

        req.on('error', (error) => {
            resolve({ success: false, error: error.message });
        });

        req.write(postData);
        req.end();
    });
}
