import React from 'react';
import CookieConsent from 'react-cookie-consent';

const cookie = () => (
  <CookieConsent
    location="bottom"
    style={{ background: '#F5F5F5' }}
    buttonText="Go Ahead!"
    declineButtonText="No, sorry."
    cookieName="generalCookie"
    expires={150}
    buttonClasses="font-bold"
    declineButtonClasses="font-bold"
    contentClasses="text-black"
    enableDeclineButton
    onAccept={() => {
      // Similar to componentDidMount and componentDidUpdate:
    }}
  >
    <span className="font-bold">Hi! May I use cookies to understand how you are using the site?</span>
  </CookieConsent>
);

export default cookie;
