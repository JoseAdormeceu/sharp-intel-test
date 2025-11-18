import { useState, useEffect } from "react";
import { Question, getRandomQuestions } from "@/data/questions";

export const useQuiz = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
  const [totalScore, setTotalScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const randomQuestions = getRandomQuestions(15);
    setQuestions(randomQuestions);
  }, []);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const maxScore = questions.reduce((sum, q) => sum + q.points, 0);

  const handleAnswerSelect = (answer: number) => {
    if (answeredQuestions.has(currentQuestionIndex)) return;

    setSelectedAnswer(answer);
    setAnsweredQuestions(prev => new Set([...prev, currentQuestionIndex]));

    if (answer === currentQuestion.correctAnswer) {
      setTotalScore((prev) => prev + currentQuestion.points);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRetake = () => {
    const randomQuestions = getRandomQuestions(15);
    setQuestions(randomQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setAnsweredQuestions(new Set());
    setTotalScore(0);
    setShowResult(false);
  };

  return {
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
  };
};
