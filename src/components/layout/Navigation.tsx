import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const location = useLocation();

  const links = [
    { href: "/", label: "Início" },
    { href: "/quiz", label: "Iniciar Teste" },
    { href: "/what-is-iq", label: "O que é QI?" },
    { href: "/about", label: "Sobre" },
  ];

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="mr-6 flex items-center space-x-3">
          <img
            src="/logo.jpg"
            alt="Logo UniQuiz"
            className="h-10 w-10 rounded-md object-cover"
          />
          <span className="font-bold text-xl">UniQuiz</span>
        </Link>

        <div className="flex gap-2 md:gap-4">
          {links.map((link) => (
            <Button
              key={link.href}
              variant={location.pathname === link.href ? "secondary" : "ghost"}
              asChild
              className="text-sm"
            >
              <Link to={link.href}>{link.label}</Link>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};