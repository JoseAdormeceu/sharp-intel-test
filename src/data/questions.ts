export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  id: string;
  difficulty: Difficulty;
  question: string;
  options: string[];
  correctAnswer: number;
  points: number;
}

export const questionPool: Question[] = [
  // Easy Questions (10 points each)
  {
    id: 'e1',
    difficulty: 'easy',
    question: 'Qual número completa a sequência: 2, 4, 6, 8, ?',
    options: ['9', '10', '11', '12'],
    correctAnswer: 1,
    points: 10,
  },
  {
    id: 'e2',
    difficulty: 'easy',
    question: 'Se todos os gatos são animais e todos os animais precisam de comida, então:',
    options: [
      'Alguns gatos não precisam de comida',
      'Todos os gatos precisam de comida',
      'Nenhum gato precisa de comida',
      'Apenas alguns gatos são animais',
    ],
    correctAnswer: 1,
    points: 10,
  },
  {
    id: 'e3',
    difficulty: 'easy',
    question: 'Qual palavra não pertence ao grupo: Cão, Gato, Pássaro, Mesa',
    options: ['Cão', 'Gato', 'Pássaro', 'Mesa'],
    correctAnswer: 3,
    points: 10,
  },
  {
    id: 'e4',
    difficulty: 'easy',
    question: 'Quantos meses têm 28 dias?',
    options: ['1', '2', '11', '12'],
    correctAnswer: 3,
    points: 10,
  },
  {
    id: 'e5',
    difficulty: 'easy',
    question: '3 + 5 × 2 = ?',
    options: ['13', '16', '11', '10'],
    correctAnswer: 0,
    points: 10,
  },

  // Medium Questions (20 points each)
  {
    id: 'm1',
    difficulty: 'medium',
    question: 'Qual número completa a sequência: 1, 1, 2, 3, 5, 8, ?',
    options: ['11', '12', '13', '14'],
    correctAnswer: 2,
    points: 20,
  },
  {
    id: 'm2',
    difficulty: 'medium',
    question: 'Se 5 máquinas levam 5 minutos para fazer 5 produtos, quanto tempo levam 100 máquinas para fazer 100 produtos?',
    options: ['5 minutos', '20 minutos', '100 minutos', '500 minutos'],
    correctAnswer: 0,
    points: 20,
  },
  {
    id: 'm3',
    difficulty: 'medium',
    question: 'Qual é o próximo número na sequência: 2, 6, 12, 20, 30, ?',
    options: ['38', '40', '42', '44'],
    correctAnswer: 2,
    points: 20,
  },
  {
    id: 'm4',
    difficulty: 'medium',
    question: 'LIVRO está para LEITURA como GARFO está para:',
    options: ['COZINHA', 'COMIDA', 'COMER', 'PRATO'],
    correctAnswer: 2,
    points: 20,
  },
  {
    id: 'm5',
    difficulty: 'medium',
    question: 'Num lago, há um nenúfar que duplica de tamanho a cada dia. Se leva 48 dias para cobrir todo o lago, em quantos dias cobriu metade do lago?',
    options: ['24 dias', '47 dias', '46 dias', '36 dias'],
    correctAnswer: 1,
    points: 20,
  },

  // Hard Questions (30 points each)
  {
    id: 'h1',
    difficulty: 'hard',
    question: 'Se todos os Bloops são Razzies e todos os Razzies são Lazzies, então todos os Bloops são definitivamente Lazzies?',
    options: ['Sim', 'Não', 'Impossível determinar', 'Apenas alguns'],
    correctAnswer: 0,
    points: 30,
  },
  {
    id: 'h2',
    difficulty: 'hard',
    question: 'Qual número completa a sequência: 1, 4, 9, 16, 25, 36, ?',
    options: ['42', '45', '49', '56'],
    correctAnswer: 2,
    points: 30,
  },
  {
    id: 'h3',
    difficulty: 'hard',
    question: 'Num grupo de 100 pessoas, 72 pessoas falam inglês, 43 falam francês. Quantas pessoas falam ambas as línguas no mínimo?',
    options: ['15', '28', '29', '43'],
    correctAnswer: 0,
    points: 30,
  },
  {
    id: 'h4',
    difficulty: 'hard',
    question: 'Se A = 1, B = 2, C = 3... qual é o valor total de "LOGIC"?',
    options: ['50', '52', '54', '56'],
    correctAnswer: 1,
    points: 30,
  },
  {
    id: 'h5',
    difficulty: 'hard',
    question: 'Qual é o próximo número na sequência: 3, 7, 15, 31, 63, ?',
    options: ['127', '125', '126', '128'],
    correctAnswer: 0,
    points: 30,
  },
];

export const getRandomQuestions = (count: number = 15): Question[] => {
  const easyQuestions = questionPool.filter(q => q.difficulty === 'easy');
  const mediumQuestions = questionPool.filter(q => q.difficulty === 'medium');
  const hardQuestions = questionPool.filter(q => q.difficulty === 'hard');

  const getRandomFromArray = <T,>(arr: T[], n: number): T[] => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(n, arr.length));
  };

  return [
    ...getRandomFromArray(easyQuestions, 5),
    ...getRandomFromArray(mediumQuestions, 5),
    ...getRandomFromArray(hardQuestions, 5),
  ].sort(() => 0.5 - Math.random());
};
