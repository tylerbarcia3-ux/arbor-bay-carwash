# Arbor Bay CarWash - Support Form Setup & Testing

The Customer Support system now includes a secure backend to deliver form submissions directly to your email via **Resend**.

## 1. Setup Instructions

1. **Get Resend API Key**:
   - Sign up at [resend.com](https://resend.com).
   - Create an API key.
2. **Update `.env`**:
   - Open the `.env` file in the project root.
   - Replace `re_your_api_key_here` with your actual Resend API key.
3. **Install Dependencies**:
   - Run `npm install` (if not already done).

## 2. Running the Application

To run both the website and the email server together, use:
```bash
npm run dev:all
```
- Website: `http://localhost:5173`
- API Server: `http://localhost:3001`

## 3. Test Submission Checklist

Follow these steps to confirm everything is working correctly:

- [ ] **Server Check**: Open `http://localhost:3001` in your browser. You should see "Arbor Bay CarWash Support API is running."
- [ ] **Required Fields**: Try submitting the form with empty fields. The browser should prevent submission.
- [ ] **Loading State**: Click "Submit Request" and verify the button changes to "Submitting..." and becomes disabled.
- [ ] **Success Flow**: 
    - Fill out the form with test data.
    - Submit and wait for the "Request Received" screen.
    - Check your inbox (**arborbaycarwash@gmail.com**) for the request details.
- [ ] **Error Handling**: 
    - Temporarily change your API key in `.env` to something invalid.
    - Restart the server.
    - Attempt a submission.
    - Verify the red error banner appears: "Submission failed — please email us directly..."
    - Verify your form data is **not lost** (it should still be filled out).

> [!NOTE]
> By default, Resend uses `onboarding@resend.dev` as the sender for unverified domains. To send from a custom `@arborbaycarwash.com` email, you will need to verify your domain in the Resend dashboard.
