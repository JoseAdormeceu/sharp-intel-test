import { useState, useEffect } from "react";
import { getRandomizedQuestions, Question, Category } from "@/data/questions";

const USED_QUESTIONS_KEY = "uniquiz_used_questions";
const TOTAL_QUESTIONS = 50;

export const useQuiz = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [age, setAge] = useState<number>(25);
  const [ageSet, setAgeSet] = useState(false);

  // Carregar perguntas aleatórias
  useEffect(() => {
    const usedIds: number[] = JSON.parse(localStorage.getItem(USED_QUESTIONS_KEY) || "[]");
    let newQuestions = getRandomizedQuestions().filter(q => !usedIds.includes(q.id));

    if (newQuestions.length < TOTAL_QUESTIONS) {
      newQuestions = getRandomizedQuestions(); // repetir se não houver suficientes
    }

    setQuestions(newQuestions.slice(0, TOTAL_QUESTIONS));
  }, []);

  const handleSetAge = (userAge: number) => {
    setAge(userAge);
    setAgeSet(true);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const question = questions[currentQuestionIndex];
    if (!question) return;

    setSelectedAnswer(answerIndex);
    setAnswers(prev => ({ ...prev, [currentQuestionIndex]: answerIndex }));
    setAnsweredQuestions(prev => new Set([...prev, currentQuestionIndex]));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(answers[currentQuestionIndex + 1] ?? null);
    } else {
      // Guardar IDs respondidas no localStorage
      const usedIds = JSON.parse(localStorage.getItem(USED_QUESTIONS_KEY) || "[]");
      const newUsedIds = [
        ...usedIds,
        ...questions.map(q => q.id)
      ];
      localStorage.setItem(USED_QUESTIONS_KEY, JSON.stringify([...new Set(newUsedIds)]));

      setShowResult(true);
    }
  };

  const handleRetake = () => {
    const newQuestions = getRandomizedQuestions().slice(0, TOTAL_QUESTIONS);
    setQuestions(newQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setAnsweredQuestions(new Set());
    setAnswers({});
    setShowResult(false);
    setAgeSet(false);
    setAge(25);
  };

  // Cálculo das pontuações
  const scoresByCategory: Record<Category, { score: number; maxScore: number }> = {
    "Raciocínio lógico": { score: 0, maxScore: 0 },
    "Raciocínio verbal": { score: 0, maxScore: 0 },
    "Raciocínio matemático": { score: 0, maxScore: 0 },
    "Raciocínio espacial": { score: 0, maxScore: 0 },
    "Memória / atenção": { score: 0, maxScore: 0 },
  };

  questions.forEach((q, index) => {
    scoresByCategory[q.category].maxScore += q.points;
    if (answers[index] === q.correctAnswer) {
      scoresByCategory[q.category].score += q.points;
    }
  });

  const totalScore = Object.values(scoresByCategory).reduce((acc, cat) => acc + cat.score, 0);
  const maxScore = Object.values(scoresByCategory).reduce((acc, cat) => acc + cat.maxScore, 0);

  return {
    questions,
    currentQuestion: questions[currentQuestionIndex],
    currentQuestionIndex,
    selectedAnswer,
    answeredQuestions,
    totalScore,
    maxScore,
    scoresByCategory,
    showResult,
    age,
    ageSet,
    handleAnswerSelect,
    handleNext,
    handleRetake,
    handleSetAge,
  };
};
