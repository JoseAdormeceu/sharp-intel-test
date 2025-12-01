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
  { id: 101, category: "Raciocínio matemático", question: "Quanto é $12 \times 9$?", options: ["108", "118", "96", "120"], correctAnswer: 0, points: 10 },
  { id: 102, category: "Raciocínio matemático", question: "Se 4 maçãs custam 8€, quanto custam 10 maçãs?", options: ["12€", "16€", "20€", "24€"], correctAnswer: 2, points: 15 },
  { id: 103, category: "Raciocínio matemático", question: "Sequência: 3, 7, 15, 31, ? (Multiplica por 2 e soma 1)", options: ["47", "61", "63", "67"], correctAnswer: 2, points: 15 },
  { id: 104, category: "Raciocínio matemático", question: "$20 - 5 \times 3 + 2 = $? (Ordem de operações: $20 - 15 + 2 = 7$)", options: ["5", "7", "17", "47"], correctAnswer: 1, points: 10 },
  { id: 105, category: "Raciocínio matemático", question: "Qual número completa a sequência: 1, 8, 27, 64, ? (Cubos perfeitos: $1^3, 2^3, 3^3, \ldots$)", options: ["81", "100", "125", "216"], correctAnswer: 2, points: 10 },
  { id: 106, category: "Raciocínio matemático", question: "Se um comboio anda a $80 \text{ km/h}$, quanto percorre em $3,5 \text{ h}$?", options: ["240 km", "260 km", "280 km", "300 km"], correctAnswer: 2, points: 15 },
  { id: 107, category: "Raciocínio matemático", question: "$50 \\%$ de $300 = $?", options: ["50", "100", "150", "200"], correctAnswer: 2, points: 10 },
  { id: 108, category: "Raciocínio matemático", question: "Se hoje é dia 15, que dia será daqui a 28 dias?", options: ["Dia 13", "Dia 15", "Dia 17", "Dia 20"], correctAnswer: 1, points: 10 },
  { id: 109, category: "Raciocínio matemático", question: "Complete: 4, 16, 64, ? (Multiplica por 4 ou $4^1, 4^2, 4^3, \ldots$)", options: ["128", "256", "300", "512"], correctAnswer: 1, points: 15 },
  { id: 110, category: "Raciocínio matemático", question: "Quantos minutos existem em $4$ horas?", options: ["120", "240", "360", "480"], correctAnswer: 1, points: 10 },
  { id: 111, category: "Raciocínio matemático", question: "Quanto é $\\frac{2}{3} + \\frac{1}{6}$? (Resultado: $4/6 + 1/6 = 5/6$)", options: ["$\\frac{3}{9}$", "$\\frac{5}{6}$", "$\\frac{1}{2}$", "$\\frac{4}{6}$"], correctAnswer: 1, points: 15 },
  { id: 112, category: "Raciocínio matemático", question: "Se $3x - 5 = 10$, qual o valor de $x$?", options: ["3", "5", "8", "15"], correctAnswer: 1, points: 15 },
  { id: 113, category: "Raciocínio matemático", question: "Qual o valor de $6^3$?", options: ["18", "36", "216", "360"], correctAnswer: 2, points: 10 },
  { id: 114, category: "Raciocínio matemático", question: "Sequência: 5, 20, 80, 320, ? (Multiplica por 4)", options: ["640", "1280", "1600", "2560"], correctAnswer: 2, points: 15 },
  { id: 115, category: "Raciocínio matemático", question: "Se a área de um quadrado é $49 \\text{ cm}^2$, qual é o seu perímetro?", options: ["7 cm", "14 cm", "28 cm", "49 cm"], correctAnswer: 2, points: 15 },
  { id: 116, category: "Raciocínio matemático", question: "Qual número é o sucessor de $10^4$?", options: ["1000", "9999", "10001", "100000"], correctAnswer: 2, points: 10 },
  { id: 117, category: "Raciocínio matemático", question: "Numa sala, $60 \\%$ dos alunos são raparigas. Se há $12$ rapazes, quantas raparigas há? (Rapazes = $40 \\%$)", options: ["18", "20", "24", "30"], correctAnswer: 1, points: 15 },
  { id: 118, category: "Raciocínio matemático", question: "O que é $0,75$ em fração irredutível?", options: ["$\\frac{7}{5}$", "$\\frac{3}{4}$", "$\\frac{1}{4}$", "$\\frac{75}{100}$"], correctAnswer: 1, points: 10 },
  { id: 119, category: "Raciocínio matemático", question: "Qual o resultado de $\\sqrt{144}$?", options: ["10", "12", "14", "16"], correctAnswer: 1, points: 10 },
  { id: 120, category: "Raciocínio matemático", question: "Calcule a média de $10, 20, 30, 40$:", options: ["20", "25", "30", "100"], correctAnswer: 1, points: 10 },
  { id: 121, category: "Raciocínio matemático", question: "Qual é o maior número primo menor que 30?", options: ["23", "27", "29", "31"], correctAnswer: 2, points: 15 },
  { id: 122, category: "Raciocínio matemático", question: "Se $a = 5$ e $b = 3$, quanto é $a^2 - b^2$?", options: ["4", "16", "20", "34"], correctAnswer: 1, points: 15 },
  { id: 123, category: "Raciocínio matemático", question: "Qual o próximo número de Fibonacci: 1, 1, 2, 3, 5, 8, ?", options: ["10", "11", "12", "13"], correctAnswer: 2, points: 10 },
  { id: 124, category: "Raciocínio matemático", question: "Quanto é $10 \div 2 + 8 \times 3$?", options: ["13", "29", "39", "62"], correctAnswer: 1, points: 15 },
  { id: 125, category: "Raciocínio matemático", question: "Se um desconto de $20 \\%$ num artigo de $50\\$ é aplicado, qual o preço final?", options: ["40\\$", "30\\$", "35\\$", "20\\$"], correctAnswer: 0, points: 15 },
  { id: 126, category: "Raciocínio matemático", question: "Qual é o $5^{\\text{º}}$ múltiplo positivo de $7$?", options: ["14", "21", "28", "35"], correctAnswer: 3, points: 10 },
  { id: 127, category: "Raciocínio matemático", question: "Quantos gramas há em $2,5 \\text{ kg}$?", options: ["250 g", "2500 g", "25000 g", "250000 g"], correctAnswer: 1, points: 10 },
  { id: 128, category: "Raciocínio matemático", question: "Se a razão entre A e B é $2:5$ e $A = 10$, qual o valor de $B$?", options: ["15", "20", "25", "30"], correctAnswer: 2, points: 15 },
  { id: 129, category: "Raciocínio matemático", question: "Qual a área de um círculo com raio $4$ (use $\\pi \approx 3$ para simplificar)?", options: ["12", "24", "48", "96"], correctAnswer: 2, points: 15 },
  { id: 130, category: "Raciocínio matemático", question: "O que é $13 \times 11$?", options: ["121", "133", "143", "153"], correctAnswer: 2, points: 10 },
  { id: 131, category: "Raciocínio matemático", question: "Qual o resultado de $5^0 + 5^1 + 5^2$?", options: ["31", "30", "35", "50"], correctAnswer: 0, points: 15 },
  { id: 132, category: "Raciocínio matemático", question: "Qual o número que, multiplicado por 6, é igual a 72?", options: ["10", "12", "14", "16"], correctAnswer: 1, points: 10 },
  { id: 133, category: "Raciocínio matemático", question: "Qual é o valor de $2(x+3)$ se $x=4$?", options: ["10", "11", "14", "20"], correctAnswer: 2, points: 10 },
  { id: 134, category: "Raciocínio matemático", question: "Sequência: 10, 9, 7, 4, ?", options: ["0", "1", "-1", "-2"], correctAnswer: 0, points: 15 },
  { id: 135, category: "Raciocínio matemático", question: "Qual é o $\\text{MDC}$ (Máximo Divisor Comum) de 12 e 18?", options: ["2", "3", "6", "9"], correctAnswer: 2, points: 15 },
  { id: 136, category: "Raciocínio matemático", question: "Um pai tem 42 anos e o filho 12. Daqui a quantos anos o pai terá o dobro da idade do filho?", options: ["12 anos", "15 anos", "18 anos", "20 anos"], correctAnswer: 2, points: 15 },
  { id: 137, category: "Raciocínio matemático", question: "O que é $\\frac{1}{3}$ de $150$?", options: ["30", "45", "50", "75"], correctAnswer: 2, points: 10 },
  { id: 138, category: "Raciocínio matemático", question: "Se o preço de um litro de gasolina sobe $10 \\%$ de $1,50\\$ para $\\text{X}$, qual o valor de $\\text{X}$?", options: ["1,60\\$", "1,65\\$", "1,70\\$", "2,00\\$"], correctAnswer: 1, points: 15 },
  { id: 139, category: "Raciocínio matemático", question: "Qual o $\\text{MMC}$ (Mínimo Múltiplo Comum) de 4 e 6?", options: ["6", "12", "18", "24"], correctAnswer: 1, points: 10 },
  { id: 140, category: "Raciocínio matemático", question: "Qual a diferença entre $1,5$ e $0,85$?", options: ["0,55", "0,65", "0,75", "0,80"], correctAnswer: 1, points: 10 },
  { id: 141, category: "Raciocínio matemático", question: "Se $x > 7$, qual dos seguintes é um valor possível para $x$?", options: ["5", "6", "7", "8"], correctAnswer: 3, points: 10 },
  { id: 142, category: "Raciocínio matemático", question: "Quanto é $(8 \\times 4) - (10 \\div 2)$?", options: ["27", "30", "32", "37"], correctAnswer: 0, points: 10 },
  { id: 143, category: "Raciocínio matemático", question: "Um ângulo reto mede:", options: ["$45^\\circ$", "$90^\\circ$", "$180^\\circ$", "$360^\\circ$"], correctAnswer: 1, points: 10 },
  { id: 144, category: "Raciocínio matemático", question: "Sequência: 1, 2, 3, 5, 8, ? (Fibonacci)", options: ["11", "12", "13", "14"], correctAnswer: 2, points: 15 },
  { id: 145, category: "Raciocínio matemático", question: "Quantos números inteiros existem entre 10 e 20 (excluindo 10 e 20)?", options: ["8", "9", "10", "11"], correctAnswer: 2, points: 15 },
  { id: 146, category: "Raciocínio matemático", question: "Se um cubo tem $3 \\text{ cm}$ de aresta, qual é o seu volume?", options: ["$9 \\text{ cm}^3$", "$18 \\text{ cm}^3$", "$27 \\text{ cm}^3$", "$36 \\text{ cm}^3$"], correctAnswer: 2, points: 15 },
  { id: 147, category: "Raciocínio matemático", question: "Qual é o valor de $\\frac{1}{2} - \\frac{1}{4}$?", options: ["$\\frac{1}{4}$", "$\\frac{1}{2}$", "$\\frac{3}{4}$", "$\\frac{1}{8}$"], correctAnswer: 0, points: 10 },
  { id: 148, category: "Raciocínio matemático", question: "Se 3 trabalhadores constroem um muro em 10 dias, quantos dias demoram 6 trabalhadores? (Inversamente proporcional)", options: ["3 dias", "5 dias", "10 dias", "20 dias"], correctAnswer: 1, points: 15 },
  { id: 149, category: "Raciocínio matemático", question: "Qual o próximo número na sequência: 0, 1, 1, 2, 4, 8, ? (Dobro do anterior, a partir do 1)", options: ["10", "12", "15", "16"], correctAnswer: 3, points: 15 },
  { id: 150, category: "Raciocínio matemático", question: "A soma dos ângulos internos de um triângulo é:", options: ["$90^\\circ$", "$180^\\circ$", "$270^\\circ$", "$360^\\circ$"], correctAnswer: 1, points: 10 },  
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
