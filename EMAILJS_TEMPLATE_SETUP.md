# EmailJS Template Setup Guide

## Issue: Template Variables Not Working

If you're seeing `{{from_name}}` instead of actual names, your EmailJS template needs to be configured correctly.

## Fix Your EmailJS Template

1. **Go to EmailJS Dashboard**
   - Visit [EmailJS.com](https://www.emailjs.com/)
   - Login to your account
   - Go to "Email Templates"

2. **Edit Your Template (template_72wte1c)**
   - Click on your template
   - Replace the content with this:

### Subject Line:
```
New message from {{from_name}}
```

### Email Body:
```
Hello Jay,

You've received a new message from your portfolio website!

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
You can reply directly to {{reply_to}}
```

## Template Variables Available:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email  
- `{{message}}` - The message content
- `{{to_name}}` - Your name (Jay Shinde)
- `{{reply_to}}` - Sender's email for replies

## Test Your Template:
1. Save the template in EmailJS
2. Go to your website: http://localhost:5173/contact
3. Fill out the form with test data
4. Click "Send Message"
5. Check your email inbox

## If Still Not Working:
1. Check EmailJS service is connected to your email
2. Verify your email service (Gmail, Outlook, etc.) is properly authenticated
3. Check EmailJS dashboard for any error logs
4. Make sure your domain is added to EmailJS allowed origins

## Current Configuration:
- Service ID: service_ev6abjd
- Template ID: template_72wte1c  
- Public Key: zffRk1bU4pRfZ102d

The form should now send emails directly without opening your email client!