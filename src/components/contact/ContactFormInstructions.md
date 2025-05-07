
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

The current implementation will:
- In development mode: simulate email sending (logs to console)
- In production mode: actually send emails if proper API keys are provided

## EmailJS Template Variables

Make sure your EmailJS template includes these variables:
- {{from_name}} - Sender's name
- {{from_email}} - Sender's email
- {{subject}} - Email subject
- {{message}} - Message content
- {{to_email}} - Recipient email address
