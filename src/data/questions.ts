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
  { id: 1, category: "Raciocínio lógico", question: "Qual número completa a sequência: 2, 4, 8, 16, ?", options: ["18", "24", "32", "64"], correctAnswer: 2, points: 10 },
  { id: 2, category: "Raciocínio lógico", question: "Qual figura completa a sequência? 🔲⬛🔲⬛?", options: ["⬛", "🔲", "▲", "●"], correctAnswer: 1, points: 10 },
  { id: 3, category: "Raciocínio lógico", question: "Se TODOS os gatos são animais e ALGUNS animais são pretos, então todos os gatos são pretos?", options: ["Verdadeiro", "Falso"], correctAnswer: 1, points: 15 },
  { id: 4, category: "Raciocínio lógico", question: "7, 14, 28, 56, ?", options: ["70", "84", "112", "128"], correctAnswer: 2, points: 10 },
  { id: 5, category: "Raciocínio lógico", question: "Qual dos seguintes não pertence ao grupo: triângulo, círculo, quadrado, livro?", options: ["triângulo", "círculo", "quadrado", "livro"], correctAnswer: 3, points: 10 },
  { id: 6, category: "Raciocínio lógico", question: "Se A → B e B → C, então A → C?", options: ["Verdadeiro", "Falso"], correctAnswer: 0, points: 15 },
  { id: 7, category: "Raciocínio lógico", question: "Sequência: 1, 1, 2, 3, 5, ?", options: ["5", "7", "8", "10"], correctAnswer: 2, points: 15 },
  { id: 8, category: "Raciocínio lógico", question: "Complete a analogia: Caneta : Escrever :: Garfo : ?", options: ["Comer", "Cortar", "Escrever", "Beber"], correctAnswer: 0, points: 10 },
  { id: 9, category: "Raciocínio lógico", question: "Se ontem era terça-feira, que dia será daqui a 3 dias?", options: ["Sábado", "Sexta-feira", "Quinta-feira", "Domingo"], correctAnswer: 0, points: 10 },
  { id: 10, category: "Raciocínio lógico", question: "Qual número não pertence à série: 3, 6, 9, 12, 14?", options: ["3", "6", "12", "14"], correctAnswer: 3, points: 10 },
  { id: 11, category: "Raciocínio lógico", question: "Qual figura é diferente das outras? ⬛⬛⬛⬜⬛", options: ["⬛", "⬜", "▲", "●"], correctAnswer: 1, points: 10 },
  { id: 12, category: "Raciocínio lógico", question: "Complete: 5, 10, 20, 40, ?", options: ["60", "70", "80", "80"], correctAnswer: 2, points: 10 },
  { id: 13, category: "Raciocínio verbal", question: "Qual é o sinónimo de 'rápido'?", options: ["lento", "veloz", "forte", "baixo"], correctAnswer: 1, points: 10 },
  { id: 14, category: "Raciocínio verbal", question: "Qual palavra não pertence ao grupo: maçã, banana, cenoura, laranja?", options: ["maçã", "banana", "cenoura", "laranja"], correctAnswer: 2, points: 10 },
  { id: 15, category: "Raciocínio verbal", question: "Antónimo de 'difícil'?", options: ["fácil", "complicado", "árduo", "pesado"], correctAnswer: 0, points: 10 },
  { id: 16, category: "Raciocínio verbal", question: "Complete a analogia: Frio : Calor :: Claro : ?", options: ["Escuro", "Quente", "Frio", "Leve"], correctAnswer: 0, points: 10 },
  { id: 17, category: "Raciocínio verbal", question: "Qual palavra está incorreta nesta lista: casa, carro, flôr, árvore?", options: ["casa", "carro", "flôr", "árvore"], correctAnswer: 2, points: 15 },
  { id: 18, category: "Raciocínio verbal", question: "O que significa 'benevolente'?", options: ["generoso", "egoísta", "rápido", "difícil"], correctAnswer: 0, points: 15 },
  { id: 19, category: "Raciocínio verbal", question: "Qual frase faz mais sentido?", options: ["O sol é azul", "A água é líquida", "O fogo é frio", "O ar é líquido"], correctAnswer: 1, points: 10 },
  { id: 20, category: "Raciocínio verbal", question: "Complete: Dia é para noite como manhã é para ?", options: ["tarde", "meio-dia", "noite", "manhã"], correctAnswer: 0, points: 10 },
  { id: 21, category: "Raciocínio verbal", question: "Qual palavra tem mais letras? gato, elefante, cão, rato", options: ["gato", "elefante", "cão", "rato"], correctAnswer: 1, points: 10 },
  { id: 22, category: "Raciocínio verbal", question: "Complete: Livro : Ler :: Música : ?", options: ["Cantar", "Ouvir", "Escrever", "Pintar"], correctAnswer: 1, points: 10 },
  { id: 23, category: "Raciocínio matemático", question: "Quanto é 7 × 8?", options: ["48", "54", "56", "64"], correctAnswer: 2, points: 10 },
  { id: 24, category: "Raciocínio matemático", question: "Se 5 lápis custam 10€, quanto custam 8 lápis?", options: ["14€", "16€", "18€", "20€"], correctAnswer: 1, points: 15 },
  { id: 25, category: "Raciocínio matemático", question: "Sequência: 2, 6, 12, 20, ?", options: ["28", "30", "32", "36"], correctAnswer: 1, points: 15 },
  { id: 26, category: "Raciocínio matemático", question: "15 ÷ 3 + 7 = ?", options: ["10", "12", "15", "20"], correctAnswer: 1, points: 10 },
  { id: 27, category: "Raciocínio matemático", question: "Qual número completa a sequência: 1, 4, 9, 16, ?", options: ["20", "25", "30", "36"], correctAnswer: 1, points: 10 },
  { id: 28, category: "Raciocínio matemático", question: "Se um carro anda 60 km/h, quanto percorre em 2,5 h?", options: ["120 km", "130 km", "150 km", "160 km"], correctAnswer: 2, points: 15 },
  { id: 29, category: "Raciocínio matemático", question: "25% de 200 = ?", options: ["25", "40", "50", "60"], correctAnswer: 2, points: 10 },
  { id: 30, category: "Raciocínio matemático", question: "Se hoje é dia 18, que dia será daqui a 45 dias?", options: ["Dia 2", "Dia 1", "Dia 3", "Dia 5"], correctAnswer: 0, points: 15 },
  { id: 31, category: "Raciocínio matemático", question: "Complete: 3, 9, 27, ?", options: ["36", "54", "81", "90"], correctAnswer: 2, points: 15 },
  { id: 32, category: "Raciocínio matemático", question: "Quantos segundos existem em 2 horas?", options: ["7200", "3600", "5400", "10800"], correctAnswer: 0, points: 10 },
  { id: 33, category: "Raciocínio espacial", question: "Imagina um cubo. Se a face de cima é vermelha e a de baixo é azul, e rodares o cubo 180° para a frente, que cor fica na face de cima?", options: ["Vermelha", "Azul", "Nenhuma das cores", "As duas ao mesmo tempo"], correctAnswer: 1, points: 10 },
  { id: 34, category: "Raciocínio espacial", question: "Qual cubo corresponde à figura desenhada depois de dobrada?", options: ["A", "B", "C", "D"], correctAnswer: 2, points: 15 },
  { id: 35, category: "Raciocínio espacial", question: "Qual desenho completa o padrão? ⬛⬜⬛?", options: ["⬛", "⬜", "▲", "●"], correctAnswer: 1, points: 10 },
  { id: 36, category: "Raciocínio espacial", question: "Numa sala, a Ana está à tua frente, o João está atrás de ti, e a Carla está à direita do João. Em relação a ti, onde está a Carla?", options: ["À tua direita", "À tua esquerda", "À tua frente", "Atrás de ti"], correctAnswer: 1, points: 10 },
  { id: 37, category: "Raciocínio espacial", question: "Complete a sequência de figuras: ◼️◻️◼️?", options: ["◼️", "◻️", "▲", "●"], correctAnswer: 1, points: 10 },
  { id: 38, category: "Raciocínio espacial", question: "Se estiveres virado para o Norte e rodares 3 vezes 90° para a direita, para que direção ficas a olhar?", options: ["Norte", "Sul", "Este", "Oeste"], correctAnswer: 3, points: 15 },
  { id: 39, category: "Raciocínio espacial", question: "Rotacione mentalmente o L 90° → qual letra aparece?", options: ["Γ", "L", "┘", "⊂"], correctAnswer: 0, points: 15 },
  { id: 40, category: "Raciocínio espacial", question: "Num prédio, o elevador começa no 0. Ele sobe 5 andares, desce 2, sobe 4 e volta a descer 3. Em que andar termina?", options: ["Andar 2", "Andar 3", "Andar 4", "Andar 5"], correctAnswer: 3, points: 15 },
  { id: 41, category: "Raciocínio espacial", question: "Se dobrarmos o papel X, qual padrão ficará visível?", options: ["A", "B", "C", "D"], correctAnswer: 2, points: 15 },
  { id: 42, category: "Raciocínio espacial", question: "Numa prateleira estão três caixas: a vermelha à esquerda, a azul ao centro e a verde à direita. Se trocares a posição da caixa vermelha com a verde, qual fica agora no meio?", options: ["Norte", "Sul", "Este", "Oeste"], correctAnswer: 2, points: 10 },
  { id: 43, category: "Memória / atenção", question: "Memorize a sequência: 7, 3, 9, 2, 5. Qual é o terceiro número?", options: ["2", "3", "5", "9"], correctAnswer: 3, points: 10 },
  { id: 44, category: "Memória / atenção", question: "Observe esta sequência de letras: A, F, K, P, U. Qual a próxima letra?", options: ["Y", "V", "Z", "T"], correctAnswer: 2, points: 15 },
  { id: 45, category: "Memória / atenção", question: "Qual dos números não apareceu antes: 4, 7, 2, 9, 5?", options: ["4", "5", "6", "7"], correctAnswer: 2, points: 10 },
  { id: 46, category: "Memória / atenção", question: "Conte quantos triângulos existem nesta figura: △△△△", options: ["3", "4", "5", "6"], correctAnswer: 1, points: 10 },
  { id: 47, category: "Memória / atenção", question: "Memorize: azul, vermelho, verde, amarelo. Qual a segunda cor?", options: ["azul", "vermelho", "verde", "amarelo"], correctAnswer: 1, points: 10 },
  { id: 48, category: "Memória / atenção", question: "Observe a lista: 12, 5, 8, 3. Qual número aparece na última posição?", options: ["3", "5", "8", "12"], correctAnswer: 0, points: 10 },
  { id: 49, category: "Memória / atenção", question: "Qual símbolo é diferente? ★★☆★★", options: ["★", "☆", "✪", "✰"], correctAnswer: 1, points: 10 },
  { id: 50, category: "Memória / atenção", question: "Memorize a sequência: 1, 2, 4, 8, 16. Qual o quarto número?", options: ["2", "4", "8", "16"], correctAnswer: 2, points: 10 }
];

export const getAllQuestions = (): Question[] => [...questionPool];

const STORAGE_KEY = 'uniquiz_answered_questions';
const TOTAL_QUESTIONS = 15;

/**
 * Obtém os IDs das perguntas já respondidas do localStorage
 */
const getUsedQuestions = (): number[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

/**
 * Embaralha um array aleatoriamente
 */
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Retorna perguntas randomizadas, excluindo as já respondidas
 * Não salva nada no localStorage - isso é feito apenas no final do quiz
 */
export const getRandomizedQuestions = (): Question[] => {
  const usedIds = getUsedQuestions();

  // Filtra perguntas disponíveis (não respondidas)
  let availableQuestions = questionPool.filter(q => !usedIds.includes(q.id));

  // Se não houver perguntas suficientes, reinicia o pool
  if (availableQuestions.length < TOTAL_QUESTIONS) {
    availableQuestions = questionPool;
  }

  // Embaralha e seleciona as perguntas
  const shuffled = shuffleArray(availableQuestions);
  const selected = shuffled.slice(0, TOTAL_QUESTIONS);

  return selected;
};
