import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useQuiz } from "@/hooks/useQuiz";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { ResultsDisplay } from "@/components/quiz/ResultsDisplay";
import { calculateIQ } from "@/utils/iqCalculator";
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";

const Quiz = () => {
  const {
    questions,
    currentQuestion,
    currentQuestionIndex,
    selectedAnswer,
    answeredQuestions,
    totalScore,
    maxScore,
    scoresByCategory,
    showResult,
    progress,
    age,
    ageSet,
    handleAnswerSelect,
    handleNext,
    handleRetake,
    handleSetAge,
  } = useQuiz();

  const [ageInput, setAgeInput] = useState("25");
  const questionRef = useRef<HTMLDivElement>(null);

  // Smooth scroll to top of question when changing questions
  useEffect(() => {
    if (questionRef.current) {
      questionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentQuestionIndex]);

  if (!ageSet) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <Card>
              <CardContent className="pt-6 space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold">Teste de QI</h2>
                  <p className="text-muted-foreground">
                    Para calcular o seu QI com precisão, precisamos da sua idade
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Qual é a sua idade?
                    </label>
                    <Input
                      type="number"
                      min="5"
                      max="100"
                      value={ageInput}
                      onChange={(e) => setAgeInput(e.target.value)}
                      className="text-center text-lg"
                      placeholder="Digite sua idade"
                    />
                  </div>
                  
                  <Button 
                    onClick={() => {
                      const parsedAge = parseInt(ageInput);
                      if (parsedAge >= 5 && parsedAge <= 100) {
                        handleSetAge(parsedAge);
                      }
                    }}
                    className="w-full"
                    disabled={!ageInput || parseInt(ageInput) < 5 || parseInt(ageInput) > 100}
                  >
                    Começar Teste
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (questions.length === 0) {
    return (
      <PageLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-pulse text-xl">
            A carregar perguntas...
          </div>
        </div>
      </PageLayout>
    );
  }

  if (showResult) {
    const iqResult = calculateIQ(scoresByCategory, age);

    return (
      <PageLayout>
        <ResultsDisplay
          iqResult={iqResult}
          totalScore={totalScore}
          maxScore={maxScore}
          onRetake={handleRetake}
        />
      </PageLayout>
    );
  }

  const isAnswered = answeredQuestions.has(currentQuestionIndex);

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-6" ref={questionRef}>
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Button>
            </Link>
            <div className="text-sm">
              Questão {currentQuestionIndex + 1} de {questions.length}
            </div>
          </div>

          <Progress value={progress} className="h-2" />

          <QuestionCard
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            isAnswered={isAnswered}
            onAnswerSelect={handleAnswerSelect}
          />

          <div className="flex justify-end items-center pt-4">
            <Button
              onClick={handleNext}
              disabled={!isAnswered}
              className="gap-2"
            >
              {currentQuestionIndex < questions.length - 1 ? "Próxima" : "Ver Resultados"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Quiz;
