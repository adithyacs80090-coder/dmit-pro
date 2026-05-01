#!/bin/bash
set -e

echo "🚀 DMIT Pro Production Deploy Script"
echo "====================================="

# Configuration
REPO_URL="https://github.com/your-org/dmit-saas.git"
DEPLOY_DIR="/opt/dmit-saas"
ENV_FILE=".env"

# Check if running as root for /opt
if [ "$EUID" -ne 0 ] && [ "$DEPLOY_DIR" = "/opt/dmit-saas" ]; then
  echo "⚠️  Please run as root or use sudo for /opt deployment"
  exit 1
fi

# Clone or update repo
if [ -d "$DEPLOY_DIR/.git" ]; then
  echo "📥 Pulling latest changes..."
  cd "$DEPLOY_DIR"
  git pull origin main
else
  echo "📥 Cloning repository..."
  git clone "$REPO_URL" "$DEPLOY_DIR"
  cd "$DEPLOY_DIR"
fi

# Create env file if not exists
if [ ! -f "$DEPLOY_DIR/docker/.env" ]; then
  echo "📝 Creating environment file..."
  cat > "$DEPLOY_DIR/docker/.env" <<EOF
POSTGRES_USER=dmit
POSTGRES_PASSWORD=$(openssl rand -base64 32)
POSTGRES_DB=dmit_pro
JWT_SECRET=$(openssl rand -base64 64)
JWT_REFRESH_SECRET=$(openssl rand -base64 64)
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxx
RAZORPAY_WEBHOOK_SECRET=$(openssl rand -base64 32)
RESEND_API_KEY=re_xxxxxxxx
EMAIL_FROM=noreply@dmitpro.com
FRONTEND_URL=https://dmitpro.in
API_URL=https://api.dmitpro.in
EOF
  echo "⚠️  Please edit $DEPLOY_DIR/docker/.env with your actual API keys before starting!"
fi

# Build and deploy
echo "🔨 Building Docker images..."
cd "$DEPLOY_DIR/docker"
docker-compose -f docker-compose.prod.yml build

echo "🛑 Stopping existing containers..."
docker-compose -f docker-compose.prod.yml down

echo "🚀 Starting production stack..."
docker-compose -f docker-compose.prod.yml up -d

# Wait for DB to be ready
echo "⏳ Waiting for database..."
sleep 5

# Run migrations
echo "🗄️  Running database migrations..."
docker-compose -f docker-compose.prod.yml exec -T api npx drizzle-kit migrate

echo "✅ Deployment complete!"
echo ""
echo "🌐 Frontend: https://dmitpro.in"
echo "🔌 API Health: https://api.dmitpro.in/api/health"
echo ""
echo "📋 Useful commands:"
echo "  View logs:    docker-compose -f docker-compose.prod.yml logs -f"
echo "  Stop stack:   docker-compose -f docker-compose.prod.yml down"
echo "  Restart API:  docker-compose -f docker-compose.prod.yml restart api"
