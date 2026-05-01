# 🚀 DMIT Pro - Deployment Guide for life.learnsaleswithcj.com

## ✅ Your Domain: https://life.learnsaleswithcj.com

---

## 📦 Files You Need

Use the file: **`dmit-pro-final.zip`** (5.46 MB)

This contains everything pre-built and ready to upload.

---

## 🚀 Step-by-Step Deployment

### STEP 1: Upload ZIP File

1. Log into **cPanel**
2. Open **File Manager**
3. Navigate to: `/home/zoecheaa/life.learnsaleswithcj.com/`
4. Click **"Upload"**
5. Select `dmit-pro-final.zip`
6. Wait for upload (may take 1-2 minutes)

### STEP 2: Extract ZIP

1. In File Manager, **right-click** `dmit-pro-final.zip`
2. Click **"Extract"**
3. Make sure it extracts to: `/home/zoecheaa/life.learnsaleswithcj.com/`
4. Click **"Extract Files"**
5. **Delete** the zip file after extraction

### STEP 3: Verify File Structure

You should see these in `life.learnsaleswithcj.com/`:

```
life.learnsaleswithcj.com/
├── index.html              ← Website homepage
├── assets/                 ← Website CSS & JS
│   ├── index-BX0-ppen.css
│   └── index-C7PoSYkw.js
├── api/                    ← Backend API
│   ├── dist/               ← Compiled API code
│   ├── node_modules/       ← Pre-installed dependencies!
│   ├── package.json
│   └── drizzle.config.ts
└── packages/
    └── shared/
        ├── dist/
        └── package.json
```

**If you see all these folders, you're good!**

---

## STEP 4: Create MySQL Database

1. In cPanel, find **"MySQL® Databases"** (under Databases section)
2. **Create Database:**
   - Database Name: `dmit_pro`
   - Click "Create Database"
3. **Create User:**
   - Username: `dmit_user`
   - Password: Click "Password Generator" → "Use Password"
   - **COPY AND SAVE THE PASSWORD!**
   - Click "Create User"
4. **Add User to Database:**
   - User: `dmit_user`
   - Database: `dmit_pro`
   - Click "Add"
   - Check **"ALL PRIVILEGES"**
   - Click "Make Changes"

**Save this info:**
```
Database: dmit_pro
Username: dmit_user
Password: (your copied password)
Host: localhost
```

---

## STEP 5: Set Up Node.js Application

1. In cPanel, find **"Setup Node.js App"**
2. Click **"CREATE APPLICATION"**
3. Fill in EXACTLY:

| Field | Value |
|-------|-------|
| **Node.js version** | 22.x |
| **Application mode** | Production |
| **Application root** | `life.learnsaleswithcj.com/api` |
| **Application URL** | `life.learnsaleswithcj.com` |
| **Application startup file** | `dist/index.js` |

4. Click **"Create"**

---

## STEP 6: Add Environment Variables

In your Node.js app settings, find **"Environment Variables"** and add these ONE BY ONE:

### Variable 1
- Name: `NODE_ENV`
- Value: `production`

### Variable 2
- Name: `PORT`
- Value: `3000`

### Variable 3 (IMPORTANT!)
- Name: `DATABASE_URL`
- Value: `mysql://dmit_user:YOUR_PASSWORD@localhost:3306/dmit_pro`
  
  **Replace `YOUR_PASSWORD` with your actual MySQL password!**
  
  Example: `mysql://dmit_user:Hello123@localhost:3306/dmit_pro`

### Variable 4
- Name: `JWT_SECRET`
- Value: `your-super-secret-jwt-key-min-32-chars-long`

### Variable 5
- Name: `JWT_REFRESH_SECRET`
- Value: `your-refresh-secret-key-different-from-above`

### Variable 6
- Name: `RAZORPAY_KEY_ID`
- Value: `rzp_test_placeholder` (or your real key)

### Variable 7
- Name: `RAZORPAY_KEY_SECRET`
- Value: `placeholder_secret` (or your real secret)

### Variable 8
- Name: `RAZORPAY_WEBHOOK_SECRET`
- Value: `random-webhook-secret-string-here`

### Variable 9
- Name: `RESEND_API_KEY`
- Value: `re_placeholder` (or your real key)

### Variable 10
- Name: `EMAIL_FROM`
- Value: `noreply@learnsaleswithcj.com`

### Variable 11
- Name: `FRONTEND_URL`
- Value: `https://life.learnsaleswithcj.com`

### Variable 12
- Name: `API_URL`
- Value: `https://life.learnsaleswithcj.com`

**Click "Save"**

---

## STEP 7: Start the Application

1. In "Setup Node.js App", find your application
2. Click **"Restart"** button
3. Wait 5-10 seconds
4. Status should turn **GREEN** (Running)

---

## STEP 8: Test Your Website

### Test 1: Website Loads
Open browser:
```
https://life.learnsaleswithcj.com
```

Should show the DMIT Pro landing page.

### Test 2: API Health
Open browser:
```
https://life.learnsaleswithcj.com/api/health
```

Should show: `{"status":"ok"}`

### Test 3: Registration
1. Go to `https://life.learnsaleswithcj.com`
2. Click "Register" or "Get Started"
3. Fill in your details
4. Click "Create Account"
5. Should register successfully!

---

## 🎉 DONE!

Your DMIT Pro is live at:
- **Website:** https://life.learnsaleswithcj.com
- **API:** https://life.learnsaleswithcj.com/api

---

## 🔧 Troubleshooting

| Problem | Solution |
|---------|----------|
| "Cannot find module" | This shouldn't happen since node_modules are included. Contact me if it does. |
| "Database connection failed" | Check DATABASE_URL. Make sure password is correct. No special characters like `@` or `#` in password. |
| "Port already in use" | Change PORT to 3001 or 8080 |
| "404 Not Found" | Make sure Application startup file is: `dist/index.js` |
| Blank white page | Open browser console (F12) → Check for errors. Make sure API is running (green status). |
| "This site can't be reached" | Wait 5 minutes. Make sure domain DNS is pointed to your server. |

---

## 📞 Need Help?

If anything doesn't work:
1. Take a **screenshot** of the error
2. Tell me **which step** you're on
3. I'll help you fix it!

---

## 🚀 Next Steps (After Deployment)

1. **Set up Razorpay:**
   - Get live keys from https://dashboard.razorpay.com
   - Update `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` in environment variables
   - Set webhook URL: `https://life.learnsaleswithcj.com/api/payments/webhook`

2. **Set up Email:**
   - Get API key from https://resend.com
   - Update `RESEND_API_KEY` in environment variables

3. **Create Admin User:**
   - Register a normal account
   - I'll help you make it admin

4. **Test Report Generation:**
   - Login
   - Create a new report with real fingerprint data
   - Download and view the report

**Good luck! You've got this! 🎉**
