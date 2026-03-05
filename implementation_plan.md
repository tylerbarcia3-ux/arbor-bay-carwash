# Transition Support to Google Forms

Replace the existing React-based customer support form with a clean landing section that directs users to an external Google Form. This simplifies maintenance and ensures reliable form delivery.

## Proposed Changes

### [Frontend] Pages
#### [MODIFY] [CustomerSupport.jsx](file:///Users/loganbarcia/.gemini/antigravity/brain/5bd6034a-ea64-462e-b6a1-e9ab26a44377/src/pages/CustomerSupport.jsx)
- Transitioned to Google Form CTA (Completed).

#### [MODIFY] [Location.jsx](file:///Users/loganbarcia/.gemini/antigravity/brain/5bd6034a-ea64-462e-b6a1-e9ab26a44377/src/pages/Location.jsx)
- Remove legacy "Customer Support" form section.
- Add "Need Help / Refund Request?" card with Google Form link and mailto link.
- Match styling with the rest of the site (blue button, mobile-friendly).

#### [MODIFY] [Home.jsx](file:///Users/loganbarcia/.gemini/antigravity/brain/5bd6034a-ea64-462e-b6a1-e9ab26a44377/src/pages/Home.jsx)
- Use `Link` component for local navigation.
- Fix "View Wash Options" button to link to `/wash-options`.
- Fix "Get Directions" button to link to Google Maps with proper `target` and `rel` attributes.

### [Backend] API Cleanup
#### [MODIFY] [index.js](file:///Users/loganbarcia/.gemini/antigravity/brain/5bd6034a-ea64-462e-b6a1-e9ab26a44377/server/index.js)
- Remove the `POST /api/support` route and all associated Resend logic.
- Keep the server running if other features (like simple health checks) are needed, or prepare to decommission if completely unused.

## Verification Plan

### Automated Tests
- Use browser subagent to:
    - Verify the new "Submit a Support Request" button exists.
    - Check that clicking the button opens the correct Google Form link in a new tab.
    - Verify the support email is present and clickable.
    - Check for any console errors.

### Manual Verification
- Verify the button styling on mobile to ensure centering and readability.
