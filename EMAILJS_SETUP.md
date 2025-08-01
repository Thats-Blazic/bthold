# EmailJS Setup Instructions

## 1. Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Proton Mail" or "Custom SMTP"
4. For Proton Mail, enter:
   - **SMTP Host**: smtp.protonmail.ch
   - **SMTP Port**: 587
   - **Username**: edwardberrgan@proton.me
   - **Password**: Edwardberrgan1312#
   - **From Email**: edwardberrgan@proton.me
5. Save the service and note the **Service ID**

## 3. Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject**: New Contact Form Submission from {{from_name}}

**HTML Content**:
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #836b55;">New Contact Form Submission</h2>
  <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p><strong>Name:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Phone:</strong> {{phone}}</p>
    <p><strong>Service Interest:</strong> {{service}}</p>
    <p><strong>Message:</strong></p>
    <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
      {{message}}
    </div>
  </div>
  <p style="color: #666; font-size: 12px;">
    This message was sent from your website contact form
  </p>
</div>
```

4. Save the template and note the **Template ID**

## 4. Get Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## 5. Update Code

Replace these values in `app/contact/page.tsx`:

```javascript
// Replace these with your actual values:
'YOUR_SERVICE_ID'    // Your EmailJS service ID
'YOUR_TEMPLATE_ID'   // Your EmailJS template ID  
'YOUR_PUBLIC_KEY'    // Your EmailJS public key
```

## 6. Test

1. Start your development server: `npm run dev`
2. Go to contact page
3. Fill out and submit the form
4. Check your Proton Mail inbox

## Benefits of EmailJS

- ✅ No server-side code needed
- ✅ Works directly from frontend
- ✅ Free tier available
- ✅ Easy to set up
- ✅ Reliable delivery
- ✅ Professional email templates 