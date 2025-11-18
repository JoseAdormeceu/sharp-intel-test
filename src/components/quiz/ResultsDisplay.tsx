import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Home, RefreshCw } from "lucide-react";

interface ResultsDisplayProps {
  iq: number;
  category: string;
  description: string;
  totalScore: number;
  maxScore: number;
  onRetake: () => void;
}

export const ResultsDisplay = ({
  iq,
  category,
  description,
  totalScore,
  maxScore,
  onRetake,
}: ResultsDisplayProps) => {
  const accuracy = Math.round((totalScore / maxScore) * 100);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-4">
          <div className="inline-block p-4 rounded-2xl bg-gradient-hero shadow-elevated">
            <Brain className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl font-bold">Resultados do Teste</h1>
        </div>

        <Card className="shadow-elevated">
          <CardContent className="pt-6 space-y-6">
            <div className="text-center space-y-2">
              <p className="text-muted-foreground">O seu QI estimado é</p>
              <div className="text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                {iq}
              </div>
              <p className="text-xl font-semibold text-primary">{category}</p>
            </div>

            <div className="space-y-4 pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Pontuação:</span>
                <span className="font-semibold">
                  {totalScore}/{maxScore}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Precisão:</span>
                <span className="font-semibold">{accuracy}%</span>
              </div>
            </div>

            <div className="pt-4 border-t">
              <p className="text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/" className="flex-1">
                <Button variant="outline" className="w-full gap-2">
                  <Home className="w-4 h-4" />
                  Voltar ao Início
                </Button>
              </Link>
              <Button onClick={onRetake} className="flex-1 gap-2">
                <RefreshCw className="w-4 h-4" />
                Refazer Teste
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
