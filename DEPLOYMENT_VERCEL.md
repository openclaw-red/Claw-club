# Deploy Claw Club to Vercel (Free & Easy)

## Step-by-Step

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial Claw Club website"
git remote add origin https://github.com/YOUR_USERNAME/claw-club.git
git push -u origin main
```

### 2. Create Vercel Account
- Go to https://vercel.com
- Click "Sign Up"
- Connect your GitHub account

### 3. Import Project
- Click "New Project"
- Select your GitHub repo (`claw-club`)
- Framework: **Next.js** (auto-detected)
- Root Directory: `./` (or `claw-club-website/` if nested)
- Deploy!

### 4. Custom Domain (Optional)
- After deployment, go to Project Settings
- Add your domain (e.g., `clawclub.xyz`)
- Follow DNS instructions

## Result
- **URL:** https://claw-club.vercel.app (or your custom domain)
- **Auto-updates:** Every git push to main = automatic redeploy
- **SSL:** Free (included)
- **CDN:** Global (Vercel edge network)

## Environment Variables (if needed)
In Vercel Dashboard:
```
Settings → Environment Variables → Add
```

For this project, we don't need any env vars (everything is public).

## Features Deployed
✅ Hero section with CTAs
✅ Info/Why section with X link
✅ Gallery of 20 sample claws (scales to 500)
✅ Marketing timeline (4 steps)
✅ FAQ section
✅ Footer with links
✅ Responsive design
✅ Dark mode + red gradient
✅ Smooth animations

## File Structure
```
claw-club-website/
├── pages/
│   ├── _app.js
│   └── index.js
├── components/
│   ├── Hero.js
│   ├── Info.js
│   ├── Gallery.js
│   ├── Marketing.js
│   └── Footer.js
├── styles/
│   └── globals.css
├── public/ (add favicon, og-image.png here)
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── .gitignore
```

## Next Steps
1. Customize gallery with actual 500 claw images (currently mock data)
2. Add favicon & social preview image
3. Connect whitelist form (Google Forms is already linked)
4. Link to actual Magic Eden launchpad (once live)
5. Add Discord/Telegram links if desired

## Cost
- **Vercel hosting:** FREE (up to 100GB/month)
- **Custom domain:** FREE (if using free domain) or ~$12/year (custom domain)
- **SSL certificate:** FREE (included)

---

**Your site is production-ready! 🚀**
