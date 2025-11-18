import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Home, RefreshCw } from "lucide-react";
import { IQResult } from "@/utils/iqCalculator";

interface ResultsDisplayProps {
  iqResult: IQResult;
  totalScore: number;
  maxScore: number;
  onRetake: () => void;
}

export const ResultsDisplay = ({
  iqResult,
  totalScore,
  maxScore,
  onRetake,
}: ResultsDisplayProps) => {
  const accuracy = Math.round((totalScore / maxScore) * 100);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-4">
          <div className="inline-block p-4 rounded-2xl bg-primary">
            <Brain className="w-16 h-16 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold">Resultados do Teste de QI</h1>
        </div>

        <Card className="border-2">
          <CardContent className="pt-6 space-y-6">
            <div className="text-center space-y-2">
              <p className="text-muted-foreground">O seu QI é</p>
              <div className="text-7xl font-bold">{iqResult.totalIQ}</div>
              <p className="text-2xl font-semibold text-primary">{iqResult.category}</p>
            </div>

            <div className="space-y-4 pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Pontuação Total:</span>
                <span className="font-semibold">{totalScore}/{maxScore}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Precisão:</span>
                <span className="font-semibold">{accuracy}%</span>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h3 className="font-semibold mb-3">Pontuações por Categoria:</h3>
              <div className="space-y-3">
                {iqResult.subtestScores.map((subtest) => (
                  <div key={subtest.category} className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{subtest.category}:</span>
                    <div className="flex gap-4">
                      <span>{subtest.rawScore}/{subtest.maxScore}</span>
                      <span className="font-semibold">QI: {subtest.standardizedScore}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t">
              <p className="text-muted-foreground leading-relaxed mb-4">{iqResult.description}</p>
              <details className="space-y-2">
                <summary className="cursor-pointer font-semibold text-sm hover:text-primary">
                  Ver Explicação Detalhada do Cálculo
                </summary>
                <div className="text-sm text-muted-foreground whitespace-pre-line pt-3 pl-4 border-l-2 border-border">
                  {iqResult.explanation}
                </div>
              </details>
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
