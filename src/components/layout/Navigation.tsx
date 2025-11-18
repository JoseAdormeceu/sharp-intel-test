import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Info, Play } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
          IQ Test
        </Link>
        <div className="flex gap-4">
          <Link to="/about">
            <Button variant="ghost" className="gap-2">
              <Info className="w-4 h-4" />
              About Us
            </Button>
          </Link>
          <Link to="/quiz">
            <Button className="gap-2">
              <Play className="w-4 h-4" />
              Take Quiz
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
