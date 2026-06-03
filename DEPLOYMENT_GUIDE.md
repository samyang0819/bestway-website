# Deployment Guide

## Pre-Deployment Checklist

### Environment Configuration
1. Copy `.env.example` to `.env.local` and fill in actual values:
   ```bash
   cp .env.example .env.local
   ```

2. Required environment variables:
   - `NEXT_PUBLIC_GA_ID` - Google Analytics ID (format: G-XXXXXXXXXX)
   - `NEXT_PUBLIC_SITE_URL` - Your domain URL

### Optional Integrations
- **Email Service (Contact Form)**: Set up Resend or SendGrid
  - Add `CONTACT_EMAIL` and email API key to `.env.local`
- **Newsletter**: Set up Mailchimp integration
  - Add `MAILCHIMP_API_KEY` and `MAILCHIMP_AUDIENCE_ID`

## Deployment Platforms

### Vercel (Recommended)
1. Push code to GitHub/GitLab/Bitbucket
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy (automatic on git push)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Traditional VPS (Ubuntu/Debian)
```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone and setup
git clone <your-repo>
cd website
npm install
npm run build

# Using PM2 for process management
npm install -g pm2
pm2 start npm --name "bestway-consulting" -- start
pm2 save
pm2 startup
```

## Post-Deployment

### 1. Verify SEO & Meta Tags
- [ ] Test Open Graph tags on https://ogp.ie
- [ ] Check mobile friendliness on Google Mobile-Friendly Test
- [ ] Verify structured data with https://schema.org/validator

### 2. Setup Analytics
- [ ] Create Google Analytics property
- [ ] Add Google Tag Manager container
- [ ] Set up conversion tracking for contact form
- [ ] Test with GA debugger extension

### 3. Setup Email Services
#### For Contact Form (Resend Example):
```typescript
// Install: npm install resend
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In your /api/send-email route:
const response = await resend.emails.send({
  from: 'noreply@bestwayconsulting.com',
  to: process.env.CONTACT_EMAIL,
  subject: `New Contact from ${body.name}`,
  html: `...`
});
```

#### For Newsletter (Mailchimp Example):
```typescript
// Install: npm install mailchimp-api
const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: 'us1', // Replace with your server
});

// In your /api/newsletter route:
await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
  email_address: email,
  status: 'subscribed',
});
```

### 4. SSL Certificate
- Ensure HTTPS is enabled (automatic on Vercel)
- For self-hosted, use Let's Encrypt:
  ```bash
  sudo apt-get install certbot python3-certbot-nginx
  sudo certbot certonly --nginx -d yourdomain.com
  ```

### 5. Database Setup (if needed)
- For storing submissions permanently, use:
  - PostgreSQL + Prisma
  - MongoDB
  - Firebase Firestore
  - AWS DynamoDB

Example with Prisma:
```bash
npm install @prisma/client
npx prisma init
```

### 6. Performance Monitoring
- [ ] Set up Sentry for error tracking
- [ ] Monitor Core Web Vitals in Google Search Console
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)

### 7. Security
- [ ] Enable CSP (Content Security Policy) headers
- [ ] Set up rate limiting for API routes
- [ ] Enable CORS restrictions
- [ ] Validate all user inputs on backend

## Maintenance

### Regular Tasks
- Monitor analytics and conversion rates
- Check error logs in Sentry
- Update dependencies: `npm update`
- Run security audit: `npm audit`
- Backup database regularly

### Optimization
- Monitor Lighthouse scores
- Check PageSpeed Insights
- Analyze Core Web Vitals
- Optimize images and assets

## Troubleshooting

### Common Issues

**Form submissions not working:**
- Check browser console for errors
- Verify API endpoint is accessible
- Check CORS headers if backend is separate
- Ensure environment variables are set

**Email not sending:**
- Verify email service API key
- Check spam folder
- Review email service logs
- Test with curl command

**Analytics not tracking:**
- Verify GA ID in environment
- Check Google Tag Manager
- Use GA debugger extension
- Clear browser cache

## Support

For additional help:
- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Tailwind CSS: https://tailwindcss.com/docs
