
import React from 'react';
import LegalPageLayout from '@/components/LegalPageLayout';

const PrivacyPolicy = () => {
  return (
    <LegalPageLayout title="Privacy Policy">
      <div>
        <h2>Our Commitment to Privacy</h2>
        <p>
          At UniTalent, we respect your privacy and are committed to protecting your personal data. 
          This Privacy Policy will inform you how we look after your personal data when you visit 
          our website and tell you about your privacy rights and how the law protects you.
        </p>
        
        <h2>Information We Collect</h2>
        <p>
          We collect various types of information, including:
        </p>
        <ul>
          <li>Personal identification information (Name, email address, phone number, etc.)</li>
          <li>Educational information (University, degree, year of study)</li>
          <li>Professional information (Skills, work experience, portfolio)</li>
          <li>Technical data (IP address, browser information, device information)</li>
          <li>Usage data (how you use our website and services)</li>
        </ul>
        
        <h2>How We Use Your Information</h2>
        <p>
          We use the information we collect to:
        </p>
        <ul>
          <li>Provide and maintain our services</li>
          <li>Improve and personalize your experience</li>
          <li>Process transactions and send related information</li>
          <li>Send administrative information</li>
          <li>Provide customer support</li>
          <li>Send marketing and promotional communications (with your consent)</li>
          <li>Protect against malicious, deceptive, or illegal activity</li>
        </ul>
        
        <h2>Information Sharing</h2>
        <p>
          We may share your information with:
        </p>
        <ul>
          <li>Service providers who perform services on our behalf</li>
          <li>Professional advisers including lawyers, bankers, auditors, and insurers</li>
          <li>Regulatory authorities, law enforcement agencies, and other third parties as required by law</li>
        </ul>
        
        <h2>Data Security</h2>
        <p>
          We have implemented appropriate security measures to prevent your personal data from being 
          accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. We limit 
          access to your personal data to those employees, agents, contractors, and other third parties 
          who have a business need to know.
        </p>
        
        <h2>Your Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your personal data, such as:
        </p>
        <ul>
          <li>Right to access your personal data</li>
          <li>Right to correct inaccurate data</li>
          <li>Right to erasure (right to be forgotten)</li>
          <li>Right to restrict processing</li>
          <li>Right to data portability</li>
          <li>Right to object to processing</li>
        </ul>
        
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by 
          posting the new Privacy Policy on this page and updating the "Last Updated" date.
        </p>
        
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
