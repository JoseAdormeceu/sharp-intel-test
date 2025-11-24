import { Footer } from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans antialiased">
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};