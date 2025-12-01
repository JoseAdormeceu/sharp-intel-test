import { useState, useEffect } from "react";
import { getRandomizedQuestions, Question, Category } from "@/data/questions";

const STORAGE_KEY = "uniquiz_progress";

interface StoredProgress {
  answers: Record<number, number>;
  currentQuestionIndex: number;
  age: number;
  ageSet: boolean;
  timestamp: number;
}

export const useQuiz = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [age, setAge] = useState<number>(25);
  const [ageSet, setAgeSet] = useState(false);

  // Load randomized questions and restore progress from localStorage on mount
  useEffect(() => {
    const randomQuestions = getRandomizedQuestions();
    setQuestions(randomQuestions);

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const progress: StoredProgress = JSON.parse(stored);
        const hoursSinceLastSave = (Date.now() - progress.timestamp) / (1000 * 60 * 60);
        if (hoursSinceLastSave < 24) {
          setAnswers(progress.answers);
          setCurrentQuestionIndex(progress.currentQuestionIndex);
          setAge(progress.age);
          setAgeSet(progress.ageSet);
          setAnsweredQuestions(new Set(Object.keys(progress.answers).map(Number)));
          setSelectedAnswer(progress.answers[progress.currentQuestionIndex] ?? null);
        } else {
          localStorage.removeItem(STORAGE_KEY);
        }
      } catch (e) {
        console.error("Failed to restore quiz progress:", e);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (Object.keys(answers).length > 0 || ageSet) {
      const progress: StoredProgress = {
        answers,
        currentQuestionIndex,
        age,
        ageSet,
        timestamp: Date.now(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }, [answers, currentQuestionIndex, age, ageSet]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answerIndex }));
    setAnsweredQuestions((prev) => new Set([...prev, currentQuestionIndex]));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(answers[currentQuestionIndex + 1] ?? null);
    } else {
      setShowResult(true);
    }
  };

  const handleRetake = () => {
    localStorage.removeItem(STORAGE_KEY);
    const randomQuestions = getRandomizedQuestions();
    setQuestions(randomQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setAnsweredQuestions(new Set());
    setAnswers({});
    setShowResult(false);
    setAgeSet(false);
  };

  const handleSetAge = (userAge: number) => {
    setAge(userAge);
    setAgeSet(true);
  };

  // -----------------------------
  // Cálculo de scores e QI
  // -----------------------------
  const scoresByCategory: Record<Category, { score: number; maxScore: number }> = {
    "Raciocínio lógico": { score: 0, maxScore: 0 },
    "Raciocínio verbal": { score: 0, maxScore: 0 },
    "Raciocínio matemático": { score: 0, maxScore: 0 },
    "Raciocínio espacial": { score: 0, maxScore: 0 },
    "Memória / atenção": { score: 0, maxScore: 0 },
  };

  let totalScore = 0;
  let maxTotalScore = 0;

  questions.forEach((question, index) => {
    const category = question.category;
    const points = question.points;
    const userAnswer = answers[index];

    scoresByCategory[category].maxScore += points;
    maxTotalScore += points;

    if (userAnswer === question.correctAnswer) {
      scoresByCategory[category].score += points;
      totalScore += points;
    }
  });

  // QI: média 100, desvio padrão 15
  // Fórmula simplificada: QI = 100 + (pontuação - média esperada) * 15 / desvio esperado
  // Para simplificação sem dados históricos, consideramos média = 50% dos pontos, SD = 15% dos pontos máximos
  const expectedMean = maxTotalScore * 0.5;
  const expectedSD = maxTotalScore * 0.15;
  const IQ = Math.round(100 + ((totalScore - expectedMean) / expectedSD) * 15);

  const progress = (Object.keys(answers).length / questions.length) * 100;

  return {
    questions,
    currentQuestion,
    currentQuestionIndex,
    selectedAnswer,
    answeredQuestions,
    totalScore,
    maxTotalScore,
    scoresByCategory,
    showResult,
    progress,
    age,
    ageSet,
    IQ,
    handleAnswerSelect,
    handleNext,
    handleRetake,
    handleSetAge,
  };
};
