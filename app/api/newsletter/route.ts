import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

interface NewsletterFormData {
  email: string
}

// In-memory storage for demo (replace with database in production)
const subscribers: string[] = []

export async function POST(request: NextRequest) {
  try {
    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY)

    const body: NewsletterFormData = await request.json()

    // Validation
    if (!body.email) {
      return NextResponse.json(
        { error: 'Email is required' },
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

    // Check for duplicates
    if (subscribers.includes(body.email.toLowerCase())) {
      return NextResponse.json(
        { error: 'This email is already subscribed' },
        { status: 400 }
      )
    }

    // Store subscription
    subscribers.push(body.email.toLowerCase())

    // Send immigration guide email via Resend
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
        to: body.email,
        subject: '📘 Your Free Immigration Guide - Bestway Consulting',
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
                .guide-section { background: #f8fafc; padding: 15px; margin: 15px 0; border-left: 4px solid #fbbf24; border-radius: 4px; }
                .guide-section h3 { margin-top: 0; color: #1e3a8a; }
                .cta-button { display: inline-block; background: #fbbf24; color: #000; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; margin: 20px 0; }
                .footer { border-top: 1px solid #e2e8f0; padding-top: 20px; font-size: 12px; color: #64748b; text-align: center; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>📘 Your Free Immigration Guide</h1>
                  <p>Insider Tips & Strategies for Success</p>
                </div>
                
                <div class="content">
                  <p>Hi there,</p>
                  <p>Thank you for downloading our free immigration guide! We're excited to help you navigate your immigration journey.</p>
                  
                  <div class="guide-section">
                    <h3>✓ Complete Application Checklist for 2024</h3>
                    <p>Everything you need to prepare for your visa application, organized by country and visa type.</p>
                  </div>
                  
                  <div class="guide-section">
                    <h3>✓ Common Mistakes That Cause Rejections</h3>
                    <p>Learn from real cases: what applicants got wrong and how you can avoid these costly errors.</p>
                  </div>
                  
                  <div class="guide-section">
                    <h3>✓ Step-by-Step Visa Pathway Guide</h3>
                    <p>A detailed roadmap for Canada Express Entry, Australian Skilled Migration, and family sponsorship pathways.</p>
                  </div>
                  
                  <p><strong>Next Steps:</strong></p>
                  <ul>
                    <li>Review the guide thoroughly</li>
                    <li>Gather your documents according to the checklist</li>
                    <li>Book a free consultation with our experts</li>
                  </ul>
                  
                  <center>
                    <a href="https://bestwayconsulting.com/#contact" class="cta-button">Book Free Consultation</a>
                  </center>
                  
                  <p>Questions? Feel free to reply to this email or contact us:</p>
                  <p>
                    <strong>📞 Phone:</strong> +1-604-512-6837<br>
                    <strong>📧 Email:</strong> info@bestwayconsulting.com
                  </p>
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
      console.error('Email sending error:', emailError)
      // Continue even if email fails, so subscription is recorded
    }

    console.log('New newsletter subscription:', body.email)

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully subscribed! Check your email for the free guide.',
        subscriberId: `SUB-${Date.now()}`
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to process your subscription. Please try again.' },
      { status: 500 }
    )
  }
}

// GET endpoint for retrieving subscribers (admin only in production)
export async function GET() {
  return NextResponse.json({ subscribers: subscribers.length })
}
