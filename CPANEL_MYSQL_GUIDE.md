# 🚀 DMIT Pro - MySQL cPanel Deployment Guide

**✅ CONVERTED FOR MYSQL!** This guide works with standard cPanel hosting (Hostinger, Bluehost, etc.)

**Estimated time:** 30-45 minutes for a beginner

---

## 📋 BEFORE YOU START

Make sure you have:
- [ ] `cpanel-deploy-mysql.zip` file (1.4 MB)
- [ ] Your cPanel login details
- [ ] Your domain name

---

## STEP 1: Log Into cPanel

1. Open your browser
2. Go to: `https://yourdomain.com:2083` (replace with your domain)
3. Enter your cPanel username and password
4. Click **"Log in"**

---

## STEP 2: Create MySQL Database

### 2.1 Find MySQL Databases
1. In cPanel, **scroll down** to the **"Databases"** section
2. Click **"MySQL® Databases"**

### 2.2 Create Database
1. Under **"Create New Database"**, type: **`dmit_pro`**
2. Click **"Create Database"**
3. You should see a green success message

### 2.3 Create Database User
1. Scroll down to **"Add New User"**
2. **Username:** `dmit_user`
3. **Password:** Click **"Password Generator"**
   - Click **"Use Password"**
   - **COPY THE PASSWORD** and save it in Notepad!
4. Click **"Create User"**

### 2.4 Add User to Database
1. Scroll down to **"Add User To Database"**
2. **User:** Select `dmit_user`
3. **Database:** Select `dmit_pro`
4. Click **"Add"**
5. On the next page, check **"ALL PRIVILEGES"** (top checkbox)
6. Click **"Make Changes"**

**Save this info in Notepad:**
```
Database: dmit_pro
Username: dmit_user
Password: (your copied password)
Host: localhost
```

---

## STEP 3: Create Subdomain for API

1. In cPanel, find **"Subdomains"** (under Domains section)
2. **Subdomain:** `api`
3. **Domain:** Select your main domain
4. Click **"Create"**

Your API URL will be: `https://api.yourdomain.com`

---

## STEP 4: Upload Files

### 4.1 Upload ZIP File
1. In cPanel, click **"File Manager"**
2. Make sure you're in the **home directory** (`/home/username`), NOT `public_html`
3. Click **"Upload"** → Select `cpanel-deploy-mysql.zip`
4. Wait for upload to finish

### 4.2 Extract ZIP
1. In File Manager, **right-click** `cpanel-deploy-mysql.zip`
2. Click **"Extract"**
3. Click **"Extract Files"**
4. You should see a `cpanel-deploy/` folder with `api/`, `packages/`, and `web/` inside

---

## STEP 5: Upload Frontend to Website

1. In File Manager, go to `public_html`
2. **Delete** any existing files (or back them up first)
3. Go back to `cpanel-deploy/web/`
4. **Select all files** in `web/` folder
5. Click **"Move"** or **"Copy"** and move them to `public_html/`

**Your website files should now be in `public_html/`**

---

## STEP 6: Set Up Node.js Application

### 6.1 Create Node.js App
1. In cPanel, find **"Setup Node.js App"**
2. Click **"CREATE APPLICATION"**
3. Fill in:

| Field | Value |
|-------|-------|
| **Node.js version** | 22.x |
| **Application mode** | Production |
| **Application root** | `cpanel-deploy/api` |
| **Application URL** | `api.yourdomain.com` |
| **Application startup file** | `dist/index.js` |

4. Click **"Create"**

### 6.2 Set Environment Variables
Find **"Environment Variables"** in your Node.js app settings. Add these one by one:

```
NODE_ENV=production
PORT=3000
DATABASE_URL=mysql://dmit_user:YOUR_PASSWORD@localhost:3306/dmit_pro
JWT_SECRET=your-jwt-secret-min-32-chars-long-change-this
JWT_REFRESH_SECRET=your-refresh-secret-min-32-chars-change-this-too
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
RAZORPAY_WEBHOOK_SECRET=random-webhook-secret-string
RESEND_API_KEY=your_resend_key
EMAIL_FROM=noreply@yourdomain.com
FRONTEND_URL=https://yourdomain.com
API_URL=https://api.yourdomain.com
```

**Replace:**
- `YOUR_PASSWORD` with your actual MySQL password
- `yourdomain.com` with your real domain
- Razorpay and Resend keys (or use placeholder for now)

Click **"Save"**

---

## STEP 7: Install API Dependencies

1. In cPanel, click **"Terminal"**
2. Type this command and press Enter:

```bash
cd ~/cpanel-deploy/api && npm install --production
```

3. Wait for installation to complete (2-3 minutes)
4. You'll see `added XXX packages` when done

---

## STEP 8: Run Database Migrations

In **Terminal**, type:

```bash
cd ~/cpanel-deploy/api && npx drizzle-kit migrate
```

You should see: **"Database migrated successfully"**

If you get errors:
- Check your DATABASE_URL is correct
- Make sure the MySQL user has ALL PRIVILEGES

---

## STEP 9: Update Frontend API URL

The frontend needs to know where your API is.

1. In File Manager, go to `public_html/assets/`
2. Find the file: `index-C7PoSYkw.js` (the name might be slightly different)
3. **Right-click** → **"Edit"**
4. Press **Ctrl+F**, search for: `http://localhost`
5. **Replace all** with: `https://api.yourdomain.com`
6. Click **"Save Changes"**

---

## STEP 10: Start the API

1. Go to **Setup Node.js App**
2. Find your application
3. Click **"Restart"** or **"Start"**
4. Wait 5 seconds
5. Status should turn **green** (Running)

---

## STEP 11: Test Everything

### Test API
Open browser and go to:
```
https://api.yourdomain.com/api/health
```

**Should show:** `{"status":"ok"}`

### Test Website
Open:
```
https://yourdomain.com
```

**Should show:** DMIT Pro landing page

### Test Registration
1. Click **"Register"**
2. Fill in your details
3. Click **"Create Account"**
4. Should create account successfully

---

## ✅ DONE!

Your DMIT Pro is now live!
- **Website:** `https://yourdomain.com`
- **API:** `https://api.yourdomain.com`

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| "Cannot find module" | Run `cd ~/cpanel-deploy/api && npm install --production` |
| "Database connection failed" | Check DATABASE_URL. Make sure password is correct. No `@` or `#` in password. |
| "Port already in use" | Change PORT to 3001 or 8080 in environment variables |
| "404 Not Found" on API | Make sure app status is green (Running) |
| Blank white page | Check browser console (F12). Make sure API URL was updated in JS file. |
| "Email already registered" but it's a new email | Database might have old data. Clear database and restart. |

---

## 📞 Next Steps

1. **Set up SSL** (if not done): cPanel usually has AutoSSL that works automatically
2. **Configure Razorpay webhook**: `https://api.yourdomain.com/api/payments/webhook`
3. **Create admin user**: Register an account, then update role to 'admin' in database

**Need help?** Tell me exactly which step you're on and what error you see!
