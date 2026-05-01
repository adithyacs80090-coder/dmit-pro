import { db } from '../db/connection.js'
import { counselors } from '../db/schema.js'
import { sendEmail, getSubscriptionExpiryEmailTemplate } from '../utils/email.js'
import { eq, and, lte, gte } from 'drizzle-orm'
import cron from 'node-cron'

// Runs daily at 9:00 AM
export function startEmailCronJobs() {
  cron.schedule('0 9 * * *', async () => {
    console.log('[Cron] Running subscription expiry check...')
    await checkExpiringSubscriptions()
  })
}

async function checkExpiringSubscriptions() {
  const now = new Date()
  const sevenDaysFromNow = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

  try {
    // Get active subscriptions expiring in 7 days or less
    const expiringCounselors = await db.select().from(counselors).where(
      and(
        eq(counselors.subscriptionStatus, 'active'),
        lte(counselors.subscriptionEndsAt, sevenDaysFromNow),
        gte(counselors.subscriptionEndsAt, now)
      )
    )

    for (const counselor of expiringCounselors) {
      const daysLeft = Math.ceil((counselor.subscriptionEndsAt!.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
      const expiryDate = counselor.subscriptionEndsAt!.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })

      await sendEmail({
        to: counselor.email,
        ...getSubscriptionExpiryEmailTemplate(counselor.counselorName, daysLeft, expiryDate),
      })
    }

    // Get expired subscriptions (status still active but date passed)
    const expiredCounselors = await db.select().from(counselors).where(
      and(
        eq(counselors.subscriptionStatus, 'active'),
        lte(counselors.subscriptionEndsAt, now)
      )
    )

    for (const counselor of expiredCounselors) {
      // Update status to expired
      await db.update(counselors)
        .set({ subscriptionStatus: 'expired' })
        .where(eq(counselors.id, counselor.id))

      await sendEmail({
        to: counselor.email,
        ...getSubscriptionExpiryEmailTemplate(counselor.counselorName, 0, 'Today'),
      })
    }

    console.log(`[Cron] Sent expiry reminders to ${expiringCounselors.length} counselors, expired ${expiredCounselors.length}`)
  } catch (error) {
    console.error('[Cron] Subscription expiry check failed:', error)
  }
}
