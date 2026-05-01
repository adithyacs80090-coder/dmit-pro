# 🎯 STEP 6 IN-DEPTH: Adding Environment Variables in cPanel

**For Domain:** `life.learnsaleswithcj.com`

**Goal:** Add the minimum variables needed to TEST the app (login, registration, reports)

**You can skip payment/email variables for now and add them later!**

---

## ✅ MINIMUM VARIABLES NEEDED TO TEST (7 Variables)

To just test the app working, you ONLY need these 7:

| # | Variable Name | What It Does | Example Value |
|---|--------------|-------------|---------------|
| 1 | `NODE_ENV` | Tells app to run in production mode | `production` |
| 2 | `PORT` | The port number the API runs on | `3000` |
| 3 | `DATABASE_URL` | Connects to your MySQL database | `mysql://dmit_user:YOUR_PASSWORD@localhost:3306/dmit_pro` |
| 4 | `JWT_SECRET` | Security key for login sessions | `my-super-secret-key-at-least-32-chars-long` |
| 5 | `JWT_REFRESH_SECRET` | Security key for refreshing sessions | `another-secret-key-different-from-above-32-chars` |
| 6 | `FRONTEND_URL` | Your website address | `https://life.learnsaleswithcj.com` |
| 7 | `API_URL` | Your API address (same as website) | `https://life.learnsaleswithcj.com` |

**You DON'T need these to test:**
- ❌ `RAZORPAY_KEY_ID` (payments)
- ❌ `RAZORPAY_KEY_SECRET` (payments)
- ❌ `RAZORPAY_WEBHOOK_SECRET` (payments)
- ❌ `RESEND_API_KEY` (emails)
- ❌ `EMAIL_FROM` (emails)

**Add these LATER when you're ready for payments and emails!**

---

## 📋 STEP-BY-STEP: How to Add Each Variable

### Before You Start

1. Make sure you're in cPanel's **"Setup Node.js App"**
2. Find your application (life.learnsaleswithcj.com)
3. Click the **PENCIL ICON** (Edit) next to your app

You should see a page with your app details and a section called **"Environment Variables"**

Look for a button that says:
- **"Add Variable"**
- OR **"+"** (plus sign)
- OR **"New Variable"**

**Click that button!**

---

## 🔧 Variable 1: NODE_ENV

**What it does:** Tells the app to run in production mode (faster, no debug info)

### How to Add:
1. Click **"Add Variable"** button
2. A new row appears with 2 boxes:
   - **Name** box (left)
   - **Value** box (right)
3. In the **Name** box, type exactly:
   ```
   NODE_ENV
   ```
4. In the **Value** box, type exactly:
   ```
   production
   ```
5. Click **"Save"** or **"Add"**

✅ **Done!** You just added your first variable.

---

## 🔧 Variable 2: PORT

**What it does:** The port number where your API will listen. Port 3000 is standard for Node.js apps.

### How to Add:
1. Click **"Add Variable"** button again
2. In the **Name** box, type exactly:
   ```
   PORT
   ```
3. In the **Value** box, type exactly:
   ```
   3000
   ```
4. Click **"Save"** or **"Add"**

✅ **Done!**

---

## 🔧 Variable 3: DATABASE_URL ⚠️ MOST IMPORTANT

**What it does:** Connects your app to the MySQL database you created. This is the most critical variable!

### BEFORE YOU ADD THIS:
You need 4 pieces of information from Step 4 (Create Database):
- Database Name: `dmit_pro`
- Username: `dmit_user`
- Password: (whatever you saved)
- Host: `localhost`

### Format:
```
mysql://USERNAME:PASSWORD@localhost:3306/DB_NAME
```

### Example:
If your password is `Hello123!`, the value is:
```
mysql://dmit_user:Hello123!@localhost:3306/dmit_pro
```

**⚠️ WARNING:** If your password has special characters like `@`, `#`, `!`, `$`, `%`, `&`, `*`, `(`, `)`, you MUST encode them! Here's how:

| Character | Replace With |
|-----------|-------------|
| `@` | `%40` |
| `#` | `%23` |
| `!` | `%21` |
| `$` | `%24` |
| `%` | `%25` |
| `&` | `%26` |
| `*` | `%2A` |
| `(` | `%28` |
| `)` | `%29` |
| `+` | `%2B` |
| `=` | `%3D` |
| `?` | `%3F` |
| `/` | `%2F` |

### Example with Special Characters:
If your password is `Hello@123!`, replace:
- `@` → `%40`
- `!` → `%21`

So the value becomes:
```
mysql://dmit_user:Hello%40123%21@localhost:3306/dmit_pro
```

### How to Add:
1. Click **"Add Variable"** button
2. In the **Name** box, type exactly:
   ```
   DATABASE_URL
   ```
3. In the **Value** box, type your connection string:
   ```
   mysql://dmit_user:YOUR_PASSWORD@localhost:3306/dmit_pro
   ```
   (Replace YOUR_PASSWORD with your actual password, encoding special characters if needed)
4. Click **"Save"** or **"Add"**

✅ **Done!** Database is connected.

### 🔍 How to Test if Database URL is Correct:
After adding all variables and starting the app, if you see errors in the logs about "database connection" or "access denied", your DATABASE_URL is wrong.

**Quick Fix:**
1. Go back to MySQL Databases
2. Change the password to something simple with NO special characters (e.g., `MyPass123`)
3. Update the DATABASE_URL with the new password
4. Restart the Node.js app

---

## 🔧 Variable 4: JWT_SECRET

**What it does:** This is a secret key used to create login tokens. It MUST be at least 32 characters long and hard to guess!

### How to Create a Good Secret:
Option A - Type a long random sentence:
```
my-super-secret-dmit-pro-key-2024-very-secure-and-long
```

Option B - Use a password generator and remove special characters:
```
k9mP2vL5nQ8xR3tY6uI4oP7aS1dF2gH4jK6lZ8cV5bN3
```

**Rules:**
- Must be at least 32 characters
- Use letters and numbers
- NO special characters like `@`, `#`, `!`
- Keep it secret! Don't share it with anyone.
- Write it down somewhere safe.

### How to Add:
1. Click **"Add Variable"** button
2. In the **Name** box, type exactly:
   ```
   JWT_SECRET
   ```
3. In the **Value** box, type your secret (32+ characters):
   ```
   my-super-secret-dmit-pro-key-2024-very-secure-and-long
   ```
4. Click **"Save"** or **"Add"**

✅ **Done!**

---

## 🔧 Variable 5: JWT_REFRESH_SECRET

**What it does:** Another secret key for refreshing login sessions. Must be DIFFERENT from JWT_SECRET!

### How to Create:
Use a completely different string from JWT_SECRET.

Example:
```
another-refresh-secret-key-for-dmit-pro-2024-different-one
```

### How to Add:
1. Click **"Add Variable"** button
2. In the **Name** box, type exactly:
   ```
   JWT_REFRESH_SECRET
   ```
3. In the **Value** box, type a DIFFERENT secret:
   ```
   another-refresh-secret-key-for-dmit-pro-2024-different-one
   ```
4. Click **"Save"** or **"Add"**

✅ **Done!**

---

## 🔧 Variable 6: FRONTEND_URL

**What it does:** Tells the API what your website address is.

### How to Add:
1. Click **"Add Variable"** button
2. In the **Name** box, type exactly:
   ```
   FRONTEND_URL
   ```
3. In the **Value** box, type exactly:
   ```
   https://life.learnsaleswithcj.com
   ```
4. Click **"Save"** or **"Add"**

✅ **Done!**

---

## 🔧 Variable 7: API_URL

**What it does:** Tells the API its own address. Since everything runs on one domain, this is the same as FRONTEND_URL.

### How to Add:
1. Click **"Add Variable"** button
2. In the **Name** box, type exactly:
   ```
   API_URL
   ```
3. In the **Value** box, type exactly:
   ```
   https://life.learnsaleswithcj.com
   ```
4. Click **"Save"** or **"Add"**

✅ **Done!**

---

## 📋 Summary: What You Should See

After adding all 7 variables, your Environment Variables section should look like this:

| Name | Value |
|------|-------|
| `NODE_ENV` | `production` |
| `PORT` | `3000` |
| `DATABASE_URL` | `mysql://dmit_user:YOUR_PASSWORD@localhost:3306/dmit_pro` |
| `JWT_SECRET` | `my-super-secret-dmit-pro-key-2024-very-secure-and-long` |
| `JWT_REFRESH_SECRET` | `another-refresh-secret-key-for-dmit-pro-2024-different-one` |
| `FRONTEND_URL` | `https://life.learnsaleswithcj.com` |
| `API_URL` | `https://life.learnsaleswithcj.com` |

---

## 🚀 What to Do Next

1. Click **"Save"** at the bottom of the page (if there's a big Save button)
2. Go back to **"Setup Node.js App"**
3. Find your application
4. Click **"Restart"**
5. Wait 10 seconds
6. Test: `https://life.learnsaleswithcj.com/api/health`

Should show: `{"status":"ok"}`

---

## ❌ DON'T ADD THESE YET (For Later)

When you want payments and emails working, come back and add:

| Variable | When to Add |
|----------|-------------|
| `RAZORPAY_KEY_ID` | When you get Razorpay live keys |
| `RAZORPAY_KEY_SECRET` | When you get Razorpay live keys |
| `RAZORPAY_WEBHOOK_SECRET` | When setting up Razorpay webhooks |
| `RESEND_API_KEY` | When you get Resend API key |
| `EMAIL_FROM` | When setting up email sending |

---

## 🆘 Common Mistakes

### Mistake 1: DATABASE_URL has special characters
**Problem:** Password has `@` or `#` and the app can't connect  
**Fix:** Replace special characters with encoded versions (see table above)

### Mistake 2: JWT_SECRET is too short
**Problem:** Secret is only 10 characters  
**Fix:** Make it at least 32 characters long

### Mistake 3: JWT_SECRET and JWT_REFRESH_SECRET are the same
**Problem:** Both variables have identical values  
**Fix:** Make them completely different strings

### Mistake 4: Missing `https://`
**Problem:** FRONTEND_URL is `life.learnsaleswithcj.com` without `https://`  
**Fix:** Must include `https://` → `https://life.learnsaleswithcj.com`

### Mistake 5: Typo in variable name
**Problem:** Typed `DATABSE_URL` instead of `DATABASE_URL`  
**Fix:** Check spelling carefully - must be exactly as shown

---

## ✅ CHECKLIST

Before clicking Restart, verify:
- [ ] All 7 variables are added
- [ ] DATABASE_URL has your REAL password
- [ ] JWT_SECRET is 32+ characters
- [ ] JWT_REFRESH_SECRET is different from JWT_SECRET
- [ ] FRONTEND_URL starts with `https://`
- [ ] API_URL starts with `https://`
- [ ] No typos in any variable names

**Ready? Click Restart and test! 🎉**
