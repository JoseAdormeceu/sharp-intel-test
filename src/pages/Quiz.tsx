import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getRandomQuestions, Question } from "@/data/questions";
import { calculateIQ, getIQCategory, getIQDescription } from "@/utils/iqCalculator";
import { CheckCircle2, XCircle, Brain } from "lucide-react";

const Quiz = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [totalScore, setTotalScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const quizQuestions = getRandomQuestions(15);
    setQuestions(quizQuestions);
  }, []);

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-primary text-xl">A carregar perguntas...</div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / questions.length) * 100;
  const maxScore = questions.reduce((sum, q) => sum + q.points, 0);

  const handleAnswerSelect = (answerIndex: number) => {
    if (answered) return;
    
    setSelectedAnswer(answerIndex);
    setAnswered(true);
    const correct = answerIndex === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setTotalScore(prev => prev + currentQuestion.points);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setAnswered(false);
      setIsCorrect(false);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    const iq = calculateIQ(totalScore, maxScore);
    const category = getIQCategory(iq);
    const description = getIQDescription(iq);

    return (
      <div className="min-h-screen bg-background">
        <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <Link to="/" className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              IQ Test
            </Link>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-block p-4 rounded-full bg-primary/10">
                <Brain className="w-12 h-12 text-primary" />
              </div>
              <h1 className="text-4xl font-bold">Teste Concluído!</h1>
            </div>

            <Card className="p-8 shadow-elevated bg-gradient-card">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-muted-foreground">O seu QI estimado é</p>
                  <div className="text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                    {iq}
                  </div>
                  <p className="text-xl font-semibold text-primary">{category}</p>
                </div>

                <div className="h-px bg-border" />

                <div className="space-y-4 text-left">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Pontuação</p>
                      <p className="text-2xl font-bold">{totalScore}/{maxScore}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Precisão</p>
                      <p className="text-2xl font-bold">{Math.round((totalScore/maxScore) * 100)}%</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </Card>

            <div className="flex gap-4 justify-center">
              <Link to="/">
                <Button variant="outline" size="lg">Voltar ao Início</Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => window.location.reload()}
              >
                Fazer Novo Teste
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            IQ Test
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-muted-foreground">
                Pergunta {currentQuestionIndex + 1} de {questions.length}
              </span>
              <span className="text-sm font-medium text-primary">
                {currentQuestion.points} pontos
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="p-8 shadow-soft">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-muted text-xs font-medium">
                  {currentQuestion.difficulty === 'easy' && 'Fácil'}
                  {currentQuestion.difficulty === 'medium' && 'Médio'}
                  {currentQuestion.difficulty === 'hard' && 'Difícil'}
                </div>
                <h2 className="text-2xl font-bold leading-tight">
                  {currentQuestion.question}
                </h2>
              </div>

              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrectAnswer = index === currentQuestion.correctAnswer;
                  const showCorrect = answered && isCorrectAnswer;
                  const showIncorrect = answered && isSelected && !isCorrect;

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={answered}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                        showCorrect
                          ? 'border-green-500 bg-green-50 dark:bg-green-950/30'
                          : showIncorrect
                          ? 'border-destructive bg-destructive/10'
                          : isSelected
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50 hover:bg-muted/50'
                      } ${answered ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{option}</span>
                        {showCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        )}
                        {showIncorrect && (
                          <XCircle className="w-5 h-5 text-destructive" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {answered && (
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          <span className="text-green-600 font-medium">Correto! +{currentQuestion.points} pontos</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-5 h-5 text-destructive" />
                          <span className="text-destructive font-medium">Incorreto</span>
                        </>
                      )}
                    </div>
                    <Button onClick={handleNext}>
                      {currentQuestionIndex < questions.length - 1 ? 'Próxima' : 'Ver Resultado'}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Card>

          <div className="text-center text-sm text-muted-foreground">
            Pontuação atual: {totalScore} pontos
          </div>
        </div>
      </main>
    </div>
  );
};

export default Quiz;
