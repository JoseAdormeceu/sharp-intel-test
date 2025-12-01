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
  { id: 51, category: "Raciocínio verbal", question: "Qual é o sinónimo de 'efémero'?", options: ["duradouro", "transitório", "sólido", "eterno"], correctAnswer: 1, points: 15 },
  { id: 52, category: "Raciocínio verbal", question: "Qual palavra não pertence ao grupo: martelo, chave de fendas, serra, carro?", options: ["martelo", "chave de fendas", "serra", "carro"], correctAnswer: 3, points: 10 },
  { id: 53, category: "Raciocínio verbal", question: "Antónimo de 'prolixo'?", options: ["verboso", "sucinto", "longo", "detalhado"], correctAnswer: 1, points: 15 },
  { id: 54, category: "Raciocínio verbal", question: "Complete a analogia: Médico : Hospital :: Professor : ?", options: ["Aluno", "Escola", "Livro", "Quadro"], correctAnswer: 1, points: 10 },
  { id: 55, category: "Raciocínio verbal", question: "Qual palavra está incorreta nesta lista: caderneta, lapis, borracha, caneta?", options: ["caderneta", "lapis", "borracha", "caneta"], correctAnswer: 1, points: 15 },
  { id: 56, category: "Raciocínio verbal", question: "O que significa 'paradoxal'?", options: ["óbvio", "contraditório", "simples", "claro"], correctAnswer: 1, points: 15 },
  { id: 57, category: "Raciocínio verbal", question: "Qual frase faz mais sentido? (em termos de ação)", options: ["A montanha canta", "O vento cheira", "O cão ladra", "A pedra voa"], correctAnswer: 2, points: 10 },
  { id: 58, category: "Raciocínio verbal", question: "Complete: Pão é para farinha como Vinho é para ?", options: ["Copo", "Uva", "Água", "Bebida"], correctAnswer: 1, points: 10 },
  { id: 59, category: "Raciocínio verbal", question: "Qual palavra tem menos letras? abelha, formiga, mosquito, aranha", options: ["abelha", "formiga", "mosquito", "aranha"], correctAnswer: 3, points: 10 },
  { id: 60, category: "Raciocínio verbal", question: "Complete: Mão : Luva :: Pé : ?", options: ["Meia", "Bota", "Cinto", "Chapéu"], correctAnswer: 0, points: 10 },
  { id: 61, category: "Raciocínio verbal", question: "Qual é o sinónimo de 'opulento'?", options: ["pobre", "miserável", "rico", "vazio"], correctAnswer: 2, points: 15 },
  { id: 62, category: "Raciocínio verbal", question: "Qual palavra não pertence ao grupo: Saturno, Marte, Júpiter, Lua?", options: ["Saturno", "Marte", "Júpiter", "Lua"], correctAnswer: 3, points: 10 },
  { id: 63, category: "Raciocínio verbal", question: "Antónimo de 'exímio'?", options: ["perfeito", "hábil", "medíocre", "excelente"], correctAnswer: 2, points: 15 },
  { id: 64, category: "Raciocínio verbal", question: "Complete a analogia: Inverno : Frio :: Verão : ?", options: ["Neve", "Chuva", "Calor", "Vento"], correctAnswer: 2, points: 10 },
  { id: 65, category: "Raciocínio verbal", question: "Qual palavra tem um erro ortográfico? Exceção, ascensão, excesso, acensão.", options: ["Exceção", "ascensão", "excesso", "acensão"], correctAnswer: 3, points: 15 },
  { id: 66, category: "Raciocínio verbal", question: "O que significa 'perspicaz'?", options: ["lento", "esperto", "desatento", "burro"], correctAnswer: 1, points: 15 },
  { id: 67, category: "Raciocínio verbal", question: "Qual frase usa a palavra 'mas' corretamente? (oposição)", options: ["Ele foi mas não voltou", "Comi mas dormi", "O carro é velho, mas funciona", "O gato mas o cão"], correctAnswer: 2, points: 10 },
  { id: 68, category: "Raciocínio verbal", question: "Complete: Dicionário é para palavras como Enciclopédia é para ?", options: ["Livros", "Páginas", "Conhecimento", "Definições"], correctAnswer: 2, points: 10 },
  { id: 69, category: "Raciocínio verbal", question: "Qual a palavra com mais vogais? abacate, escola, bicicleta, elefante", options: ["abacate", "escola", "bicicleta", "elefante"], correctAnswer: 3, points: 15 },
  { id: 70, category: "Raciocínio verbal", question: "Complete: Barco : Água :: Avião : ?", options: ["Pista", "Céu", "Vento", "Asa"], correctAnswer: 1, points: 10 },
  { id: 71, category: "Raciocínio verbal", question: "Sinónimo de 'insólito'?", options: ["comum", "extraordinário", "habitual", "normal"], correctAnswer: 1, points: 15 },
  { id: 72, category: "Raciocínio verbal", question: "Qual não é um tipo de música: Jazz, Rock, Pop, Televisão?", options: ["Jazz", "Rock", "Pop", "Televisão"], correctAnswer: 3, points: 10 },
  { id: 73, category: "Raciocínio verbal", question: "Antónimo de 'benevolente'?", options: ["bondoso", "malévolo", "generoso", "amável"], correctAnswer: 1, points: 15 },
  { id: 74, category: "Raciocínio verbal", question: "Complete a analogia: Livro : Biblioteca :: Obra de arte : ?", options: ["Pincel", "Museu", "Quadro", "Artista"], correctAnswer: 1, points: 10 },
  { id: 75, category: "Raciocínio verbal", question: "Qual a frase com concordância incorreta?", options: ["Nós vamos à festa", "Eles foram ao cinema", "Eu e ele fomos", "Ela e eu fomos"], correctAnswer: 2, points: 15 },
  { id: 76, category: "Raciocínio verbal", question: "O que significa 'ubíquo'?", options: ["raro", "presente em todo o lado", "antigo", "pequeno"], correctAnswer: 1, points: 15 },
  { id: 77, category: "Raciocínio verbal", question: "Qual a palavra com o prefixo de negação? Desfazer, refazer, fazer, prever", options: ["Desfazer", "refazer", "fazer", "prever"], correctAnswer: 0, points: 10 },
  { id: 78, category: "Raciocínio verbal", question: "Complete: Pássaro : Ninho :: Cão : ?", options: ["Coleira", "Casota", "Osso", "Passeio"], correctAnswer: 1, points: 10 },
  { id: 79, category: "Raciocínio verbal", question: "Qual palavra tem um ditongo (encontro de duas vogais na mesma sílaba)? Saída, pausa, saúde, rainha", options: ["Saída", "pausa", "saúde", "rainha"], correctAnswer: 1, points: 15 },
  { id: 80, category: "Raciocínio verbal", question: "Complete: Planta : Raiz :: Dente : ?", options: ["Boca", "Gengiva", "Cárie", "Esmalte"], correctAnswer: 1, points: 10 },
  { id: 81, category: "Raciocínio verbal", question: "Sinónimo de 'altruísmo'?", options: ["egoísmo", "generosidade", "avareza", "maldade"], correctAnswer: 1, points: 15 },
  { id: 82, category: "Raciocínio verbal", question: "Qual palavra não está relacionada a 'tempo': Minuto, Segundo, Metro, Hora?", options: ["Minuto", "Segundo", "Metro", "Hora"], correctAnswer: 2, points: 10 },
  { id: 83, category: "Raciocínio verbal", question: "Antónimo de 'abundância'?", options: ["riqueza", "escassez", "provisão", "excesso"], correctAnswer: 1, points: 10 },
  { id: 84, category: "Raciocínio verbal", question: "Complete a analogia: Fogo : Cinza :: Água : ?", options: ["Vapor", "Gelo", "Molhado", "Mar"], correctAnswer: 0, points: 15 },
  { id: 85, category: "Raciocínio verbal", question: "Qual palavra é um substantivo próprio? cão, rio, Lisboa, mesa", options: ["cão", "rio", "Lisboa", "mesa"], correctAnswer: 2, points: 10 },
  { id: 86, category: "Raciocínio verbal", question: "O que significa 'efetivamente'?", options: ["realmente", "aparentemente", "raramente", "possivelmente"], correctAnswer: 0, points: 10 },
  { id: 87, category: "Raciocínio verbal", question: "Qual a palavra mais específica? Fruta, Maçã, Alimento, Doce", options: ["Fruta", "Maçã", "Alimento", "Doce"], correctAnswer: 1, points: 15 },
  { id: 88, category: "Raciocínio verbal", question: "Complete: Costurar : Agulha :: Cavar : ?", options: ["Pá", "Tesoura", "Faca", "Terra"], correctAnswer: 0, points: 10 },
  { id: 89, category: "Raciocínio verbal", question: "Qual palavra completa a frase: 'O ______ voa no céu azul.'?", options: ["Carro", "Peixe", "Pássaro", "Cão"], correctAnswer: 2, points: 10 },
  { id: 90, category: "Raciocínio verbal", question: "Complete: Leite : Vaca :: Ovo : ?", options: ["Galo", "Galinha", "Porco", "Ovelha"], correctAnswer: 1, points: 10 },
  { id: 91, category: "Raciocínio verbal", question: "Qual é o sinónimo de 'recôndito'?", options: ["aberto", "secreto", "público", "comum"], correctAnswer: 1, points: 15 },
  { id: 92, category: "Raciocínio verbal", question: "Qual não é um metal: Ouro, Prata, Ferro, Vidro?", options: ["Ouro", "Prata", "Ferro", "Vidro"], correctAnswer: 3, points: 10 },
  { id: 93, category: "Raciocínio verbal", question: "Antónimo de 'corajoso'?", options: ["valente", "temerário", "cobarde", "audaz"], correctAnswer: 2, points: 10 },
  { id: 94, category: "Raciocínio verbal", question: "Complete a analogia: Peixe : Escamas :: Pássaro : ?", options: ["Pena", "Asa", "Bico", "Gaiola"], correctAnswer: 0, points: 10 },
  { id: 95, category: "Raciocínio verbal", question: "Qual palavra é um adjetivo? Correr, Rápido, Casa, Falar", options: ["Correr", "Rápido", "Casa", "Falar"], correctAnswer: 1, points: 10 },
  { id: 96, category: "Raciocínio verbal", question: "O que significa 'mitigar'?", options: ["aumentar", "diminuir", "ignorar", "complicar"], correctAnswer: 1, points: 15 },
  { id: 97, category: "Raciocínio verbal", question: "Qual das palavras tem 4 sílabas? Escola, Caderno, Matemática, Lápis", options: ["Escola", "Caderno", "Matemática", "Lápis"], correctAnswer: 2, points: 15 },
  { id: 98, category: "Raciocínio verbal", question: "Complete: Árvore : Floresta :: Ovelha : ?", options: ["Fazenda", "Gado", "Rebanho", "Cerca"], correctAnswer: 2, points: 10 },
  { id: 99, category: "Raciocínio verbal", question: "Qual a palavra que rima com 'caminhar'? Correr, Falar, Nadar, Pisar", options: ["Correr", "Falar", "Nadar", "Pisar"], correctAnswer: 1, points: 10 },
  { id: 100, category: "Raciocínio verbal", question: "Complete: Templo : Religião :: Museu : ?", options: ["História", "Arte", "Ciência", "Turismo"], correctAnswer: 1, points: 10 },
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
