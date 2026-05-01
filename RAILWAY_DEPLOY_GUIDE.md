# 🚀 SUPER EASY DEPLOYMENT - Railway.app (Like Vercel but for Full-Stack Apps)

**Why Railway?**
- ✅ One-click deploy from GitHub
- ✅ PostgreSQL database included (no MySQL needed!)
- ✅ No .htaccess files
- ✅ No cPanel needed
- ✅ No npm install needed
- ✅ Auto-deploys when you push code
- ✅ FREE tier available

**Time needed:** 15 minutes (much easier than cPanel!)

---

## 📋 BEFORE YOU START - What You Need

1. **GitHub account** (free, create at github.com)
2. **Railway account** (free, create at railway.app)
3. Your project code on your computer

---

## STEP 1: Push Your Code to GitHub (5 minutes)

### 1.1 Install Git (if not installed)
- Go to: https://git-scm.com/download/win
- Download and install Git
- Click "Next" through all the defaults

### 1.2 Create a New GitHub Repository
1. Go to: https://github.com/new
2. **Repository name:** `dmit-pro`
3. Select **"Public"** (or Private if you prefer)
4. Click **"Create repository"**
5. You'll see a page with instructions

### 1.3 Push Your Code
Open **Command Prompt** on your computer (type `cmd` in Windows search):

```cmd
cd "C:\Users\Adithya\Desktop\Open code\psycho metri\dmit-saas"
```

Then type these commands one by one:

```cmd
git init
```

```cmd
git add .
```

```cmd
git commit -m "Initial commit"
```

```cmd
git branch -M main
```

```cmd
git remote add origin https://github.com/YOUR_USERNAME/dmit-pro.git
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

```cmd
git push -u origin main
```

**Wait for upload to finish.** You'll see progress bars.

✅ **Done!** Your code is now on GitHub.

---

## STEP 2: Deploy on Railway (10 minutes)

### 2.1 Create Railway Account
1. Go to: https://railway.app
2. Click **"Start for Free"**
3. Click **"Login with GitHub"**
4. Authorize Railway to access your GitHub

### 2.2 Create New Project
1. Click **"New Project"**
2. Click **"Deploy from GitHub repo"**
3. Select your repository: `dmit-pro`
4. Click **"Add Variables"**

### 2.3 Add Environment Variables

Click **"New Variable"** for each:

**Variable 1:**
- Name: `NODE_ENV`
- Value: `production`

**Variable 2:**
- Name: `JWT_SECRET`
- Value: (your secret, 32+ chars)

**Variable 3:**
- Name: `JWT_REFRESH_SECRET`
- Value: (different secret, 32+ chars)

**Variable 4:**
- Name: `RAZORPAY_KEY_ID`
- Value: `rzp_test_placeholder`

**Variable 5:**
- Name: `RAZORPAY_KEY_SECRET`
- Value: `placeholder`

**Variable 6:**
- Name: `RESEND_API_KEY`
- Value: `re_placeholder`

**Variable 7:**
- Name: `EMAIL_FROM`
- Value: `noreply@yourdomain.com`

**Variable 8:**
- Name: `FRONTEND_URL`
- Value: `https://your-app-name.up.railway.app`
(You'll get the actual URL after deploying)

**Variable 9:**
- Name: `API_URL`
- Value: `https://your-app-name.up.railway.app`

**Click "Deploy"**

### 2.4 Add PostgreSQL Database
1. In your Railway project, click **"New"**
2. Click **"Database"**
3. Click **"Add PostgreSQL"**
4. Railway will create it automatically!

**The database URL will be automatically added as `DATABASE_URL` variable!**

### 2.5 Update Frontend API URL
1. In your project files on your computer, open:
   `apps/web/src/lib/api.ts`

2. Change this line:
```typescript
const API_URL = import.meta.env.VITE_API_URL || '/api'
```

To:
```typescript
const API_URL = import.meta.env.VITE_API_URL || ''
```

3. Save the file

4. Rebuild the frontend:
```cmd
cd "C:\Users\Adithya\Desktop\Open code\psycho metri\dmit-saas"
pnpm --filter @dmit/web build
```

5. Commit and push:
```cmd
git add .
git commit -m "Update API URL for Railway"
git push
```

**Railway will automatically redeploy!**

### 2.6 Get Your URL
1. In Railway dashboard, click on your service
2. Click **"Settings"**
3. Look for **"Domain"** section
4. Your URL will be something like:
   `https://dmit-pro-production.up.railway.app`

5. Copy this URL

6. Update the `FRONTEND_URL` and `API_URL` variables with this real URL

---

## STEP 3: Add Custom Domain (Optional)

If you want to use your own domain (`life.learnsaleswithcj.com`):

1. In Railway, go to **Settings** → **Domains**
2. Click **"Generate Domain"** (for Railway subdomain)
   OR
   Click **"Custom Domain"** and enter: `life.learnsaleswithcj.com`
3. Railway will give you a DNS record to add
4. In your domain provider (Mumu Host), add the DNS record
5. Wait 5-10 minutes for DNS to update

---

## ✅ DONE! Your App is Live!

**Your URL:** `https://your-app-name.up.railway.app`

**What's working:**
- ✅ Website loads
- ✅ API works
- ✅ Database connected
- ✅ No 404 errors
- ✅ Auto-deploys when you push code

---

## 🎯 Why This is Better Than cPanel

| Feature | cPanel | Railway |
|---------|--------|---------|
| Setup time | 2+ hours | 15 minutes |
| Node.js install | Manual | Automatic |
| Database setup | Manual | One click |
| .htaccess needed | Yes | No |
| SSL certificate | Manual | Automatic |
| Deploy updates | Manual upload | Auto from GitHub |
| Cost | Hosting fee | Free tier |

---

## 🚀 Updating Your App Later

When you make changes:

1. Edit code on your computer
2. Run:
```cmd
git add .
git commit -m "Your changes"
git push
```

3. **Railway automatically deploys the new version!**

---

## 🆘 Alternative: Render.com

If Railway doesn't work, try **Render.com**:

1. Go to: https://render.com
2. Sign up with GitHub
3. Click "New Web Service"
4. Connect your GitHub repo
5. Select Node.js environment
6. Add environment variables
7. Click "Create Web Service"

**Render also gives you a free URL!**

---

## 📞 Need Help?

If you get stuck on any step, tell me:
1. Which step number you're on
2. What error message you see
3. I'll guide you through it!

**Ready to try Railway? Start with Step 1!** 🎉
