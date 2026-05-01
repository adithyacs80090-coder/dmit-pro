# 🚀 DMIT Pro - cPanel Deployment Guide (Mumu Host Cloud)

## ✅ Your Package is Ready!

File: `cpanel-deploy.zip` (1.4 MB)

This package contains:
- `api/` - Node.js backend (built and ready)
- `packages/shared/` - Shared utilities
- `web/` - React frontend (static files)

---

## Step 1: Upload to cPanel

### 1.1 Upload the ZIP file
1. Log into your **cPanel**
2. Open **File Manager**
3. Navigate to your **home directory** (not public_html)
4. Click **Upload** → Select `cpanel-deploy.zip`
5. After upload, **right-click the zip** → **Extract**

You should now have a `cpanel-deploy/` folder with `api/`, `packages/`, and `web/` inside.

---

## Step 2: Create PostgreSQL Database

1. In cPanel, find **"PostgreSQL Databases"** (under Databases section)
2. **Create Database**: Enter `dmit_pro` → Click **Create Database**
3. **Create User**: 
   - Username: `dmit_user`
   - Password: Generate a strong password (save it!)
   - Click **Create User**
4. **Add User to Database**:
   - Select `dmit_user` and `dmit_pro`
   - Check **ALL PRIVILEGES**
   - Click **Add**

**Save these details** - you'll need them in Step 5:
- Database name: `dmit_pro`
- Username: `dmit_user`
- Password: (your generated password)

---

## Step 3: Set Up Node.js Application (API)

1. In cPanel, find **"Setup Node.js App"** (under Software section)
2. Click **"CREATE APPLICATION"**
3. Fill in the form:

| Field | Value |
|-------|-------|
| **Node.js version** | 22.x |
| **Application mode** | Production |
| **Application root** | `cpanel-deploy/api` |
| **Application URL** | `api.yourdomain.com` (create a subdomain first) OR use a path like `yourdomain.com/api` |
| **Application startup file** | `dist/index.js` |

4. Click **CREATE**

### If you don't have a subdomain:
1. Go to **Subdomains** in cPanel
2. Create `api.yourdomain.com`
3. Point it to `cpanel-deploy/api`
4. Then come back to Node.js App setup

---

## Step 4: Install API Dependencies

### Option A: Using cPanel Terminal (easiest)
1. In cPanel, open **Terminal**
2. Run these commands:

```bash
cd ~/cpanel-deploy/api
npm install --production
```

### Option B: Using SSH
```bash
ssh zoecheaa@your-server-ip
cd ~/cpanel-deploy/api
npm install --production
```

**Wait for installation to complete** (may take 2-3 minutes)

---

## Step 5: Configure Environment Variables

In your **Node.js App** settings, find **"Environment Variables"** or **"Add Variable"** and add these:

```
NODE_ENV=production
PORT=3000
DATABASE_URL=postgres://dmit_user:YOUR_PASSWORD@localhost:5432/dmit_pro
JWT_SECRET=your-jwt-secret-min-32-chars-long
JWT_REFRESH_SECRET=your-refresh-secret-min-32-chars-long
RAZORPAY_KEY_ID=your_razorpay_key_here
RAZORPAY_KEY_SECRET=your_razorpay_secret_here
RAZORPAY_WEBHOOK_SECRET=generate-random-secret-here
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=noreply@yourdomain.com
FRONTEND_URL=https://yourdomain.com
API_URL=https://api.yourdomain.com
```

**Important**: Replace these with your real values:
- `YOUR_PASSWORD` → Your PostgreSQL password from Step 2
- `your_razorpay_key_here` → From Razorpay Dashboard
- `your_razorpay_secret_here` → From Razorpay Dashboard
- `your_resend_api_key` → From Resend Dashboard
- `yourdomain.com` → Your actual domain

---

## Step 6: Run Database Migrations

This creates the tables in your database.

In **cPanel Terminal**:
```bash
cd ~/cpanel-deploy/api
npx drizzle-kit migrate
```

If you see "Migration successful", you're good!

---

## Step 7: Upload Frontend

### 7.1 Upload static files
1. In **File Manager**, go to `public_html` (or your domain's root)
2. **Delete or backup** existing files if any
3. Upload all files from `cpanel-deploy/web/` to `public_html/`

**OR** if you want the API and frontend on the same domain:
1. Upload `web/` files to `public_html/`
2. The API runs separately via Node.js App

---

## Step 8: Configure Frontend API URL

The frontend needs to know where your API is.

### 8.1 Find your API URL
- If you used subdomain: `https://api.yourdomain.com`
- If you used path: `https://yourdomain.com/api`

### 8.2 Update the frontend
1. In File Manager, go to `public_html/assets/`
2. Find the JS file: `index-C7PoSYkw.js` (the name might be slightly different)
3. **Right-click** → **Edit**
4. Press **Ctrl+F** and search for:
   - `http://localhost:3000` or
   - `localhost` or
   - `127.0.0.1`
5. **Replace** with your API URL

**Example**:
```
// Change this:
http://localhost:3000

// To this:
https://api.yourdomain.com
```

6. **Save** the file

---

## Step 9: Start Everything

### 9.1 Start Node.js API
1. Go back to **Setup Node.js App**
2. Find your application
3. Click **Restart** or **Start**

### 9.2 Test the API
Open in browser:
```
https://api.yourdomain.com/api/health
```

You should see: `{"status":"ok"}`

### 9.3 Test the Frontend
Open in browser:
```
https://yourdomain.com
```

You should see the DMIT Pro landing page!

---

## Step 10: Create Admin User

1. Register a normal account at `https://yourdomain.com`
2. Go to cPanel **Terminal**
3. Run:
```bash
cd ~/cpanel-deploy/api
npx drizzle-kit studio
```
4. Or use phpMyAdmin-style tool if available for PostgreSQL
5. Run SQL:
```sql
UPDATE counselors SET role = 'admin' WHERE email = 'your-email@example.com';
```

---

## 🎯 Quick Test Checklist

| Test | URL | Expected Result |
|------|-----|----------------|
| API Health | `https://api.yourdomain.com/api/health` | `{"status":"ok"}` |
| Frontend | `https://yourdomain.com` | Shows landing page |
| Register | `https://yourdomain.com/register` | Form loads |
| API Auth | `https://api.yourdomain.com/api/auth/register` | Returns 201 with user data |

---

## 🐛 Troubleshooting

### "Cannot find module"
```bash
cd ~/cpanel-deploy/api
npm install --production
```

### "Database connection failed"
- Check DATABASE_URL in Node.js App environment variables
- Verify PostgreSQL user has permissions
- Make sure password has no special characters that break the URL

### "Port already in use"
- Change PORT to another number (3001, 8080, etc.)
- Update API_URL accordingly

### "404 Not Found" on API
- Make sure Application startup file is: `dist/index.js`
- Check that `dist/index.js` exists in `cpanel-deploy/api/`

### Frontend shows blank page
- Check browser console (F12) for errors
- Make sure API URL was updated in the JS file
- Verify all web files are in `public_html/`

### "Module not found" errors
The API might need the shared package. Try:
```bash
cd ~/cpanel-deploy/api
npm install ../packages/shared
```

---

## 📞 Need Help?

If something doesn't work:
1. Check **Node.js App logs** in cPanel
2. Check **Error Logs** in cPanel
3. Try running the API manually in Terminal to see errors:
```bash
cd ~/cpanel-deploy/api
node dist/index.js
```

---

## 🎉 You're Done!

Your DMIT Pro should now be live at:
- **Frontend**: `https://yourdomain.com`
- **API**: `https://api.yourdomain.com`

**Next steps**:
1. Configure Razorpay webhook: `https://api.yourdomain.com/api/payments/webhook`
2. Set up SSL (if not already done via cPanel AutoSSL)
3. Test report generation with real fingerprint data!
