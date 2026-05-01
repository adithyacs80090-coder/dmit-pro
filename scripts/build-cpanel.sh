#!/bin/bash
# Build cPanel deployment package
set -e

echo "🚀 Building DMIT Pro for cPanel Deployment..."
echo "================================================"

# Build shared package first
echo "📦 Building shared package..."
pnpm --filter @dmit/shared build

# Build API
echo "🔨 Building API..."
pnpm --filter @dmit/api build

# Build web frontend
echo "🎨 Building web frontend..."
pnpm --filter @dmit/web build

# Create deployment directory
DEPLOY_DIR="cpanel-deploy"
rm -rf $DEPLOY_DIR
mkdir -p $DEPLOY_DIR

# Copy API (built dist + package.json + node_modules reference)
echo "📋 Preparing API package..."
mkdir -p $DEPLOY_DIR/api
cp -r apps/api/dist $DEPLOY_DIR/api/
cp apps/api/package.json $DEPLOY_DIR/api/
cp apps/api/drizzle.config.ts $DEPLOY_DIR/api/
mkdir -p $DEPLOY_DIR/api/src/db
cp -r apps/api/src/db/migrations $DEPLOY_DIR/api/src/db/

# Copy shared package dist
echo "📋 Preparing shared package..."
mkdir -p $DEPLOY_DIR/packages/shared
cp -r packages/shared/dist $DEPLOY_DIR/packages/shared/
cp packages/shared/package.json $DEPLOY_DIR/packages/shared/

# Copy web frontend (static files)
echo "📋 Preparing web frontend..."
mkdir -p $DEPLOY_DIR/web
cp -r apps/web/dist/* $DEPLOY_DIR/web/

# Create .env.example for cPanel
cat > $DEPLOY_DIR/api/.env.example << 'EOF'
# Copy this to .env and fill in your values
NODE_ENV=production
PORT=3000
DATABASE_URL=mysql://username:password@localhost:3306/dmit_pro
REDIS_URL=redis://localhost:6379
JWT_SECRET=generate-a-strong-secret-min-32-chars
JWT_REFRESH_SECRET=generate-another-strong-secret-min-32-chars
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
RAZORPAY_WEBHOOK_SECRET=generate-random-webhook-secret
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=noreply@yourdomain.com
FRONTEND_URL=https://yourdomain.com
API_URL=https://api.yourdomain.com
EOF

# Create cPanel instructions
cat > $DEPLOY_DIR/DEPLOY_INSTRUCTIONS.md << 'EOF'
# DMIT Pro - cPanel Deployment Guide

## Step 1: Create MySQL Database

1. In cPanel, go to **MySQL Databases**
2. Create a new database: `dmit_pro`
3. Create a new user (or use existing)
4. Add user to database with ALL PRIVILEGES
5. Note down:
   - Database name
   - Username
   - Password

## Step 2: Upload API Files

1. In cPanel File Manager, create folder: `dmit-api`
2. Upload all files from `api/` folder to `dmit-api/`
3. Upload all files from `packages/shared/` to `dmit-api/packages/shared/`

## Step 3: Configure Node.js App

1. In cPanel, go to **Setup Node.js App**
2. Click **Create Application**
3. Fill in:
   - **Node.js version**: 22.x
   - **Application mode**: Production
   - **Application root**: `dmit-api`
   - **Application URL**: `api.yourdomain.com` (or subdomain)
   - **Application startup file**: `dist/index.js`
4. Click **Create**

## Step 4: Set Environment Variables

In the Node.js app settings, add these environment variables:

```
NODE_ENV=production
PORT=3000
DATABASE_URL=mysql://your_db_user:your_db_password@localhost:3306/dmit_pro
JWT_SECRET=your-jwt-secret-min-32-chars
JWT_REFRESH_SECRET=your-refresh-secret-min-32-chars
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
RESEND_API_KEY=your_resend_key
EMAIL_FROM=noreply@yourdomain.com
FRONTEND_URL=https://yourdomain.com
API_URL=https://api.yourdomain.com
```

## Step 5: Install Dependencies

In cPanel Terminal or SSH:
```bash
cd ~/dmit-api
npm install --production
```

## Step 6: Run Database Migrations

```bash
cd ~/dmit-api
npx drizzle-kit migrate
```

## Step 7: Upload Frontend

1. Upload all files from `web/` folder to your domain's `public_html`
2. Or create a subdomain and upload there

## Step 8: Configure Frontend API URL

Edit `public_html/assets/index-*.js` (the built JS file):
- Search for `http://localhost:3000` or similar
- Replace with your API URL: `https://api.yourdomain.com`

## Step 9: Start the App

In cPanel Node.js app manager, click **Restart**

## Step 10: Test

- Frontend: https://yourdomain.com
- API Health: https://api.yourdomain.com/api/health

## Troubleshooting

### "Cannot find module"
Run: `cd ~/dmit-api && npm install`

### "Database connection failed"
Check DATABASE_URL in environment variables. Make sure the MySQL user has permissions.

### "Port already in use"
Change PORT in environment variables to another number (e.g., 3001, 8080)

### API returns 404
Make sure Application startup file is: `dist/index.js`
EOF

echo ""
echo "✅ cPanel deployment package created in: $DEPLOY_DIR/"
echo ""
echo "Next steps:"
echo "1. Zip the $DEPLOY_DIR folder"
echo "2. Upload to your cPanel hosting"
echo "3. Follow DEPLOY_INSTRUCTIONS.md"
echo ""
