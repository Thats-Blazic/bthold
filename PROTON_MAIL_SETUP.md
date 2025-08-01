# Proton Mail Setup Instructions

## 1. Install Proton Mail Bridge

1. Download Proton Mail Bridge from: https://proton.me/mail/bridge
2. Install it on your computer
3. Sign in with your Proton Mail account

## 2. Configure Environment Variables

Create a `.env.local` file in your project root with:

```
PROTON_EMAIL=your-proton-email@proton.me
PROTON_PASSWORD=your-proton-password-or-app-password
```

## 3. Alternative Setup (Without Bridge)

If you don't want to use Proton Mail Bridge, you can use these SMTP settings:

```javascript
const transporter = nodemailer.createTransporter({
  host: 'smtp.protonmail.ch',
  port: 587,
  secure: false,
  auth: {
    user: process.env.PROTON_EMAIL,
    pass: process.env.PROTON_PASSWORD, // Use app password
  },
})
```

## 4. Get App Password (Recommended)

1. Go to Proton Mail settings
2. Navigate to Security → App Passwords
3. Generate a new app password
4. Use this password in your .env.local file

## 5. Test the Setup

1. Start your development server: `npm run dev`
2. Go to your contact page
3. Fill out and submit the form
4. Check your Proton Mail inbox for the test message

## Troubleshooting

- Make sure Proton Mail Bridge is running
- Check that your credentials are correct
- Verify that the port (1025) is not blocked by firewall
- For production, consider using a service like SendGrid or Resend 