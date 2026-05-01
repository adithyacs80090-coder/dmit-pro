# 🚀 Auto-Deployment Setup Guide

This project includes a **GitHub Actions workflow** that automatically deploys your application to your VPS every time you push to the `main` branch.

---

## Step 1: Add GitHub Secrets

Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

Add these 3 secrets:

| Secret Name | Description | How to get it |
|-------------|-------------|---------------|
| `VPS_HOST` | Your server IP address | e.g., `123.456.789.0` or `dmitpro.in` |
| `VPS_USER` | SSH username for your server | Usually `root` or `ubuntu` |
| `VPS_SSH_KEY` | Private SSH key to access your server | Contents of `~/.ssh/id_rsa` from your server |

### How to generate the SSH key pair

On your VPS server, run:
```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/github_actions
# Leave passphrase empty

# Add public key to authorized_keys
cat ~/.ssh/github_actions.pub >> ~/.ssh/authorized_keys

# View private key (copy this to GitHub secret)
cat ~/.ssh/github_actions
```

Copy the entire output of the private key (starts with `-----BEGIN OPENSSH PRIVATE KEY-----`) and paste it into the `VPS_SSH_KEY` secret.

---

## Step 2: Prepare Your VPS

Make sure your VPS has:
1. Docker & Docker Compose installed
2. The repo cloned at `/opt/dmit-saas`
3. The `.env` file created at `/opt/dmit-saas/docker/.env`
4. SSL certificates in `/opt/dmit-saas/docker/nginx/ssl/`

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for full server setup instructions.

---

## Step 3: Push to Main

Once secrets are configured, simply push to `main`:

```bash
git push origin main
```

GitHub Actions will:
1. ✅ Lint & type-check the code
2. ✅ Build all packages
3. ✅ Run API tests (with PostgreSQL)
4. ✅ Run Web tests
5. 🚀 SSH into your VPS and deploy automatically

---

## Monitoring Deployments

### View deployment status
Go to **GitHub Repo** → **Actions** tab

### View live logs on your server
```bash
ssh root@your-server-ip
cd /opt/dmit-saas/docker
docker compose -f docker-compose.prod.yml logs -f
```

---

## Troubleshooting Auto-Deploy

| Issue | Solution |
|-------|----------|
| `Permission denied (publickey)` | Check `VPS_SSH_KEY` secret is the **private** key, not public |
| `docker command not found` | Install Docker on your VPS first |
| `No such file or directory` | Ensure repo is cloned at `/opt/dmit-saas` |
| `Migration failed` | Check `DATABASE_URL` in `.env` is correct |
| Build succeeds but site not updating | Check `docker ps` to see if containers are running |

---

## Manual Deploy (if CI/CD fails)

```bash
ssh root@your-server-ip
cd /opt/dmit-saas
git pull origin main
pnpm install --frozen-lockfile
pnpm --filter @dmit/shared build
cd docker
docker compose -f docker-compose.prod.yml down
docker compose -f docker-compose.prod.yml up -d --build
docker compose -f docker-compose.prod.yml exec -T api npx drizzle-kit migrate
```
