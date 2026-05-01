import { mysqlTable, varchar, datetime, boolean, json, text, int, index } from 'drizzle-orm/mysql-core'
import { sql } from 'drizzle-orm'

export const counselors = mysqlTable('counselors', {
  id: varchar('id', { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHash: varchar('password_hash', { length: 255 }).notNull(),
  centerName: varchar('center_name', { length: 255 }).notNull(),
  counselorName: varchar('counselor_name', { length: 255 }).notNull(),
  logoUrl: text('logo_url'),
  phone: varchar('phone', { length: 20 }),

  role: varchar('role', { length: 20 }).notNull().default('counselor'),
  isActive: boolean('is_active').notNull().default(true),

  subscriptionStatus: varchar('subscription_status', { length: 20 }).notNull().default('trial'),
  subscriptionStartedAt: datetime('subscription_started_at'),
  subscriptionEndsAt: datetime('subscription_ends_at'),
  trialEndsAt: datetime('trial_ends_at'),

  createdAt: datetime('created_at').notNull().default(sql`now()`),
  updatedAt: datetime('updated_at').notNull().default(sql`now()`),
}, (table) => ({
  emailIdx: index('counselors_email_idx').on(table.email),
}));

export const clients = mysqlTable('clients', {
  id: varchar('id', { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  counselorId: varchar('counselor_id', { length: 36 }).notNull(),

  name: varchar('name', { length: 255 }).notNull(),
  dob: varchar('dob', { length: 10 }).notNull(),
  ageAtTest: int('age_at_test').notNull(),
  mobile: varchar('mobile', { length: 20 }),
  email: varchar('email', { length: 255 }),
  analysisNo: varchar('analysis_no', { length: 50 }).notNull(),

  createdAt: datetime('created_at').notNull().default(sql`now()`),
}, (table) => ({
  counselorIdx: index('clients_counselor_idx').on(table.counselorId),
  analysisNoIdx: index('clients_analysis_no_idx').on(table.analysisNo),
}));

export const reports = mysqlTable('reports', {
  id: varchar('id', { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  clientId: varchar('client_id', { length: 36 }).notNull(),
  counselorId: varchar('counselor_id', { length: 36 }).notNull(),

  fingerprintData: json('fingerprint_data').notNull(),
  results: json('results').notNull(),
  htmlSnapshot: text('html_snapshot'),
  language: varchar('language', { length: 10 }).notNull().default('en'),
  downloadUrl: text('download_url'),

  createdAt: datetime('created_at').notNull().default(sql`now()`),
}, (table) => ({
  counselorIdx: index('reports_counselor_idx').on(table.counselorId),
  clientIdx: index('reports_client_idx').on(table.clientId),
}));

export const payments = mysqlTable('payments', {
  id: varchar('id', { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  counselorId: varchar('counselor_id', { length: 36 }).notNull(),

  razorpayOrderId: varchar('razorpay_order_id', { length: 255 }),
  razorpayPaymentId: varchar('razorpay_payment_id', { length: 255 }),
  amount: int('amount').notNull(),
  currency: varchar('currency', { length: 10 }).notNull().default('INR'),
  status: varchar('status', { length: 20 }).notNull().default('created'),
  plan: varchar('plan', { length: 20 }).notNull().default('annual'),
  credits: int('credits').notNull().default(0),

  createdAt: datetime('created_at').notNull().default(sql`now()`),
}, (table) => ({
  counselorIdx: index('payments_counselor_idx').on(table.counselorId),
  orderIdx: index('payments_order_idx').on(table.razorpayOrderId),
}));

export const colleges = mysqlTable('colleges', {
  id: varchar('id', { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),

  name: varchar('name', { length: 255 }).notNull(),
  location: varchar('location', { length: 255 }).notNull(),
  country: varchar('country', { length: 100 }).notNull(),
  ranking: int('ranking'),
  feesInr: int('fees_inr'),
  feesDisplay: varchar('fees_display', { length: 100 }),
  entranceExam: varchar('entrance_exam', { length: 255 }),
  courseName: varchar('course_name', { length: 255 }),
  type: varchar('type', { length: 20 }).notNull(),
  careerTags: json('career_tags'),
  scholarships: json('scholarships'),
  admissionTimeline: json('admission_timeline'),
  websiteUrl: text('website_url'),

  createdAt: datetime('created_at').notNull().default(sql`now()`),
  updatedAt: datetime('updated_at').notNull().default(sql`now()`),
}, (table) => ({
  nameIdx: index('colleges_name_idx').on(table.name),
  countryIdx: index('colleges_country_idx').on(table.country),
}));

export const translations = mysqlTable('translations', {
  id: varchar('id', { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  key: varchar('key', { length: 500 }).notNull(),
  language: varchar('language', { length: 10 }).notNull(),
  value: text('value').notNull(),
  section: varchar('section', { length: 100 }),

  createdAt: datetime('created_at').notNull().default(sql`now()`),
}, (table) => ({
  keyLangIdx: index('translations_key_lang_idx').on(table.key, table.language),
}));
