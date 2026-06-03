import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

// In-memory storage for demo (replace with database in production)
const submissions: ContactFormData[] = []

export async function POST(request: NextRequest) {
  try {
    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY)

    const body: ContactFormData = await request.json()

    // Validation
    if (!body.name || !body.email || !body.phone || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Phone validation (basic)
    if (body.phone.replace(/\D/g, '').length < 10) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      )
    }

    // Store submission
    submissions.push(body)

    // Send confirmation email to user
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
        to: body.email,
        subject: '✓ We received your inquiry - Bestway Consulting',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%); color: white; padding: 30px; border-radius: 8px; text-align: center; }
                .content { padding: 20px 0; }
                .info-box { background: #f8fafc; padding: 15px; margin: 15px 0; border-left: 4px solid #fbbf24; border-radius: 4px; }
                .footer { border-top: 1px solid #e2e8f0; padding-top: 20px; font-size: 12px; color: #64748b; text-align: center; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>Thank You for Contacting Us!</h1>
                </div>
                
                <div class="content">
                  <p>Hi ${body.name},</p>
                  <p>We received your inquiry and appreciate you reaching out to Bestway Consulting.</p>
                  
                  <div class="info-box">
                    <h3>Your Message Summary:</h3>
                    <p><strong>Phone:</strong> ${body.phone}</p>
                    <p><strong>Message:</strong> ${body.message}</p>
                  </div>
                  
                  <p><strong>What happens next?</strong></p>
                  <ul>
                    <li>Our team will review your inquiry within 2 business hours</li>
                    <li>We'll contact you at the phone number or email you provided</li>
                    <li>We'll discuss your immigration goals and options</li>
                  </ul>
                  
                  <p>If you have urgent questions, feel free to call us directly:</p>
                  <p>
                    <strong>📞 Vancouver Office:</strong> +1-604-512-6837<br>
                    <strong>🌐 Email:</strong> info@bestwayconsulting.com
                  </p>
                  
                  <p>Best regards,<br><strong>Bestway Consulting Team</strong></p>
                </div>
                
                <div class="footer">
                  <p>&copy; 2026 Bestway Consulting. All rights reserved.</p>
                  <p>Professional Immigration Services for Canada & Australia</p>
                </div>
              </div>
            </body>
          </html>
        `
      })
    } catch (emailError) {
      console.error('Confirmation email sending error:', emailError)
    }

    // Send notification email to admin/team
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
        to: process.env.ADMIN_EMAIL || 'info@bestwayconsulting.com',
        subject: `📝 New Contact Inquiry from ${body.name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #1e3a8a; color: white; padding: 20px; border-radius: 8px; text-align: center; }
                .field { padding: 10px 0; border-bottom: 1px solid #e2e8f0; }
                .field-label { font-weight: bold; color: #1e3a8a; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>New Contact Form Submission</h2>
                </div>
                
                <div style="padding: 20px;">
                  <div class="field">
                    <span class="field-label">Name:</span> ${body.name}
                  </div>
                  <div class="field">
                    <span class="field-label">Email:</span> ${body.email}
                  </div>
                  <div class="field">
                    <span class="field-label">Phone:</span> ${body.phone}
                  </div>
                  <div class="field">
                    <span class="field-label">Message:</span><br>${body.message}
                  </div>
                </div>
              </div>
            </body>
          </html>
        `
      })
    } catch (emailError) {
      console.error('Admin notification email error:', emailError)
    }

    console.log('New contact submission:', body)

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for contacting us. We will respond shortly.',
        submissionId: `SUB-${Date.now()}`
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    )
  }
}

// GET endpoint for retrieving submissions (admin only in production)
export async function GET() {
  return NextResponse.json({ submissions })
}
