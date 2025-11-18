import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useQuiz } from "@/hooks/useQuiz";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { ResultsDisplay } from "@/components/quiz/ResultsDisplay";
import { calculateIQ, getIQCategory, getIQDescription } from "@/utils/iqCalculator";
import { PageLayout } from "@/components/layout/PageLayout";

const Quiz = () => {
  const {
    questions,
    currentQuestion,
    currentQuestionIndex,
    selectedAnswer,
    answeredQuestions,
    totalScore,
    maxScore,
    showResult,
    progress,
    handleAnswerSelect,
    handleNext,
    handleRetake,
  } = useQuiz();

  if (questions.length === 0) {
    return (
      <PageLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-pulse text-primary text-xl">
            A carregar perguntas...
          </div>
        </div>
      </PageLayout>
    );
  }

  if (showResult) {
    const iq = calculateIQ(totalScore, maxScore);
    const category = getIQCategory(iq);
    const description = getIQDescription(iq);

    return (
      <PageLayout>
        <ResultsDisplay
          iq={iq}
          category={category}
          description={description}
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
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Button>
            </Link>
            <div className="text-sm text-muted-foreground">
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

          <div className="flex justify-between items-center pt-4">
            <div className="text-sm text-muted-foreground">
              Pontuação atual: <span className="font-semibold text-foreground">{totalScore}</span>
            </div>
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
