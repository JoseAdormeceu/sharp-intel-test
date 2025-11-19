import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans antialiased">
      <Navigation />
      <main className="flex-1 container py-6 md:py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};