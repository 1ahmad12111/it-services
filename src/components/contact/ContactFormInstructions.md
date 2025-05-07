
# Setting up Email Functionality

To fully enable email sending functionality, you need to set up an EmailJS account:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (connect to Gmail, Outlook, etc.)
3. Create an email template
4. Get your User ID, Service ID, and Template ID
5. Replace the placeholder values in the Contact.tsx file:
   - EMAILJS_USER_ID
   - EMAILJS_SERVICE_ID
   - EMAILJS_TEMPLATE_ID

## Important Setup Notes:
- The EmailJS service must be connected to your email provider (Gmail, Outlook, etc.)
- Your template must include ALL variables used in the code:
  - {{from_name}} - Sender's name
  - {{from_email}} - Sender's email
  - {{subject}} - Email subject
  - {{message}} - Message content
  - {{to_email}} - Recipient email address (info@gomosivant.com)
- Make sure to verify your email domain if required by your email provider
- Check spam folders initially, as these emails might be marked as spam

## Current Implementation:
- In development mode with placeholder API keys: simulates email sending (logs to console)
- In production OR with real API keys: actually sends emails via EmailJS

## Troubleshooting:
If emails are not being received:
1. Verify your EmailJS account is active and properly set up
2. Check your spam/junk folder
3. Ensure your email service provider (Gmail, etc.) isn't blocking the emails
4. Confirm all template variables are correctly defined in your EmailJS template
