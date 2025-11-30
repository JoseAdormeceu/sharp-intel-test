import { useState, useEffect } from "react";
import { getRandomizedQuestions, Question, Category } from "@/data/questions";

// Storage key for answered question IDs only
const ANSWERED_QUESTIONS_KEY = "uniquiz_answered_questions";

/**
 * Carrega os IDs das perguntas já respondidas do localStorage
 */
const loadAnsweredQuestionIds = (): number[] => {
  try {
    const stored = localStorage.getItem(ANSWERED_QUESTIONS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error("Erro ao carregar perguntas respondidas:", e);
    return [];
  }
};

/**
 * Salva os IDs das perguntas respondidas no localStorage
 * Deve ser chamado APENAS no final do quiz
 */
const saveAnsweredQuestionIds = (questionIds: number[]): void => {
  try {
    const existingIds = loadAnsweredQuestionIds();
    const updatedIds = [...new Set([...existingIds, ...questionIds])];
    localStorage.setItem(ANSWERED_QUESTIONS_KEY, JSON.stringify(updatedIds));
  } catch (e) {
    console.error("Erro ao salvar perguntas respondidas:", e);
  }
};

export const useQuiz = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [age, setAge] = useState<number>(25);
  const [ageSet, setAgeSet] = useState(false);

  // Carrega perguntas randomizadas na inicialização
  // As perguntas já respondidas são automaticamente excluídas por getRandomizedQuestions
  useEffect(() => {
    const randomQuestions = getRandomizedQuestions();
    setQuestions(randomQuestions);
  }, []);

  const currentQuestion = questions[currentQuestionIndex];

  /**
   * Registra a resposta selecionada pelo usuário
   * Armazena apenas em memória durante o quiz
   */
  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answerIndex }));
    setAnsweredQuestions((prev) => new Set([...prev, currentQuestionIndex]));
  };

  /**
   * Avança para a próxima pergunta ou finaliza o quiz
   * Ao finalizar, salva os IDs das perguntas respondidas no localStorage
   */
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(answers[currentQuestionIndex + 1] ?? null);
    } else {
      // Fim do quiz: salvar apenas os IDs das perguntas respondidas
      const answeredQuestionIds = questions.map((q) => q.id);
      saveAnsweredQuestionIds(answeredQuestionIds);
      setShowResult(true);
    }
  };

  /**
   * Reinicia o quiz com novas perguntas
   * As perguntas já respondidas permanecem salvas e serão excluídas do próximo quiz
   */
  const handleRetake = () => {
    const randomQuestions = getRandomizedQuestions();
    setQuestions(randomQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setAnsweredQuestions(new Set());
    setAnswers({});
    setShowResult(false);
    setAgeSet(false);
  };

  /**
   * Define a idade do usuário
   */
  const handleSetAge = (userAge: number) => {
    setAge(userAge);
    setAgeSet(true);
  };

  /**
   * Calcula a pontuação por categoria
   * Baseado nas respostas fornecidas pelo usuário
   */
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