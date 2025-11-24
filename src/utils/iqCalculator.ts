import { Category } from "@/data/questions";

export interface SubtestScore {
  category: Category;
  rawScore: number;
  maxScore: number;
  percentage: number;
  standardizedScore: number;
}

export interface IQResult {
  totalIQ: number;
  subtestScores: SubtestScore[];
  category: string;
  description: string;
  explanation: string;
}

// Função para calcular QI usando a fórmula simples
const calculateStandardizedScore = (rawScore: number, maxScore: number): number => {
  // Calcular percentagem de acertos
  const percentage = (rawScore / maxScore) * 100;

  // Converter percentagem para QI usando a fórmula:
  // QI = 100 + ((percentagem - 50) / 50) * 15
  // Isso garante que:
  // - 50% de acertos = QI 100 (média)
  // - 100% de acertos = QI 115
  // - 0% de acertos = QI 85
  const iq = 100 + ((percentage - 50) / 50) * 15;

  return Math.round(Math.max(55, Math.min(145, iq)));
};

// Ajuste por idade (simplificado)
const getAgeAdjustment = (age: number): number => {
  if (age < 18) return 5; // Bónus para jovens em desenvolvimento
  if (age >= 18 && age <= 40) return 0; // Idade ideal, sem ajuste
  if (age > 40 && age <= 60) return -2; // Pequeno ajuste negativo
  if (age > 60) return -5; // Ajuste maior para idade avançada
  return 0;
};

export const calculateIQ = (
  scoresByCategory: Record<Category, { score: number; maxScore: number }>,
  age: number
): IQResult => {
  // Calcular scores padronizados por subteste
  const subtestScores: SubtestScore[] = Object.entries(scoresByCategory).map(
    ([category, { score, maxScore }]) => {
      const percentage = (score / maxScore) * 100;
      const standardizedScore = calculateStandardizedScore(score, maxScore);
      
      return {
        category: category as Category,
        rawScore: score,
        maxScore,
        percentage: Math.round(percentage),
        standardizedScore
      };
    }
  );
  
  // Calcular QI total (média dos subtestes)
  const averageStandardizedScore = 
    subtestScores.reduce((sum, subtest) => sum + subtest.standardizedScore, 0) / 
    subtestScores.length;
  
  // Aplicar ajuste de idade
  const ageAdjustment = getAgeAdjustment(age);
  const totalIQ = Math.round(
    Math.max(55, Math.min(145, averageStandardizedScore + ageAdjustment))
  );
  
  // Classificação
  const category = getIQCategory(totalIQ);
  const description = getIQDescription(totalIQ);
  
  // Gerar explicação detalhada
  const explanation = generateExplanation(subtestScores, age, ageAdjustment, totalIQ);
  
  return {
    totalIQ,
    subtestScores,
    category,
    description,
    explanation
  };
};

const generateExplanation = (
  subtestScores: SubtestScore[],
  age: number,
  ageAdjustment: number,
  totalIQ: number
): string => {
  let explanation = "**Cálculo Detalhado do QI:**\n\n";
  
  // Explicar cada subteste
  explanation += "**1. Pontuações por Categoria:**\n\n";
  subtestScores.forEach((subtest, index) => {
    explanation += `${index + 1}. **${subtest.category}**\n`;
    explanation += `   - Pontuação bruta: ${subtest.rawScore}/${subtest.maxScore} (${subtest.percentage}%)\n`;
    explanation += `   - QI padronizado: ${subtest.standardizedScore}\n\n`;
  });
  
  // Calcular média
  const average = subtestScores.reduce((sum, s) => sum + s.standardizedScore, 0) / subtestScores.length;
  explanation += `**2. Média dos Subtestes:**\n`;
  explanation += `   (${subtestScores.map(s => s.standardizedScore).join(" + ")}) ÷ ${subtestScores.length} = ${Math.round(average)}\n\n`;
  
  // Ajuste de idade
  explanation += `**3. Ajuste por Idade (${age} anos):**\n`;
  explanation += `   Pontuação base: ${Math.round(average)}\n`;
  explanation += `   Ajuste de idade: ${ageAdjustment >= 0 ? '+' : ''}${ageAdjustment}\n`;
  explanation += `   **QI Final: ${totalIQ}**\n\n`;
  
  // Metodologia
  explanation += `**Metodologia:**\n`;
  explanation += `- Cada categoria foi convertida para escala padronizada (média=100, desvio=15)\n`;
  explanation += `- O QI total é a média dos 5 subtestes ajustada pela idade\n`;
  explanation += `- Valores limitados entre 55 e 145 conforme escalas psicométricas padrão\n`;
  
  return explanation;
};

export const getIQCategory = (iq: number): string => {
  if (iq >= 145) return 'Altamente Superior';
  if (iq >= 130) return 'Muito Acima da Média';
  if (iq >= 115) return 'Acima da Média';
  if (iq >= 85) return 'Média';
  if (iq >= 70) return 'Abaixo da Média';
  return 'Deficiência Intelectual';
};

export const getIQDescription = (iq: number): string => {
  if (iq >= 145) {
    return 'Capacidade cognitiva excecional. Apenas 0.1% da população atinge este nível.';
  }
  if (iq >= 130) {
    return 'Capacidades cognitivas muito superiores. Aproximadamente 2% da população está nesta faixa.';
  }
  if (iq >= 115) {
    return 'Habilidades cognitivas acima da média. Cerca de 14% da população está neste intervalo.';
  }
  if (iq >= 85) {
    return 'Capacidades cognitivas na faixa média. Aproximadamente 68% da população está nesta categoria.';
  }
  if (iq >= 70) {
    return 'Habilidades cognitivas abaixo da média. Cerca de 14% da população está nesta faixa.';
  }
  return 'Podem beneficiar de apoio cognitivo adicional. Consulte um profissional qualificado.';
};
