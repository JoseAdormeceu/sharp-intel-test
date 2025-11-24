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

    // Try to restore progress from localStorage
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const progress: StoredProgress = JSON.parse(stored);
        // Only restore if less than 24 hours old
        const hoursSinceLastSave = (Date.now() - progress.timestamp) / (1000 * 60 * 60);
        if (hoursSinceLastSave < 24) {
          setAnswers(progress.answers);
          setCurrentQuestionIndex(progress.currentQuestionIndex);
          setAge(progress.age);
          setAgeSet(progress.ageSet);
          setAnsweredQuestions(new Set(Object.keys(progress.answers).map(Number)));
          setSelectedAnswer(progress.answers[progress.currentQuestionIndex] ?? null);
        } else {
          // Clear old data
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
    // Clear localStorage
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

  // Calculate scores
  const scoresByCategory: Record<Category, { score: number; maxScore: number }> = {
    "Raciocínio lógico": { score: 0, maxScore: 0 },
    "Raciocínio verbal": { score: 0, maxScore: 0 },
    "Raciocínio matemático": { score: 0, maxScore: 0 },
    "Raciocínio espacial": { score: 0, maxScore: 0 },
    "Memória / atenção": { score: 0, maxScore: 0 },
  };

  questions.forEach((question, index) => {
    const userAnswer = answers[index];
    const category = question.category;

    scoresByCategory[category].maxScore += 1;

    if (userAnswer === question.correctAnswer) {
      scoresByCategory[category].score += 1;
    }
  });

  const totalScore = Object.values(scoresByCategory).reduce((sum, cat) => sum + cat.score, 0);
  const maxScore = questions.length;
  const progress = (Object.keys(answers).length / questions.length) * 100;

  return {
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
  };
};