
import React from 'react';
import PageLayout from './PageLayout';

interface LegalPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const LegalPageLayout = ({ title, children }: LegalPageLayoutProps) => {
  return (
    <PageLayout title={title} description="Legal Information">
      <div className="prose prose-sm md:prose-base lg:prose-lg max-w-3xl mx-auto">
        {children}
      </div>
    </PageLayout>
  );
};

export default LegalPageLayout;
