import { useState, useEffect } from "react";
import { getRandomizedQuestions, Question, Category } from "@/data/questions";

const USED_QUESTIONS_KEY = "quiz_used_questions";

export const useQuiz = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  // Load questions on mount
  useEffect(() => {
    const randomized = getRandomizedQuestions();
    setQuestions(randomized);
  }, []);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answerIndex }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(answers[currentQuestionIndex + 1] ?? null);
    } else {
      setShowResult(true);
      saveUsedQuestionIds();
    }
  };

  const handleRetake = () => {
    const randomized = getRandomizedQuestions();
    setQuestions(randomized);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setAnswers({});
    setShowResult(false);
  };

  // Save IDs of questions answered this round to localStorage
  const saveUsedQuestionIds = () => {
    try {
      const stored = localStorage.getItem(USED_QUESTIONS_KEY);
      const usedIds: number[] = stored ? JSON.parse(stored) : [];
      const answeredIds = Object.keys(answers).map((i) => questions[parseInt(i)].id);
      const newUsed = Array.from(new Set([...usedIds, ...answeredIds]));
      localStorage.setItem(USED_QUESTIONS_KEY, JSON.stringify(newUsed));
    } catch (e) {
      console.error("Failed to save used question IDs", e);
    }
  };

  // Calculate scores by category
  const scoresByCategory: Record<Category, { score: number; maxScore: number }> = {
    "Raciocínio lógico": { score: 0, maxScore: 0 },
    "Raciocínio verbal": { score: 0, maxScore: 0 },
    "Raciocínio matemático": { score: 0, maxScore: 0 },
    "Raciocínio espacial": { score: 0, maxScore: 0 },
    "Memória / atenção": { score: 0, maxScore: 0 },
  };

  questions.forEach((q, index) => {
    const userAnswer = answers[index];
    scoresByCategory[q.category].maxScore += q.points;
    if (userAnswer === q.correctAnswer) {
      scoresByCategory[q.category].score += q.points;
    }
  });

  const totalScore = Object.values(scoresByCategory).reduce((sum, c) => sum + c.score, 0);
  const maxScore = Object.values(scoresByCategory).reduce((sum, c) => sum + c.maxScore, 0);
  const progress = (Object.keys(answers).length / questions.length) * 100;

  return {
    questions,
    currentQuestion,
    currentQuestionIndex,
    selectedAnswer,
    answers,
    showResult,
    progress,
    totalScore,
    maxScore,
    scoresByCategory,
    handleAnswerSelect,
    handleNext,
    handleRetake,
  };
};
