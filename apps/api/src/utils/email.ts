import { env } from '../config/env.js'

const RESEND_API_URL = 'https://api.resend.com/emails'

interface SendEmailOptions {
  to: string | string[]
  subject: string
  html: string
  text?: string
}

export async function sendEmail({ to, subject, html, text }: SendEmailOptions) {
  const apiKey = env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('[Email] RESEND_API_KEY not set, skipping email:', subject)
    return
  }

  const response = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.EMAIL_FROM,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
      text,
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Failed to send email: ${error}`)
  }

  return response.json()
}

export function getWelcomeEmailTemplate(centerName: string, counselorName: string, trialDays: number) {
  return {
    subject: `Welcome to DMIT Pro - Your ${trialDays}-day trial starts now!`,
    html: `
      <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <h1 style="color: #00715f; font-size: 28px; margin-bottom: 8px;">Welcome to DMIT Pro!</h1>
        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          Hi <strong>${counselorName}</strong>,
        </p>
        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          Your center <strong>${centerName}</strong> is now registered on DMIT Pro. 
          You have a <strong>${trialDays}-day free trial</strong> to explore all premium features.
        </p>
        <div style="background: #e3efe7; border-radius: 10px; padding: 20px; margin: 24px 0;">
          <h3 style="color: #00715f; margin-top: 0;">What's included in your trial:</h3>
          <ul style="color: #333; line-height: 1.8;">
            <li>Unlimited DMIT report generation</li>
            <li>6-language support (English, Hindi, Malayalam, Tamil, Telugu, Kannada)</li>
            <li>College & University Mapper with 200+ institutions</li>
            <li>White-label branding for your center</li>
            <li>Download & print professional reports</li>
          </ul>
        </div>
        <p style="color: #666; font-size: 14px;">
          After your trial, subscribe to our Annual Plan at ₹11,988/year to continue accessing all features.
        </p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
        <p style="color: #999; font-size: 12px;">
          DMIT Pro | Premium Dermatoglyphics Intelligence Assessment
        </p>
      </div>
    `,
    text: `Welcome to DMIT Pro!\n\nHi ${counselorName},\n\nYour center ${centerName} is now registered. You have a ${trialDays}-day free trial.\n\nFeatures included:\n- Unlimited DMIT report generation\n- 6-language support\n- College & University Mapper\n- White-label branding\n- Download & print reports\n\nSubscribe at ₹11,988/year after trial.`,
  }
}

export function getReportReadyEmailTemplate(clientName: string, analysisNo: string, counselorName: string, reportUrl?: string) {
  return {
    subject: `Your DMIT Report is Ready - Analysis #${analysisNo}`,
    html: `
      <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <h1 style="color: #00715f; font-size: 28px; margin-bottom: 8px;">Your DMIT Report is Ready!</h1>
        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          Hi <strong>${clientName}</strong>,
        </p>
        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          Your Dermatoglyphics Multiple Intelligence Test report has been generated successfully.
        </p>
        <div style="background: #e3efe7; border-radius: 10px; padding: 20px; margin: 24px 0; text-align: center;">
          <p style="color: #666; font-size: 14px; margin-bottom: 8px;">Analysis Number</p>
          <p style="color: #00715f; font-size: 32px; font-weight: bold; margin: 0;">${analysisNo}</p>
        </div>
        ${reportUrl ? `<p style="text-align: center; margin: 24px 0;">
          <a href="${reportUrl}" style="background: #00715f; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">View Your Report</a>
        </p>` : ''}
        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          Prepared by: <strong>${counselorName}</strong>
        </p>
        <p style="color: #666; font-size: 14px;">
          This report contains 25 comprehensive sections covering your brain dominance, multiple intelligences, career recommendations, college mapper, and more.
        </p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
        <p style="color: #999; font-size: 12px;">
          DMIT Pro | Private & Confidential
        </p>
      </div>
    `,
    text: `Your DMIT Report is Ready!\n\nHi ${clientName},\n\nYour DMIT report has been generated.\n\nAnalysis Number: ${analysisNo}\n${reportUrl ? `View report: ${reportUrl}\n` : ''}Prepared by: ${counselorName}`,
  }
}

export function getSubscriptionExpiryEmailTemplate(counselorName: string, daysLeft: number, expiryDate: string) {
  const urgencyColor = daysLeft <= 3 ? '#c23a3a' : daysLeft <= 7 ? '#f5ad28' : '#00715f'
  const heading = daysLeft <= 0 ? 'Your Subscription Has Expired' : `Your Subscription Expires in ${daysLeft} Day${daysLeft !== 1 ? 's' : ''}`

  return {
    subject: heading,
    html: `
      <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <h1 style="color: ${urgencyColor}; font-size: 28px; margin-bottom: 8px;">${heading}</h1>
        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          Hi <strong>${counselorName}</strong>,
        </p>
        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          ${daysLeft <= 0
            ? 'Your DMIT Pro subscription has expired. Renew now to continue generating reports and accessing all premium features.'
            : `Your DMIT Pro subscription will expire on <strong>${expiryDate}</strong>. Renew now to avoid interruption.`}
        </p>
        <div style="background: ${urgencyColor}15; border-radius: 10px; padding: 20px; margin: 24px 0; text-align: center;">
          <p style="color: #333; font-size: 16px; margin: 0;">
            Annual Plan: <strong style="color: ${urgencyColor};">₹11,988/year</strong> (₹999/month)
          </p>
        </div>
        <p style="text-align: center; margin: 24px 0;">
          <a href="#" style="background: ${urgencyColor}; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">Renew Subscription</a>
        </p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
        <p style="color: #999; font-size: 12px;">
          DMIT Pro | Need help? Contact support
        </p>
      </div>
    `,
    text: `${heading}\n\nHi ${counselorName},\n\n${daysLeft <= 0 ? 'Your subscription has expired. Renew to continue.' : `Your subscription expires on ${expiryDate}.`}\n\nAnnual Plan: ₹11,988/year`,
  }
}
