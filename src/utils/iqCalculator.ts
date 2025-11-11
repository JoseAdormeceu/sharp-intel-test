export const calculateIQ = (totalScore: number, maxScore: number): number => {
  // Calculate percentage score
  const percentage = (totalScore / maxScore) * 100;
  
  // IQ formula: convert percentage to IQ scale
  // Mean IQ = 100, Standard Deviation = 15
  // This maps 0-100% to roughly 70-145 IQ range
  const baseIQ = 70;
  const iqRange = 75;
  
  const iq = Math.round(baseIQ + (percentage / 100) * iqRange);
  
  return Math.min(Math.max(iq, 70), 145);
};

export const getIQCategory = (iq: number): string => {
  if (iq >= 130) return 'Excepcionalmente Alto';
  if (iq >= 120) return 'Superior';
  if (iq >= 110) return 'Acima da Média';
  if (iq >= 90) return 'Média';
  if (iq >= 80) return 'Abaixo da Média';
  return 'Baixo';
};

export const getIQDescription = (iq: number): string => {
  if (iq >= 130) {
    return 'Você demonstra capacidades cognitivas excepcionais. Apenas cerca de 2% da população atinge este nível.';
  }
  if (iq >= 120) {
    return 'Suas habilidades cognitivas estão bem acima da média. Aproximadamente 9% da população está nesta faixa.';
  }
  if (iq >= 110) {
    return 'Você possui habilidades cognitivas acima da média. Cerca de 16% da população está neste intervalo.';
  }
  if (iq >= 90) {
    return 'Suas capacidades cognitivas estão na faixa média. Aproximadamente 50% da população está nesta categoria.';
  }
  if (iq >= 80) {
    return 'Suas habilidades cognitivas estão ligeiramente abaixo da média. Cerca de 16% da população está nesta faixa.';
  }
  return 'Você pode beneficiar de treino cognitivo adicional. Considere consultar um profissional para orientação.';
};
