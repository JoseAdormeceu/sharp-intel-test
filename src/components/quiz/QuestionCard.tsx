import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Question } from "@/data/questions";
import { Check, X } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  isAnswered: boolean;
  onAnswerSelect: (answer: number) => void;
}

const getDifficultyLabel = (difficulty: string): string => {
  const map: Record<string, string> = {
    easy: "Fácil",
    medium: "Médio",
    hard: "Difícil",
  };
  return map[difficulty] || difficulty;
};

export const QuestionCard = ({
  question,
  selectedAnswer,
  isAnswered,
  onAnswerSelect,
}: QuestionCardProps) => {
  return (
    <Card className="shadow-soft">
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">{question.question}</h2>
            <p className="text-sm text-muted-foreground">
              Dificuldade: {getDifficultyLabel(question.difficulty)}
            </p>
          </div>

          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === question.correctAnswer;
              const showResult = isAnswered;

              return (
                <Button
                  key={index}
                  variant="outline"
                  className={`w-full justify-start text-left h-auto py-4 px-6 ${
                    showResult && isCorrect
                      ? "border-green-500 bg-green-50 dark:bg-green-950"
                      : showResult && isSelected && !isCorrect
                      ? "border-red-500 bg-red-50 dark:bg-red-950"
                      : isSelected
                      ? "border-primary bg-primary/10"
                      : ""
                  }`}
                  onClick={() => !isAnswered && onAnswerSelect(index)}
                  disabled={isAnswered}
                >
                  <span className="flex-1">{option}</span>
                  {showResult && isCorrect && (
                    <Check className="w-5 h-5 text-green-600" />
                  )}
                  {showResult && isSelected && !isCorrect && (
                    <X className="w-5 h-5 text-red-600" />
                  )}
                </Button>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
