
import React from 'react';
import Header from './Header';

interface PageLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const PageLayout = ({ title, description, children }: PageLayoutProps) => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-80px)] bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            {description && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>}
          </div>
          {children}
        </div>
      </main>
    </>
  );
};

export default PageLayout;
