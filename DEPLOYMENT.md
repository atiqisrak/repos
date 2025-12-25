# Deployment Guide

## Deploying to Vercel

RePOS is configured to deploy seamlessly to Vercel. Follow these steps:

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Go to [Vercel](https://vercel.com)**
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import your repository: `atiqisrak/repos`

3. **Configure Project Settings**
   - **Root Directory**: Set to `client`
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `pnpm build` (or leave default)
   - **Output Directory**: `.next` (or leave default)
   - **Install Command**: `pnpm install` (or leave default)

4. **Environment Variables** (if needed)
   - Add any environment variables in the Vercel dashboard
   - Currently, no environment variables are required for basic deployment

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your app will be live at `your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Navigate to client directory**
   ```bash
   cd client
   ```

4. **Deploy**
   ```bash
   vercel
   ```

5. **Follow the prompts**
   - Link to existing project or create new
   - Confirm settings
   - Deploy

6. **For production deployment**
   ```bash
   vercel --prod
   ```

### Project Configuration

The project is already configured with:
- ✅ `vercel.json` - Vercel configuration file
- ✅ `next.config.ts` - Next.js configuration with image domains
- ✅ Proper build scripts in `package.json`

### Build Settings

- **Framework**: Next.js
- **Node Version**: 20.x (recommended)
- **Package Manager**: pnpm
- **Root Directory**: `client`

### Post-Deployment

After deployment:

1. **Verify the deployment**
   - Check that all routes are working
   - Test the dashboard
   - Verify API routes are functioning

2. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Configure DNS as instructed

3. **Environment Variables** (if needed later)
   - Add in Project Settings → Environment Variables
   - Redeploy after adding variables

### Troubleshooting

**Build fails:**
- Ensure `pnpm` is selected as package manager in Vercel settings
- Check that Node.js version is 20.x or higher
- Verify all dependencies are in `package.json`

**Images not loading:**
- Verify `next.config.ts` has correct `remotePatterns` for external images
- Check that image URLs are accessible

**API routes not working:**
- Ensure routes are in `app/api/` directory
- Check Vercel function logs in dashboard

### Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch triggers automatic deployment
- Pull requests get preview deployments
- Production deployments require manual approval (configurable)

---

**Need help?** Open an issue on [GitHub](https://github.com/atiqisrak/repos/issues)

