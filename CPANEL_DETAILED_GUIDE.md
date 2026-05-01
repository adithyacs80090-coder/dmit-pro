# 🚀 DMIT Pro - Ultra Detailed cPanel Deployment Guide for Beginners

**⚠️ IMPORTANT:** I cannot access your cPanel directly. This guide will walk you through every single click, but you must follow it on your own computer. If you get stuck at any step, tell me exactly what you see on your screen and I'll help you.

---

## 📋 BEFORE YOU START - Checklist

Make sure you have these ready:

- [ ] `cpanel-deploy.zip` file on your computer (created by the build script)
- [ ] Your cPanel login URL, username, and password
- [ ] Your domain name (e.g., `yourdomain.com`)
- [ ] A text file or notepad to save passwords (you'll generate several)

**Estimated time:** 30-45 minutes for a beginner

---

## STEP 1: Log Into cPanel

### 1.1 Open Your Browser
Open **Google Chrome**, **Firefox**, or **Safari**.

### 1.2 Go to Your cPanel URL
Type one of these into your browser address bar:

```
https://yourdomain.com:2083
```

**OR** (if the above doesn't work):

```
https://yourdomain.com/cpanel
```

**Replace `yourdomain.com` with your actual domain name.**

**Example:** If your domain is `zoecheaa.com`, type:
```
https://zoecheaa.com:2083
```

### 1.3 Enter Your Login Details
You will see a login page asking for:
- **Username:** `zoecheaa` (or whatever your cPanel username is)
- **Password:** Your cPanel password

Click the **"Log in"** button.

### 1.4 You Should See the cPanel Dashboard
It looks like a grid of icons. You did it right if you see things like "File Manager", "Email Accounts", "Databases", etc.

**If you can't log in:** Contact your hosting provider (Mumu Host Cloud) and ask for your cPanel login URL and credentials.

---

## STEP 2: Create a Subdomain for the API

The API (backend) needs its own web address. We'll create a subdomain like `api.yourdomain.com`.

### 2.1 Find "Subdomains" in cPanel
1. Scroll down the cPanel dashboard
2. Look for the **"Domains"** section (it has a globe icon)
3. Click on **"Subdomains"**

### 2.2 Create the Subdomain
You will see a form. Fill it in exactly like this:

| Field | What to Type |
|-------|-------------|
| **Subdomain** | `api` |
| **Domain** | Select your main domain from the dropdown (e.g., `yourdomain.com`) |
| **Document Root** | `public_html/api` (cPanel will fill this automatically) |

Click the **"Create"** button.

### 2.3 Wait for Confirmation
You should see a green success message: *"The subdomain api.yourdomain.com has been created."*

**Save this info:**
- Your API URL will be: `https://api.yourdomain.com`

---

## STEP 3: Upload the ZIP File

### 3.1 Open File Manager
1. In cPanel, look for **"File Manager"** (it has a folder icon)
2. Click on **"File Manager"**
3. A new tab/window opens showing your files

### 3.2 Make Sure You're in the Home Directory
When File Manager opens, look at the top path bar. It should show:
```
/home/zoecheaa
```

**If you see `/home/zoecheaa/public_html`, click on "Up One Level" or click `zoecheaa` in the path bar.**

You should NOT be in `public_html` yet. You should be in the folder ABOVE it.

### 3.3 Upload the ZIP File
1. In File Manager, click the **"Upload"** button at the top (it looks like an upward arrow)
2. A new tab opens saying "Upload Files"
3. Click the **"Select File"** button
4. Find `cpanel-deploy.zip` on your computer and select it
5. Wait for the upload to finish (you'll see a green progress bar)
6. When it says "100% Complete", close the upload tab

### 3.4 Go Back to File Manager
Click back on the File Manager tab.

### 3.5 Extract (Unzip) the File
1. You should now see `cpanel-deploy.zip` in the file list
2. **Right-click** on `cpanel-deploy.zip`
3. A menu appears. Click **"Extract"**
4. A popup asks "Extract to:" - make sure it shows `/home/zoecheaa/`
5. Click **"Extract Files"**
6. Wait for extraction to complete (10-20 seconds)
7. Click **"Close"** on the results window

### 3.6 Verify Extraction
You should now see a new folder called **`cpanel-deploy`** in the file list.

**Double-click** `cpanel-deploy` to open it.

You should see 3 folders inside:
- `api`
- `packages`
- `web`

**If you see these 3 folders, you did it correctly!**

---

## STEP 4: Create PostgreSQL Database

The app needs a database to store user accounts, reports, and payments.

### 4.1 Go Back to cPanel Dashboard
Click the **cPanel logo** at the top left, or click the browser back button.

### 4.2 Find PostgreSQL Databases
1. Scroll down to find the **"Databases"** section
2. Click on **"PostgreSQL Databases"**

**If you don't see "PostgreSQL Databases":**
- Look for "Postgres" or "PostgreSQL" anywhere on the cPanel dashboard
- If you truly don't have it, contact Mumu Host Cloud support and ask them to enable PostgreSQL for your account

### 4.3 Create the Database
1. Under **"Create New Database"**, type: **`dmit_pro`**
2. Click **"Create Database"**
3. You should see a green success message

### 4.4 Create a Database User
1. Scroll down to **"Add New User"**
2. **Username:** Type `dmit_user`
3. **Password:** Click **"Password Generator"** to create a strong password
   - A popup shows a random password. **Click "Use Password"**
   - **IMPORTANT: Copy this password and save it in a text file on your computer!**
   - You'll need this password later
4. Click **"Create User"**
5. You should see a green success message

### 4.5 Give the User Permission to Use the Database
1. Scroll down to **"Add User To Database"**
2. **User:** Select `dmit_user` from the dropdown
3. **Database:** Select `dmit_pro` from the dropdown
4. Click **"Add"**
5. A new page opens showing a list of checkboxes
6. **Click the checkbox at the top labeled "ALL PRIVILEGES"**
   - This checks all the boxes below it
7. Click **"Make Changes"**
8. You should see a green success message

### 4.6 Save Your Database Information
Open Notepad on your computer and save this:

```
Database Name: dmit_pro
Username: dmit_user
Password: (paste the password you saved here)
Host: localhost
Port: 5432
```

**Keep this safe!** You'll need it in Step 6.

---

## STEP 5: Set Up Node.js Application

This runs your API (backend server).

### 5.1 Find Setup Node.js App
1. Go back to the cPanel dashboard
2. Scroll down to the **"Software"** section
3. Click **"Setup Node.js App"**

### 5.2 Create New Application
1. You should see a page titled "Node.js" with a blue button
2. Click the blue **"CREATE APPLICATION"** button

### 5.3 Fill In the Application Form
A form appears. Fill it in EXACTLY like this:

| Field | What to Select/Type |
|-------|-------------------|
| **Node.js version** | Select **22.x** from the dropdown |
| **Application mode** | Select **Production** |
| **Application root** | Type: `cpanel-deploy/api` |
| **Application URL** | Select your subdomain: **`api.yourdomain.com`** |
| **Application startup file** | Type: **`dist/index.js`** |

### 5.4 Click "Create"
Click the **"Create"** button at the bottom.

### 5.5 Wait for Creation
You should see your new app listed with:
- Status: Stopped (red icon)
- Node.js version: 22.x
- Application URL: api.yourdomain.com

**Don't start it yet!** We need to install dependencies first.

---

## STEP 6: Install API Dependencies

The API needs additional software packages to work. We'll install them using the cPanel Terminal.

### 6.1 Open Terminal
1. Go back to cPanel dashboard
2. Scroll down to **"Advanced"** section
3. Click **"Terminal"**

**If Terminal asks for permission:** Click "I understand and want to proceed" or similar.

### 6.2 You Should See a Black Screen
This is the command line. It shows something like:
```
[zoecheaa@rs4-mbi ~]$
```

The `$` means it's ready for your command.

### 6.3 Run the Install Command
**Carefully** type this command (or copy and paste it):

```bash
cd ~/cpanel-deploy/api && npm install --production
```

**Then press Enter.**

### 6.4 Wait for Installation
You'll see lots of text scrolling. This is normal. It will say things like:
```
added 150 packages in 45s
```

**Wait until you see the prompt (`$`) again.** This means it's done.

**If you see red error messages:** Copy the error and tell me.

### 6.5 Verify Installation
Type this command and press Enter:

```bash
ls ~/cpanel-deploy/api/node_modules | head -20
```

You should see a list of folder names like `express`, `zod`, `drizzle-orm`, etc.

**If you see these folders, the installation worked!**

---

## STEP 7: Set Environment Variables

These are secret settings the API needs to connect to your database, send emails, and process payments.

### 7.1 Go Back to Node.js App Manager
1. In cPanel dashboard, click **"Setup Node.js App"** again
2. You should see your application listed
3. Click the **pencil icon** (Edit) on the right side of your app

### 7.2 Add Environment Variables
Scroll down to the section titled **"Environment Variables"** or **"Add Variable"**.

You need to add these variables ONE BY ONE. Click **"Add Variable"** for each:

#### Variable 1:
- **Name:** `NODE_ENV`
- **Value:** `production`

#### Variable 2:
- **Name:** `PORT`
- **Value:** `3000`

#### Variable 3:
- **Name:** `DATABASE_URL`
- **Value:** (Replace YOUR_PASSWORD with your actual database password from Step 4)
```
postgres://dmit_user:YOUR_PASSWORD@localhost:5432/dmit_pro
```

**Example if your password was `Hello123!`:**
```
postgres://dmit_user:Hello123!@localhost:5432/dmit_pro
```

#### Variable 4:
- **Name:** `JWT_SECRET`
- **Value:** (Generate a random string, at least 32 characters)
```
my-super-secret-jwt-key-change-this-to-something-random-12345
```

#### Variable 5:
- **Name:** `JWT_REFRESH_SECRET`
- **Value:** (A different random string)
```
my-refresh-secret-key-change-this-too-make-it-different-67890
```

#### Variable 6:
- **Name:** `RAZORPAY_KEY_ID`
- **Value:** `rzp_test_XXXXXXXXXXXX`
  - **Get this from:** https://dashboard.razorpay.com/app/api-keys
  - If you don't have Razorpay yet, type a placeholder: `placeholder_key`

#### Variable 7:
- **Name:** `RAZORPAY_KEY_SECRET`
- **Value:** `XXXXXXXXXXXXXXXXXXXXXXXX`
  - **Get this from:** https://dashboard.razorpay.com/app/api-keys
  - If you don't have Razorpay yet, type a placeholder: `placeholder_secret`

#### Variable 8:
- **Name:** `RAZORPAY_WEBHOOK_SECRET`
- **Value:** `webhook-secret-random-string-here`
  - Make up any random string

#### Variable 9:
- **Name:** `RESEND_API_KEY`
- **Value:** `re_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`
  - **Get this from:** https://resend.com/api-keys
  - If you don't have Resend yet, type a placeholder: `placeholder_resend`

#### Variable 10:
- **Name:** `EMAIL_FROM`
- **Value:** `noreply@yourdomain.com`
  - Replace with your actual domain

#### Variable 11:
- **Name:** `FRONTEND_URL`
- **Value:** `https://yourdomain.com`
  - Replace with your actual domain

#### Variable 12:
- **Name:** `API_URL`
- **Value:** `https://api.yourdomain.com`
  - Replace with your actual subdomain

### 7.3 Save the Variables
Click the **"Save"** button at the bottom of the page.

---

## STEP 8: Run Database Migrations

This creates the tables (users, reports, payments) in your database.

### 8.1 Open Terminal Again
1. cPanel dashboard → **Terminal**

### 8.2 Run the Migration Command
Type this exactly and press Enter:

```bash
cd ~/cpanel-deploy/api && npx drizzle-kit migrate
```

### 8.3 What You Should See
```
Using config 'drizzle.config.ts'
Applying migrations...
✓ Database migrated successfully
```

**If you see errors:**
- Check that your DATABASE_URL is correct
- Make sure the PostgreSQL user has ALL PRIVILEGES
- Tell me the exact error message

---

## STEP 9: Upload Frontend Files

The frontend is the website people see. It's just HTML, CSS, and JavaScript files.

### 9.1 Open File Manager
1. cPanel dashboard → **File Manager**

### 9.2 Go to public_html
1. In the left sidebar, click on **`public_html`**
2. The main area shows files in `public_html`

**If you see files here already (like index.html, wp-content, etc.):**
- This is normal if you had a website before
- You can either:
  - Delete everything (if you don't need old files)
  - Or create a subfolder for DMIT Pro

**To delete old files:**
1. Click **"Select All"** at the top
2. Click **"Delete"** (trash can icon)
3. Confirm deletion

### 9.3 Upload Web Files
1. Click **"Upload"** button
2. Select ALL files from the `cpanel-deploy/web/` folder on your computer:
   - `index.html`
   - The `assets` folder
3. Upload them to `public_html`

**Alternative method (better for folders):**
1. On your computer, zip the contents of `cpanel-deploy/web/` into `web.zip`
2. Upload `web.zip` to `public_html`
3. Right-click → Extract
4. Delete the zip file after extraction

### 9.4 Verify Files
In File Manager, inside `public_html`, you should see:
- `index.html`
- `assets/` (folder)

Double-click `assets` to make sure it contains `.js` and `.css` files.

---

## STEP 10: Update Frontend API URL

The frontend needs to know where your API is located.

### 10.1 Find the JavaScript File
1. In File Manager, navigate to `public_html/assets/`
2. Look for a file named something like: `index-C7PoSYkw.js`
   - The letters/numbers after `index-` might be different
   - This is your main JavaScript file

### 10.2 Edit the File
1. **Right-click** on the `index-XXXXXX.js` file
2. Click **"Edit"**
3. A text editor opens

### 10.3 Find and Replace the API URL
1. Press **Ctrl+F** (or Cmd+F on Mac) to open Find
2. In the search box, type: `http://localhost`
3. Click **"Find All"** or press Enter

You should find instances like:
```
http://localhost:3000
```

4. Click **"Replace"**
5. In the "Replace with" box, type your API URL:
```
https://api.yourdomain.com
```

**Replace ALL occurrences.**

### 10.4 Save the File
Click **"Save Changes"** at the top right.

---

## STEP 11: Start the API

### 11.1 Go to Node.js App Manager
1. cPanel dashboard → **Setup Node.js App**

### 11.2 Start Your App
1. Find your application in the list
2. Click the **"Start"** or **"Restart"** button (play icon)
3. Wait 5-10 seconds
4. The status should change from red (Stopped) to green (Running)

### 11.3 Test the API
Open a new browser tab and type:
```
https://api.yourdomain.com/api/health
```

**What you should see:**
```json
{"status":"ok"}
```

**If you see an error or blank page:**
1. Wait 30 seconds and try again
2. Check Node.js App logs (there's a "Logs" button in cPanel)
3. Tell me the exact error

---

## STEP 12: Test Your Website

### 12.1 Open Your Domain
In a browser, go to:
```
https://yourdomain.com
```

### 12.2 What You Should See
- The DMIT Pro landing page
- Login and Register buttons
- Professional design with green/white colors

### 12.3 Test Registration
1. Click **"Register"** or **"Get Started"**
2. Fill in:
   - Email: your real email
   - Password: something you'll remember (min 8 characters)
   - Center Name: Your Business Name
   - Your Name: Your Name
3. Click **"Create Account"**

### 12.4 Check Your Email
You should receive a welcome email within 1 minute (check spam folder too).

**If email doesn't arrive:**
- That's okay for now! The app still works.
- Email needs Resend API key to be configured.

---

## STEP 13: Create Admin User (Optional but Recommended)

To access the admin panel, you need to make your account an admin.

### 13.1 Use Terminal
1. cPanel → **Terminal**

### 13.2 Run SQL Command
Type this (replace `your-email@example.com` with your actual email):

```bash
cd ~/cpanel-deploy/api && npx drizzle-kit studio
```

This opens a database browser. **OR** if that doesn't work, use this direct command:

```bash
psql -U dmit_user -d dmit_pro -c "UPDATE counselors SET role = 'admin' WHERE email = 'your-email@example.com';"
```

When it asks for a password, type your PostgreSQL password.

### 13.3 Verify
Log out and log back into your website. You should now see an **"Admin"** link in the sidebar.

---

## ✅ DEPLOYMENT COMPLETE!

Your DMIT Pro is now live at:
- **Website:** `https://yourdomain.com`
- **API:** `https://api.yourdomain.com`

---

## 🔧 Quick Fixes for Common Problems

### Problem: "This site can't be reached"
**Solution:**
- Wait 5-10 minutes for DNS to update
- Make sure your domain points to your hosting
- Clear browser cache (Ctrl+Shift+R)

### Problem: "404 Not Found" on API
**Solution:**
- Make sure the Node.js app is Running (green icon)
- Check Application startup file is `dist/index.js`
- Restart the Node.js app

### Problem: "Cannot connect to database"
**Solution:**
- Double-check DATABASE_URL in environment variables
- Make sure password doesn't have special characters like `@` or `#`
- If password has special chars, change it in PostgreSQL and update the URL

### Problem: "Registration failed"
**Solution:**
- Check API is running
- Check browser console (F12) for red errors
- Make sure API URL was updated in the JavaScript file

### Problem: Blank white page
**Solution:**
- Check browser console (F12 → Console tab) for errors
- Make sure all files were uploaded to public_html
- Try refreshing with Ctrl+F5

---

## 📞 What to Do If You're Stuck

If any step doesn't work:

1. **Take a screenshot** of what you see
2. **Copy any error messages** exactly
3. **Tell me which step number** you're on
4. I'll help you fix it

**Remember:** There's no stupid question when you're learning. I'm here to help!
