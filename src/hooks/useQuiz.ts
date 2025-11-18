import { useState, useEffect } from "react";
import { Question, getRandomizedQuestions, Category } from "@/data/questions";

export const useQuiz = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [age, setAge] = useState<number>(25);
  const [ageSet, setAgeSet] = useState(false);

  useEffect(() => {
    const randomQuestions = getRandomizedQuestions();
    setQuestions(randomQuestions);
  }, []);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const scoresByCategory = questions.reduce((acc, question) => {
    const category = question.category;
    if (!acc[category]) {
      acc[category] = { score: 0, maxScore: 0 };
    }
    
    acc[category].maxScore += question.points;
    
    if (answers[question.id] === question.correctAnswer) {
      acc[category].score += question.points;
    }
    
    return acc;
  }, {} as Record<Category, { score: number; maxScore: number }>);

  const totalScore = Object.values(scoresByCategory).reduce(
    (sum, cat) => sum + cat.score, 
    0
  );
  
  const maxScore = Object.values(scoresByCategory).reduce(
    (sum, cat) => sum + cat.maxScore, 
    0
  );

  const handleAnswerSelect = (answer: number) => {
    if (answeredQuestions.has(currentQuestionIndex)) return;

    setSelectedAnswer(answer);
    setAnsweredQuestions(prev => new Set([...prev, currentQuestionIndex]));
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));
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
    const randomQuestions = getRandomizedQuestions();
    setQuestions(randomQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setAnsweredQuestions(new Set());
    setAnswers({});
    setShowResult(false);
    setAgeSet(false);
    setAge(25);
  };

  const handleSetAge = (userAge: number) => {
    setAge(userAge);
    setAgeSet(true);
  };

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
