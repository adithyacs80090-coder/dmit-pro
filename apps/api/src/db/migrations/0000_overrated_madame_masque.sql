CREATE TABLE `clients` (
	`id` varchar(36) NOT NULL,
	`counselor_id` varchar(36) NOT NULL,
	`name` varchar(255) NOT NULL,
	`dob` varchar(10) NOT NULL,
	`age_at_test` int NOT NULL,
	`mobile` varchar(20),
	`email` varchar(255),
	`analysis_no` varchar(50) NOT NULL,
	`created_at` datetime NOT NULL DEFAULT now(),
	CONSTRAINT `clients_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `colleges` (
	`id` varchar(36) NOT NULL,
	`name` varchar(255) NOT NULL,
	`location` varchar(255) NOT NULL,
	`country` varchar(100) NOT NULL,
	`ranking` int,
	`fees_inr` int,
	`fees_display` varchar(100),
	`entrance_exam` varchar(255),
	`course_name` varchar(255),
	`type` varchar(20) NOT NULL,
	`career_tags` json,
	`scholarships` json,
	`admission_timeline` json,
	`website_url` text,
	`created_at` datetime NOT NULL DEFAULT now(),
	`updated_at` datetime NOT NULL DEFAULT now(),
	CONSTRAINT `colleges_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `counselors` (
	`id` varchar(36) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password_hash` varchar(255) NOT NULL,
	`center_name` varchar(255) NOT NULL,
	`counselor_name` varchar(255) NOT NULL,
	`logo_url` text,
	`phone` varchar(20),
	`role` varchar(20) NOT NULL DEFAULT 'counselor',
	`is_active` boolean NOT NULL DEFAULT true,
	`subscription_status` varchar(20) NOT NULL DEFAULT 'trial',
	`subscription_started_at` datetime,
	`subscription_ends_at` datetime,
	`trial_ends_at` datetime,
	`created_at` datetime NOT NULL DEFAULT now(),
	`updated_at` datetime NOT NULL DEFAULT now(),
	CONSTRAINT `counselors_id` PRIMARY KEY(`id`),
	CONSTRAINT `counselors_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `payments` (
	`id` varchar(36) NOT NULL,
	`counselor_id` varchar(36) NOT NULL,
	`razorpay_order_id` varchar(255),
	`razorpay_payment_id` varchar(255),
	`amount` int NOT NULL,
	`currency` varchar(10) NOT NULL DEFAULT 'INR',
	`status` varchar(20) NOT NULL DEFAULT 'created',
	`plan` varchar(20) NOT NULL DEFAULT 'annual',
	`credits` int NOT NULL DEFAULT 0,
	`created_at` datetime NOT NULL DEFAULT now(),
	CONSTRAINT `payments_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `reports` (
	`id` varchar(36) NOT NULL,
	`client_id` varchar(36) NOT NULL,
	`counselor_id` varchar(36) NOT NULL,
	`fingerprint_data` json NOT NULL,
	`results` json NOT NULL,
	`html_snapshot` text,
	`language` varchar(10) NOT NULL DEFAULT 'en',
	`download_url` text,
	`created_at` datetime NOT NULL DEFAULT now(),
	CONSTRAINT `reports_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `translations` (
	`id` varchar(36) NOT NULL,
	`key` varchar(500) NOT NULL,
	`language` varchar(10) NOT NULL,
	`value` text NOT NULL,
	`section` varchar(100),
	`created_at` datetime NOT NULL DEFAULT now(),
	CONSTRAINT `translations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `clients_counselor_idx` ON `clients` (`counselor_id`);--> statement-breakpoint
CREATE INDEX `clients_analysis_no_idx` ON `clients` (`analysis_no`);--> statement-breakpoint
CREATE INDEX `colleges_name_idx` ON `colleges` (`name`);--> statement-breakpoint
CREATE INDEX `colleges_country_idx` ON `colleges` (`country`);--> statement-breakpoint
CREATE INDEX `counselors_email_idx` ON `counselors` (`email`);--> statement-breakpoint
CREATE INDEX `payments_counselor_idx` ON `payments` (`counselor_id`);--> statement-breakpoint
CREATE INDEX `payments_order_idx` ON `payments` (`razorpay_order_id`);--> statement-breakpoint
CREATE INDEX `reports_counselor_idx` ON `reports` (`counselor_id`);--> statement-breakpoint
CREATE INDEX `reports_client_idx` ON `reports` (`client_id`);--> statement-breakpoint
CREATE INDEX `translations_key_lang_idx` ON `translations` (`key`,`language`);