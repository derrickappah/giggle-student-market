
import React from 'react';
import LegalPageLayout from '@/components/LegalPageLayout';

const CookiePolicy = () => {
  return (
    <LegalPageLayout title="Cookie Policy">
      <div>
        <h2>What Are Cookies</h2>
        <p>
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
          They are widely used to make websites work more efficiently and provide information to the website owners.
        </p>
        
        <h2>How We Use Cookies</h2>
        <p>
          UniTalent uses cookies for various purposes, including:
        </p>
        <ul>
          <li><strong>Essential cookies:</strong> These are necessary for the website to function properly and cannot be switched off.</li>
          <li><strong>Performance cookies:</strong> These help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
          <li><strong>Functionality cookies:</strong> These enable the website to provide enhanced functionality and personalization.</li>
          <li><strong>Targeting cookies:</strong> These may be set through our site by our advertising partners to build a profile of your interests and show you relevant ads on other sites.</li>
        </ul>
        
        <h2>Types of Cookies We Use</h2>
        
        <h3>Session Cookies</h3>
        <p>
          These temporary cookies expire when you close your browser. They enable the website to recognize you as you navigate between pages.
        </p>
        
        <h3>Persistent Cookies</h3>
        <p>
          These cookies remain on your device until they expire or you delete them. They enable the website to remember your preferences for the next time you visit.
        </p>
        
        <h3>First-Party Cookies</h3>
        <p>
          These are cookies that belong to UniTalent.
        </p>
        
        <h3>Third-Party Cookies</h3>
        <p>
          These are cookies set on our website by other domains. We use third-party cookies for analytics, advertising, and social media integration.
        </p>
        
        <h2>Managing Cookies</h2>
        <p>
          Most web browsers allow you to control cookies through their settings. You can:
        </p>
        <ul>
          <li>View cookies stored on your computer</li>
          <li>Delete all or specific cookies</li>
          <li>Block third-party cookies</li>
          <li>Block cookies from particular sites</li>
          <li>Block all cookies</li>
          <li>Delete all cookies when you close your browser</li>
        </ul>
        
        <p>
          Please note that if you choose to block or delete cookies, you may not be able to access certain areas or features of our website, and some services may not function properly.
        </p>
        
        <h2>Changes to This Cookie Policy</h2>
        <p>
          We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date.
        </p>
        
        <h2>Contact Us</h2>
        <p>
          If you have any questions about our Cookie Policy, please contact us at:
          <br />
          Email: privacy@unitalent.com
          <br />
          Address: 123 University Ave, College Town, CT 12345
        </p>
        
        <p className="text-sm text-muted-foreground mt-8">
          Last Updated: June 1, 2023
        </p>
      </div>
    </LegalPageLayout>
  );
};

export default CookiePolicy;
