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
  { id: 151, category: "Raciocínio espacial", question: "Imagina um cubo. Se a face da frente é verde e a de trás é amarela. Se o rodares 90° para a direita, que cor fica na frente?", options: ["Verde", "Amarela", "Lateral", "Cima"], correctAnswer: 2, points: 10 },
  { id: 152, category: "Raciocínio espacial", question: "Qual desenho completa o padrão: 🔺, ⬛, 🔺, ⬛, ?", options: ["⬛", "⚪", "⬟", "🔺"], correctAnswer: 3, points: 10 },
  { id: 153, category: "Raciocínio espacial", question: "Se o Norte está à tua frente, onde está o Sudeste?", options: ["À tua direita", "À tua esquerda", "Entre a frente e a esquerda", "Entre a frente e a direita"], correctAnswer: 3, points: 15 },
  { id: 154, category: "Raciocínio espacial", question: "Complete a sequência de figuras: ⬟⬡⬟⬡?", options: ["⬟", "⬡", "🔺", "🔻"], correctAnswer: 0, points: 10 },
  { id: 155, category: "Raciocínio espacial", question: "Se estiveres virado para o Sul e rodares 180° para a esquerda, para que direção ficas a olhar?", options: ["Norte", "Sul", "Este", "Oeste"], correctAnswer: 0, points: 10 },
  { id: 156, category: "Raciocínio espacial", question: "Rotacione mentalmente a letra 'P' 180° (de cabeça para baixo) - qual letra aparece?", options: ["P", "Q", "d", "b"], correctAnswer: 3, points: 15 },
  { id: 157, category: "Raciocínio espacial", question: "Num prédio de 7 andares (incluindo o rés-do-chão 0), tu sobes 3, desces 1, sobes 4 e desces 5. Em que andar terminas?", options: ["Andar 1", "Andar 2", "Andar 3", "Andar 4"], correctAnswer: 0, points: 15 },
  { id: 158, category: "Raciocínio espacial", question: "Se uma seta aponta para cima ⬆️ e roda 90° no sentido dos ponteiros do relógio, para onde aponta?", options: ["Para baixo ⬇️", "Para a esquerda ⬅️", "Para a direita ➡️", "Para cima ⬆️"], correctAnswer: 2, points: 10 },
  { id: 159, category: "Raciocínio espacial", question: "Qual o próximo na sequência: 1 círculo, 2 círculos, 3 círculos, ?", options: ["4 quadrados", "4 círculos", "5 círculos", "5 quadrados"], correctAnswer: 1, points: 10 },
  { id: 160, category: "Raciocínio espacial", question: "Numa mesa: O livro está à esquerda do copo. A caneta está à direita do copo. Onde está o copo?", options: ["À direita do livro", "À esquerda da caneta", "No meio do livro e da caneta", "Em cima da mesa"], correctAnswer: 2, points: 10 },
  { id: 161, category: "Raciocínio espacial", question: "Qual a imagem espelhada da letra 'F'?", options: ["F", "L", "E", "ᖷ"], correctAnswer: 3, points: 10 },
  { id: 162, category: "Raciocínio espacial", question: "Se o Oeste está à tua direita, para que direção estás virado?", options: ["Norte", "Sul", "Este", "Oeste"], correctAnswer: 1, points: 15 },
  { id: 163, category: "Raciocínio espacial", question: "Imagina um dado (cubo com faces 1-6 opostas: 1-6, 2-5, 3-4). Se a face '3' estiver em cima, qual está em baixo?", options: ["1", "2", "4", "5"], correctAnswer: 2, points: 15 },
  { id: 164, category: "Raciocínio espacial", question: "Qual a próxima posição: Círculo (em cima), Círculo (esquerda), Círculo (baixo), ?", options: ["Círculo (direita)", "Círculo (cima)", "Círculo (diagonal)", "Círculo (centro)"], correctAnswer: 0, points: 10 },
  { id: 165, category: "Raciocínio espacial", question: "Um mapa tem a escala 1:1000. Se a distância entre dois pontos no mapa é 5 cm, qual a distância real?", options: ["5 m", "50 m", "500 m", "5000 m"], correctAnswer: 1, points: 15 },
  { id: 166, category: "Raciocínio espacial", question: "Rotacione mentalmente a letra 'q' 90° no sentido anti-horário - qual letra se assemelha?", options: ["p", "d", "b", "c"], correctAnswer: 2, points: 15 },
  { id: 167, category: "Raciocínio espacial", question: "Numa fila, tu és o 5º de trás para a frente e o 10º de frente para trás. Quantas pessoas há na fila?", options: ["13", "14", "15", "16"], correctAnswer: 2, points: 15 },
  { id: 168, category: "Raciocínio espacial", question: "Se uma figura tem 3 linhas (🔺), qual é a figura com 5 linhas?", options: ["⬛", "⚪", "⬟", "⬡"], correctAnswer: 2, points: 10 },
  { id: 169, category: "Raciocínio espacial", question: "Qual a direção oposta ao Nordeste?", options: ["Noroeste", "Sudoeste", "Sudeste", "Norte"], correctAnswer: 1, points: 10 },
  { id: 170, category: "Raciocínio espacial", question: "Complete a sequência: 1 linha, 2 linhas, 3 linhas, 4 linhas, ?", options: ["6 linhas", "5 linhas", "3 linhas", "2 linhas"], correctAnswer: 1, points: 10 },
  { id: 171, category: "Raciocínio espacial", question: "Imagina que dobraste um quadrado de papel ao meio e depois outra vez ao meio. Quantas camadas tem no total?", options: ["2", "4", "6", "8"], correctAnswer: 1, points: 15 },
  { id: 172, category: "Raciocínio espacial", question: "Qual letra tem simetria vertical (pode ser dobrada ao meio na vertical)? A, L, S, F", options: ["A", "L", "S", "F"], correctAnswer: 0, points: 10 },
  { id: 173, category: "Raciocínio espacial", question: "Se um objeto está 10 m a Norte e depois 10 m a Leste. Qual a direção final em relação ao ponto de partida?", options: ["Norte", "Este", "Nordeste", "Sudoeste"], correctAnswer: 2, points: 10 },
  { id: 174, category: "Raciocínio espacial", question: "Rotacione mentalmente o '6' 90° no sentido horário - qual número se assemelha?", options: ["9", "p", "d", "b"], correctAnswer: 3, points: 15 },
  { id: 175, category: "Raciocínio espacial", question: "Um quadrado tem 4 lados. Um hexágono tem:", options: ["3 lados", "5 lados", "6 lados", "8 lados"], correctAnswer: 2, points: 10 },
  { id: 176, category: "Raciocínio espacial", question: "Se o relógio marca 3 horas, o ângulo entre os ponteiros é de:", options: ["30°", "60°", "90°", "180°"], correctAnswer: 2, points: 15 },
  { id: 177, category: "Raciocínio espacial", question: "Qual a forma que não se move se for refletida na vertical? Um círculo, um triângulo equilátero, um coração, a letra E", options: ["Um círculo", "Um triângulo equilátero", "Um coração", "A letra E"], correctAnswer: 0, points: 15 },
  { id: 178, category: "Raciocínio espacial", question: "Numa corrida, o João está atrás da Ana. O Pedro está à frente da Ana. Quem está em segundo lugar?", options: ["João", "Ana", "Pedro", "Não se pode saber"], correctAnswer: 1, points: 15 },
  { id: 179, category: "Raciocínio espacial", question: "Se o 'd' for refletido num espelho vertical, qual letra aparece?", options: ["b", "p", "q", "d"], correctAnswer: 0, points: 10 },
  { id: 180, category: "Raciocínio espacial", question: "Um ciclo de rotação completa é de:", options: ["90°", "180°", "270°", "360°"], correctAnswer: 3, points: 10 },
  { id: 181, category: "Raciocínio espacial", question: "Qual a próxima forma: ⬛, ⚪, ⬛, ⚪, ⬛, ⚪, ⬛, ?", options: ["⬛", "⚪", "🔺", "⬟"], correctAnswer: 1, points: 10 },
  { id: 182, category: "Raciocínio espacial", question: "Se te virares 45° para a direita, terás rodado:", options: ["Meia volta", "Um quarto de volta", "Oitavo de volta", "Volta completa"], correctAnswer: 2, points: 15 },
  { id: 183, category: "Raciocínio espacial", question: "Numa prateleira, o azul está à esquerda do vermelho, e o vermelho à esquerda do verde. Se o verde for removido, onde fica o vermelho?", options: ["À direita do azul", "À esquerda do azul", "No centro", "À esquerda do verde"], correctAnswer: 0, points: 10 },
  { id: 184, category: "Raciocínio espacial", question: "Qual a letra que mantém a sua forma quando rodada 180° (de cabeça para baixo)? L, S, F, E", options: ["L", "S", "F", "E"], correctAnswer: 1, points: 15 },
  { id: 185, category: "Raciocínio espacial", question: "Qual o próximo na sequência de figuras (em número de lados): 3, 4, 5, 6, ?", options: ["7", "8", "9", "10"], correctAnswer: 0, points: 10 },
  { id: 186, category: "Raciocínio espacial", question: "Se estás em frente a um edifício e ele está a 100 m, e tu andas 50 m para a esquerda, qual é a distância mais curta para o edifício?", options: ["50 m", "100 m", "111,8 m (aprox.)", "150 m"], correctAnswer: 2, points: 15 },
  { id: 187, category: "Raciocínio espacial", question: "A sombra de um poste ao meio-dia (Portugal Continental) aponta para:", options: ["Norte", "Sul", "Este", "Oeste"], correctAnswer: 0, points: 15 },
  { id: 188, category: "Raciocínio espacial", question: "Num cubo, quantas faces se encontram num vértice?", options: ["2", "3", "4", "6"], correctAnswer: 1, points: 10 },
  { id: 189, category: "Raciocínio espacial", question: "Se a letra 'b' for refletida num espelho horizontal (por baixo), qual letra aparece?", options: ["d", "p", "q", "b"], correctAnswer: 2, points: 10 },
  { id: 190, category: "Raciocínio espacial", question: "Qual a próxima etapa na sequência de rotação: ⬆️, ➡️, ⬇️, ⬅️, ?", options: ["➡️", "⬆️", "⬇️", "⬅️"], correctAnswer: 1, points: 10 },
  { id: 191, category: "Raciocínio espacial", question: "Se dobrares um pedaço de papel duas vezes na horizontal, quantas dobras tens?", options: ["1", "2", "3", "4"], correctAnswer: 1, points: 10 },
  { id: 192, category: "Raciocínio espacial", question: "Qual a direção que te leva de Leste para Norte em 90° de rotação?", options: ["Anti-horário", "Horário"], correctAnswer: 0, points: 15 },
  { id: 193, category: "Raciocínio espacial", question: "A letra 'H' tem simetria:", options: ["Apenas vertical", "Apenas horizontal", "Vertical e horizontal", "Nenhuma"], correctAnswer: 2, points: 10 },
  { id: 194, category: "Raciocínio espacial", question: "Numa bússola, qual o ponto que está entre Sudoeste e Sul?", options: ["Oeste", "Sudeste", "Sudoeste", "Sudoeste-Sul"], correctAnswer: 3, points: 10 },
  { id: 195, category: "Raciocínio espacial", question: "Qual a figura que representa um cilindro visto de cima?", options: ["Quadrado", "Círculo", "Retângulo", "Triângulo"], correctAnswer: 1, points: 10 },
  { id: 196, category: "Raciocínio espacial", question: "Se o 1º andar é 3 m acima do rés-do-chão, e cada andar tem 3 m, qual é a altura do 5º andar? (5 andares a 3m cada = 15m)", options: ["12 m", "15 m", "18 m", "21 m"], correctAnswer: 1, points: 15 },
  { id: 197, category: "Raciocínio espacial", question: "Qual a peça que falta para completar o quadrado? (Quadrado dividido em 4 quartos, falta o superior esquerdo)", options: ["Inferior direito", "Superior direito", "Superior esquerdo", "Inferior esquerdo"], correctAnswer: 2, points: 10 },
  { id: 198, category: "Raciocínio espacial", question: "Rotacione mentalmente a letra 'V' 90° no sentido anti-horário - qual letra se assemelha?", options: ["<", ">", "∧", "V"], correctAnswer: 0, points: 10 },
  { id: 199, category: "Raciocínio espacial", question: "Se caminhares 5 passos para a frente e 5 para a direita, qual o formato do teu caminho?", options: ["Linha reta", "Diagonal", "Quadrado", "L"], correctAnswer: 3, points: 10 },
  { id: 200, category: "Raciocínio espacial", question: "Quantos ângulos de 90° existem num retângulo?", options: ["2", "3", "4", "5"], correctAnswer: 2, points: 10 }
  { id: 201, category: "Memória / atenção", question: "Memorize a sequência: 'gato, rato, cão, peixe, cavalo'. Qual é o quarto animal?", options: ["gato", "cão", "peixe", "cavalo"], correctAnswer: 2, points: 10 },
  { id: 202, category: "Memória / atenção", question: "Observe: 8, 3, 9, 2, 5. Qual número NÃO estava na lista?", options: ["3", "4", "8", "9"], correctAnswer: 1, points: 10 },
  { id: 203, category: "Memória / atenção", question: "Conte quantos 'O' existem nesta frase: 'O gato correu no quintal.'", options: ["2", "3", "4", "5"], correctAnswer: 2, points: 15 },
  { id: 204, category: "Memória / atenção", question: "Memorize: vermelho, amarelo, verde, azul. Qual a cor que vem antes de 'verde'?", options: ["vermelho", "amarelo", "azul", "preto"], correctAnswer: 1, points: 10 },
  { id: 205, category: "Memória / atenção", question: "Qual o erro (número ímpar numa série par)? 2, 4, 6, 9, 10, 12", options: ["4", "6", "9", "12"], correctAnswer: 2, points: 10 },
  { id: 206, category: "Memória / atenção", question: "Observe a lista: 15, 23, 11, 40. Qual a soma dos dois números ímpares?", options: ["26", "38", "34", "51"], correctAnswer: 1, points: 15 },
  { id: 207, category: "Memória / atenção", question: "Qual símbolo é diferente? ▲ ▲ ▲ ■ ▲", options: ["▲", "■", "○", "◇"], correctAnswer: 1, points: 10 },
  { id: 208, category: "Memória / atenção", question: "Memorize a sequência: 10, 20, 30, 40, 50. Qual o terceiro número subtraído de 10?", options: ["10", "20", "30", "40"], correctAnswer: 1, points: 10 },
  { id: 209, category: "Memória / atenção", question: "Qual a palavra que não aparece: 'mesa, cadeira, banco, armário'?", options: ["mesa", "cadeira", "sofá", "armário"], correctAnswer: 2, points: 10 },
  { id: 210, category: "Memória / atenção", question: "Conte quantos 'A' existem nesta lista: Amarelo, Azul, Vermelho, Preto.", options: ["2", "3", "4", "5"], correctAnswer: 2, points: 10 },
  { id: 211, category: "Memória / atenção", question: "Memorize: 1, 3, 5, 7, 9. Qual o último número?", options: ["1", "5", "7", "9"], correctAnswer: 3, points: 10 },
  { id: 212, category: "Memória / atenção", question: "Observe: 100, 50, 25, 12.5. O próximo número é metade do anterior?", options: ["6", "6.25", "7", "12"], correctAnswer: 1, points: 15 },
  { id: 213, category: "Memória / atenção", question: "Qual número não é múltiplo de 5 na série: 10, 15, 22, 25?", options: ["10", "15", "22", "25"], correctAnswer: 2, points: 10 },
  { id: 214, category: "Memória / atenção", question: "Memorize: Portugal, Espanha, França, Itália. Qual o terceiro país?", options: ["Portugal", "Espanha", "França", "Itália"], correctAnswer: 2, points: 10 },
  { id: 215, category: "Memória / atenção", question: "Qual a letra diferente na série: B B B D B B B?", options: ["B", "D", "C", "A"], correctAnswer: 1, points: 10 },
  { id: 216, category: "Memória / atenção", question: "Observe: 2 × 3 + 4 = ? Qual o resultado?", options: ["2", "3", "4", "10"], correctAnswer: 3, points: 10 },
  { id: 217, category: "Memória / atenção", question: "Memorize a sequência: Sol, Lua, Estrela. Qual o primeiro elemento?", options: ["Lua", "Sol", "Estrela", "Terra"], correctAnswer: 1, points: 10 },
  { id: 218, category: "Memória / atenção", question: "Qual a capital que não pertence ao grupo: Paris, Roma, Madrid, Berlim, Londres, Tóquio?", options: ["Paris", "Roma", "Tóquio", "Londres"], correctAnswer: 2, points: 15 },
  { id: 219, category: "Memória / atenção", question: "Conte quantas vogais 'E' existem nesta frase: 'Este teste de atenção tem dez perguntas.'", options: ["5", "6", "7", "8"], correctAnswer: 1, points: 15 },
  { id: 220, category: "Memória / atenção", question: "Memorize: 2, 4, 8, 16, 32. Qual o segundo número dividido por 2?", options: ["1", "2", "4", "8"], correctAnswer: 2, points: 10 },
  { id: 221, category: "Memória / atenção", question: "Qual a palavra com 5 letras na lista: carro, comboio, avião, bicicleta?", options: ["carro", "comboio", "avião", "bicicleta"], correctAnswer: 0, points: 10 },
  { id: 222, category: "Memória / atenção", question: "Observe: 1, 4, 9, 16. O próximo número é o quadrado de?", options: ["4", "5", "6", "7"], correctAnswer: 1, points: 10 },
  { id: 223, category: "Memória / atenção", question: "Qual dos números NÃO é divisível por 3: 9, 12, 16, 18?", options: ["9", "12", "16", "18"], correctAnswer: 2, points: 10 },
  { id: 224, category: "Memória / atenção", question: "Memorize: A, B, C, D, E. Qual a letra no meio?", options: ["B", "C", "D", "E"], correctAnswer: 1, points: 10 },
  { id: 225, category: "Memória / atenção", question: "Qual a diferença entre a quantidade de 'S' e 'A' na palavra 'Casa'?", options: ["0", "1", "2", "3"], correctAnswer: 0, points: 15 },
  { id: 226, category: "Memória / atenção", question: "Observe a sequência: 101, 102, 103. Qual o número que está antes de 103?", options: ["101", "102", "103", "104"], correctAnswer: 1, points: 10 },
  { id: 227, category: "Memória / atenção", question: "Qual palavra não pertence (tem 3 sílabas): Carro, Elefante, Bicicleta, Televisão?", options: ["Carro", "Elefante", "Bicicleta", "Televisão"], correctAnswer: 0, points: 15 },
  { id: 228, category: "Memória / atenção", question: "Memorize: água, terra, fogo, ar. Qual elemento vem depois de 'terra'?", options: ["água", "fogo", "ar", "terra"], correctAnswer: 1, points: 10 },
  { id: 229, category: "Memória / atenção", question: "Conte quantas letras 'P' existem na palavra 'Paralelepípedo'.", options: ["2", "3", "4", "5"], correctAnswer: 3, points: 15 },
  { id: 230, category: "Memória / atenção", question: "Qual a estação que não pertence: Primavera, Verão, Outono, Inverno, Dezembro?", options: ["Primavera", "Verão", "Outono", "Dezembro"], correctAnswer: 4-1, points: 10 },
  { id: 231, category: "Memória / atenção", question: "Memorize: 10 × 2 = 20. Qual número foi multiplicado por 2?", options: ["10", "2", "20", "40"], correctAnswer: 0, points: 10 },
  { id: 232, category: "Memória / atenção", question: "Qual palavra é a mais longa: Caminhar, Correr, Saltar, Voar?", options: ["Caminhar", "Correr", "Saltar", "Voar"], correctAnswer: 0, points: 10 },
  { id: 233, category: "Memória / atenção", question: "Observe: 2, 3, 5, 7, 11. Qual o próximo número primo?", options: ["12", "13", "14", "15"], correctAnswer: 1, points: 15 },
  { id: 234, category: "Memória / atenção", question: "Memorize: 1000, 500, 250. Qual o número que é metade de 500?", options: ["1000", "500", "250", "125"], correctAnswer: 2, points: 10 },
  { id: 235, category: "Memória / atenção", question: "Qual a fruta diferente: Maçã, Pera, Tomate, Laranja?", options: ["Maçã", "Pera", "Tomate", "Laranja"], correctAnswer: 2, points: 15 },
  { id: 236, category: "Memória / atenção", question: "Observe os números: 1, 2, 3, 4, 5. Qual número está na 4ª posição?", options: ["2", "3", "4", "5"], correctAnswer: 2, points: 10 },
  { id: 237, category: "Memória / atenção", question: "Qual palavra não pertence (é um verbo): Falar, Dormir, Mesa, Comer?", options: ["Falar", "Dormir", "Mesa", "Comer"], correctAnswer: 2, points: 10 },
  { id: 238, category: "Memória / atenção", question: "Memorize os símbolos: ♥, ♦, ♣, ♠. Qual o segundo símbolo?", options: ["♥", "♦", "♣", "♠"], correctAnswer: 1, points: 10 },
  { id: 239, category: "Memória / atenção", question: "Conte quantas consoantes existem na palavra 'raciocínio'.", options: ["3", "4", "5", "6"], correctAnswer: 1, points: 15 },
  { id: 240, category: "Memória / atenção", question: "Qual a cor diferente: Vermelho, Verde, Azul, Amarelo, Branco, Preto, Rosa, Laranja?", options: ["Vermelho", "Azul", "Branco", "Rosa"], correctAnswer: 2, points: 15 },
  { id: 241, category: "Memória / atenção", question: "Memorize: A, Z, B, Y, C, X. Qual a terceira letra?", options: ["A", "B", "C", "Z"], correctAnswer: 1, points: 10 },
  { id: 242, category: "Memória / atenção", question: "Observe: O dia tem 24 horas. Quantas horas tem 2 dias?", options: ["24", "48", "72", "96"], correctAnswer: 1, points: 10 },
  { id: 243, category: "Memória / atenção", question: "Qual o número que é o dobro de 15 na série: 10, 15, 20, 30?", options: ["10", "15", "20", "30"], correctAnswer: 3, points: 10 },
  { id: 244, category: "Memória / atenção", question: "Memorize: 5, 10, 15, 20, 25. Qual o número divisível por 3 e 5?", options: ["5", "10", "15", "20"], correctAnswer: 2, points: 15 },
  { id: 245, category: "Memória / atenção", question: "Qual a letra diferente na série: T T T J T T T?", options: ["T", "J", "L", "H"], correctAnswer: 1, points: 10 },
  { id: 246, category: "Memória / atenção", question: "Observe: Qual mês vem antes de 'Maio'?", options: ["Março", "Abril", "Junho", "Julho"], correctAnswer: 1, points: 10 },
  { id: 247, category: "Memória / atenção", question: "Qual o número que não faz parte da sequência: 1, 4, 9, 16, 25, 30?", options: ["4", "9", "25", "30"], correctAnswer: 3, points: 15 },
  { id: 248, category: "Memória / atenção", question: "Memorize: água, refrigerante, sumo, leite. Qual a bebida que não é doce?", options: ["água", "refrigerante", "sumo", "leite"], correctAnswer: 0, points: 15 },
  { id: 249, category: "Memória / atenção", question: "Conte quantos dígitos '1' existem no número '1011011'.", options: ["3", "4", "5", "6"], correctAnswer: 3, points: 10 },
  { id: 250, category: "Memória / atenção", question: "Qual a palavra que não pertence (é um animal): Cão, Gato, Casa, Pássaro?", options: ["Cão", "Gato", "Casa", "Pássaro"], correctAnswer: 2, points: 10 }
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
