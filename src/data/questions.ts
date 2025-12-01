export type Category = 
  | "Raciocínio lógico"
  | "Raciocínio verbal" 
  | "Raciocínio matemático"
  | "Raciocínio espacial"
  | "Memória / atenção";

export interface Question {
  id: number;
  category: Category;
  question: string;
  options: string[];
  correctAnswer: number;
  points: number;
}

const questionPool: Question[] = [
  { id: 1, category: "Raciocínio lógico", question: "Qual número completa a sequência: 3, 9, 15, 21, ?", options: ["25", "27", "29", "33"], correctAnswer: 1, points: 10 },
  { id: 2, category: "Raciocínio lógico", question: "Qual figura completa a sequência? ▲▼▲▼?", options: ["▼", "▲", "◼️", "◻️"], correctAnswer: 0, points: 10 },
  { id: 3, category: "Raciocínio lógico", question: "Se TODOS os pássaros voam e ESTE animal não voa, então ESTE animal é um pássaro?", options: ["Verdadeiro", "Falso", "Não se pode saber", "Apenas em teoria"], correctAnswer: 1, points: 15 },
  { id: 4, category: "Raciocínio lógico", question: "9, 16, 25, 36, ?", options: ["40", "42", "49", "50"], correctAnswer: 2, points: 10 },
  { id: 5, category: "Raciocínio lógico", question: "Qual dos seguintes não pertence ao grupo: rosa, cravo, margarida, repolho?", options: ["rosa", "cravo", "margarida", "repolho"], correctAnswer: 3, points: 10 },
  { id: 6, category: "Raciocínio lógico", question: "Se P → Q e não Q (negação de Q), então não P? (Modus Tollens)", options: ["Verdadeiro", "Falso"], correctAnswer: 0, points: 15 },
  { id: 7, category: "Raciocínio lógico", question: "Sequência: A, C, E, G, ?", options: ["H", "I", "J", "K"], correctAnswer: 1, points: 10 },
  { id: 8, category: "Raciocínio lógico", question: "Complete a analogia: Tesoura : Cortar :: Borracha : ?", options: ["Colar", "Apagar", "Escrever", "Pintar"], correctAnswer: 1, points: 10 },
  { id: 9, category: "Raciocínio lógico", question: "Se amanhã será quinta-feira, que dia foi anteontem?", options: ["Segunda-feira", "Terça-feira", "Quarta-feira", "Sexta-feira"], correctAnswer: 0, points: 10 },
  { id: 10, category: "Raciocínio lógico", question: "Qual número não pertence à série: 4, 8, 12, 16, 20, 22?", options: ["8", "12", "16", "22"], correctAnswer: 3, points: 10 },
  { id: 11, category: "Raciocínio lógico", question: "Qual figura é diferente das outras? ⬤⬤⬤◯⬤", options: ["⬤", "◯", "★", "◼️"], correctAnswer: 1, points: 10 },
  { id: 12, category: "Raciocínio lógico", question: "Complete: 1, 2, 4, 7, 11, ?", options: ["14", "15", "16", "18"], correctAnswer: 2, points: 15 },
  { id: 13, category: "Raciocínio lógico", question: "Se o Z é o último e o A é o primeiro, qual letra fica a meio (13ª)?", options: ["M", "N", "O", "P"], correctAnswer: 0, points: 10 },
  { id: 14, category: "Raciocínio lógico", question: "Qual é o próximo número primo na sequência (excluindo 2 e 3): 5, 7, 11, 13, ?", options: ["15", "17", "19", "21"], correctAnswer: 1, points: 15 },
  { id: 15, category: "Raciocínio lógico", question: "Qual dos seguintes é um dia da semana? Janeiro, Março, Sábado, Abril", options: ["Janeiro", "Março", "Sábado", "Abril"], correctAnswer: 2, points: 10 },
  { id: 16, category: "Raciocínio lógico", question: "Se 'CASA' é 1, 'CARRO' é 2 e 'NAVIO' é 3 (baseado na primeira letra), o que é 'BICICLETA'?", options: ["3", "4", "5", "6"], correctAnswer: 0, points: 15 },
  { id: 17, category: "Raciocínio lógico", question: "Um pai e um filho têm juntos 40 anos. O pai tem 30 anos a mais que o filho. Quantos anos tem o filho?", options: ["5", "10", "15", "20"], correctAnswer: 0, points: 15 },
  { id: 18, category: "Raciocínio lógico", question: "Onde o dia vem antes da noite e a noite antes do dia?", options: ["No calendário", "No dicionário", "No planeta Terra", "No ciclo lunar"], correctAnswer: 1, points: 10 },
  { id: 19, category: "Raciocínio lógico", question: "Qual letra completa a sequência: Z, X, V, T, ?", options: ["S", "R", "Q", "P"], correctAnswer: 1, points: 10 },
  { id: 20, category: "Raciocínio lógico", question: "Se todo A é B, e todo B é C. Então, algum C é A?", options: ["Verdadeiro", "Falso", "Depende", "Impossível de saber"], correctAnswer: 0, points: 15 },
  { id: 21, category: "Raciocínio lógico", question: "Qual palavra não pertence: Orelha, Nariz, Boca, Dedo?", options: ["Orelha", "Nariz", "Boca", "Dedo"], correctAnswer: 3, points: 10 },
  { id: 22, category: "Raciocínio lógico", question: "Um relógio atrasa 5 minutos por hora. Quanto tempo atrasará em 12 horas?", options: ["45 minutos", "50 minutos", "60 minutos", "75 minutos"], correctAnswer: 2, points: 10 },
  { id: 23, category: "Raciocínio lógico", question: "Se 'SOL' é 3 e 'LUA' é 3 (baseado no número de letras), o que é 'ESTRELA'?", options: ["3", "5", "7", "9"], correctAnswer: 2, points: 10 },
  { id: 24, category: "Raciocínio lógico", question: "A B C D E F G. Qual letra está na quarta posição?", options: ["C", "D", "E", "F"], correctAnswer: 1, points: 10 },
  { id: 25, category: "Raciocínio lógico", question: "Complete: 100, 81, 64, 49, ?", options: ["36", "40", "45", "48"], correctAnswer: 0, points: 10 },
  { id: 26, category: "Raciocínio lógico", question: "Qual o erro na sequência: 1, 3, 5, 7, 9, 12?", options: ["1", "5", "9", "12"], correctAnswer: 3, points: 15 },
  { id: 27, category: "Raciocínio lógico", question: "Se 'VERDE' é '5' e 'AZUL' é '4' (baseado no número de letras), o que é 'ROXO'?", options: ["3", "4", "5", "6"], correctAnswer: 3, points: 15 },
  { id: 28, category: "Raciocínio lógico", question: "Se todos os cães ladram e alguns animais ladram, então todos os animais são cães?", options: ["Verdadeiro", "Falso"], correctAnswer: 1, points: 15 },
  { id: 29, category: "Raciocínio lógico", question: "Qual número completa o padrão: 1, 8, 27, 64, ? (Cubos perfeitos)", options: ["81", "100", "125", "144"], correctAnswer: 2, points: 15 },
  { id: 30, category: "Raciocínio lógico", question: "Se um espelho está à tua frente, e tu levantas a mão esquerda, o que o teu reflexo faz?", options: ["Levanta a mão esquerda", "Levanta a mão direita", "Baixa as duas mãos", "Não se mexe"], correctAnswer: 1, points: 10 },
  { id: 31, category: "Raciocínio lógico", question: "Qual é a relação: Pato está para água, como pássaro está para ?", options: ["Terra", "Ninho", "Ar", "Gaiola"], correctAnswer: 2, points: 10 },
  { id: 32, category: "Raciocínio lógico", question: "Se 3 pessoas comem 3 pães em 3 minutos, quanto tempo demoram 100 pessoas a comer 100 pães?", options: ["100 minutos", "30 minutos", "3 minutos", "1 minuto"], correctAnswer: 2, points: 15 },
  { id: 33, category: "Raciocínio lógico", question: "Complete a sequência de letras: B, D, F, H, ?", options: ["I", "J", "K", "L"], correctAnswer: 1, points: 10 },
  { id: 34, category: "Raciocínio lógico", question: "Qual a próxima forma geométrica? Círculo, Quadrado, Pentágono, Hexágono, ?", options: ["Triângulo", "Octógono", "Heptágono", "Nonágono"], correctAnswer: 2, points: 10 },
  { id: 35, category: "Raciocínio lógico", question: "O que é que te pertence, mas é usado mais por outras pessoas?", options: ["O teu nome", "O teu carro", "A tua casa", "O teu dinheiro"], correctAnswer: 0, points: 15 },
  { id: 36, category: "Raciocínio lógico", question: "Se a ordem alfabética é revertida, qual é a terceira letra?", options: ["A", "C", "X", "Z"], correctAnswer: 2, points: 10 },
  { id: 37, category: "Raciocínio lógico", question: "Se todos os A são B, e nenhum C é A, então nenhum C é B?", options: ["Verdadeiro", "Falso", "Depende", "Impossível de saber"], correctAnswer: 1, points: 15 },
  { id: 38, category: "Raciocínio lógico", question: "Sequência de números triangulares: 1, 3, 6, 10, ?", options: ["13", "15", "17", "19"], correctAnswer: 1, points: 15 },
  { id: 39, category: "Raciocínio lógico", question: "Qual palavra não pertence ao grupo: Dó, Ré, Mi, Sol, Fá? (Ordem musical)", options: ["Dó", "Ré", "Mi", "Fá"], correctAnswer: 3, points: 10 },
  { id: 40, category: "Raciocínio lógico", question: "Se $1 = 5, 2 = 25, 3 = 125, 4 = 625$, então $5 = $?", options: ["1", "5", "3125", "725"], correctAnswer: 0, points: 15 },
  { id: 41, category: "Raciocínio lógico", question: "Onde 'i' vem depois de 'e' mas antes de 'o'?", options: ["No abecedário", "Na palavra 'amigo'", "Na palavra 'teoria'", "Na palavra 'eiou'"], correctAnswer: 2, points: 10 },
  { id: 42, category: "Raciocínio lógico", question: "Se for verdade que 'É verão ou é inverno', e for falso que 'É inverno', o que é verdade?", options: ["É verão", "Não é verão", "É outono", "É primavera"], correctAnswer: 0, points: 15 },
  { id: 43, category: "Raciocínio lógico", question: "Qual o próximo número na sequência: 1, 2, 6, 24, ? (Fatorial: $1\times 1, 1\times 2, 1\times 2\times 3, \ldots$)", options: ["48", "96", "120", "144"], correctAnswer: 2, points: 15 },
  { id: 44, category: "Raciocínio lógico", question: "Complete a analogia: Dia : Luz :: Noite : ?", options: ["Escuridão", "Sol", "Estrelas", "Sono"], correctAnswer: 0, points: 10 },
  { id: 45, category: "Raciocínio lógico", question: "Tenho cidades, mas não casas. Tenho montanhas, mas não árvores. Tenho água, mas não peixes. O que sou eu?", options: ["Um livro", "Um espelho", "Um mapa", "Um planeta"], correctAnswer: 2, points: 15 },
  { id: 46, category: "Raciocínio lógico", question: "Se A = Z, B = Y, C = X, qual palavra corresponde a 'FOG'?", options: ["ULD", "TJU", "URE", "VSH"], correctAnswer: 1, points: 15 },
  { id: 47, category: "Raciocínio lógico", question: "Sequência: 1/2, 1/4, 1/8, 1/16, ?", options: ["1/20", "1/32", "1/64", "1/100"], correctAnswer: 1, points: 10 },
  { id: 48, category: "Raciocínio lógico", question: "Qual dos seguintes é um número ímpar? 12, 16, 20, 25", options: ["12", "16", "20", "25"], correctAnswer: 3, points: 10 },
  { id: 49, category: "Raciocínio lógico", question: "Se chove, a estrada fica molhada. A estrada está molhada. Conclusão: Choveu. (Falácia da Afirmação do Consequente)", options: ["Verdadeiro", "Falso", "Provavelmente", "Não se pode inferir"], correctAnswer: 3, points: 15 },
  { id: 50, category: "Raciocínio lógico", question: "O que é que se molha ao secar?", options: ["Uma toalha", "Um pano", "Uma esponja", "Uma nuvem"], correctAnswer: 0, points: 15 },
];

export const getAllQuestions = (): Question[] => [...questionPool];

const STORAGE_KEY = 'quiz_used_questions';
const TOTAL_QUESTIONS = 50;

const getUsedQuestions = (): number[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveUsedQuestions = (used: number[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(used));
  } catch {
    console.error('Failed to save used questions to localStorage');
  }
};

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const getRandomizedQuestions = (): Question[] => {
  const usedIds = getUsedQuestions();
  
  let availableQuestions = questionPool.filter(q => !usedIds.includes(q.id));
  
  if (availableQuestions.length < TOTAL_QUESTIONS) {
    availableQuestions = questionPool;
  }
  
  const shuffled = shuffleArray(availableQuestions);
  const selected = shuffled.slice(0, TOTAL_QUESTIONS);
  
  const newUsedIds = [...(availableQuestions.length < TOTAL_QUESTIONS ? [] : usedIds), ...selected.map(q => q.id)];
  saveUsedQuestions(newUsedIds);
  
  return selected;
};
