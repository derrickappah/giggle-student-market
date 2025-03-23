
import React from 'react';
import LegalPageLayout from '@/components/LegalPageLayout';

const TermsOfService = () => {
  return (
    <LegalPageLayout title="Terms of Service">
      <div>
        <h2>Agreement to Terms</h2>
        <p>
          By accessing or using the UniTalent platform, you agree to be bound by these Terms of Service. 
          If you disagree with any part of the terms, you may not access the service.
        </p>
        
        <h2>Description of Services</h2>
        <p>
          UniTalent is a platform that connects university students with freelance opportunities. 
          We provide a marketplace where clients can post projects and students can offer their services.
        </p>
        
        <h2>User Accounts</h2>
        <p>
          When you create an account with us, you must provide accurate, complete, and current information. 
          Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
        </p>
        <p>
          You are responsible for safeguarding the password and for all activities that occur under your account. 
          You agree not to disclose your password to any third party.
        </p>
        
        <h2>User Conduct</h2>
        <p>
          You agree not to use the platform to:
        </p>
        <ul>
          <li>Violate any laws or regulations</li>
          <li>Infringe upon the rights of others</li>
          <li>Post or transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable</li>
          <li>Impersonate any person or entity</li>
          <li>Engage in any activity that interferes with or disrupts the services</li>
          <li>Attempt to gain unauthorized access to the platform or its related systems</li>
        </ul>
        
        <h2>Intellectual Property</h2>
        <p>
          The platform and its original content, features, and functionality are owned by UniTalent and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
        </p>
        
        <h2>User Content</h2>
        <p>
          Users retain ownership of the content they post on the platform. By posting content, you grant UniTalent a worldwide, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate, and distribute your content in any existing or future media.
        </p>
        
        <h2>Payment Terms</h2>
        <p>
          Clients agree to pay for services as agreed upon when hiring a freelancer. UniTalent charges a service fee for using the platform, which is deducted from the payment amount.
        </p>
        <p>
          Payment disputes will be handled according to our dispute resolution process.
        </p>
        
        <h2>Limitation of Liability</h2>
        <p>
          In no event shall UniTalent, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
        </p>
        
        <h2>Termination</h2>
        <p>
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
        </p>
        
        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify or replace these Terms at any time. It is your responsibility to review these Terms periodically for changes.
        </p>
        
        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at:
          <br />
          Email: legal@unitalent.com
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

export default TermsOfService;
