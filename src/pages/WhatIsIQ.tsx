import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { Brain } from "lucide-react";

const WhatIsIQ = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              O que é QI? (Quociente de Inteligência)
            </h1>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Introdução</h2>
            <p className="text-muted-foreground leading-relaxed">
              O QI, ou Quociente de Inteligência, é uma medida usada para avaliar capacidades cognitivas de uma pessoa em comparação com a média da população.
              Embora seja apenas um indicador entre muitos, é um dos métodos mais conhecidos para medir raciocínio, lógica e capacidade de resolução de problemas.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Origem do conceito</h2>
            <p className="text-muted-foreground leading-relaxed">
              A ideia de QI surgiu no início do século XX com o psicólogo Alfred Binet, que criou o primeiro teste de inteligência moderna.
              Mais tarde, William Stern introduziu a fórmula "Quotient of Intelligence", que deu origem ao termo QI.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Desde então, vários testes foram criados e refinados, como:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>WAIS (Wechsler Adult Intelligence Scale)</li>
              <li>WISC (para crianças)</li>
              <li>Raven's Progressive Matrices</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Como o QI é calculado</h2>
            <p className="text-muted-foreground leading-relaxed">
              Os testes de QI não avaliam conhecimentos, mas sim habilidades cognitivas, como:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Identificação de padrões</li>
              <li>Raciocínio lógico</li>
              <li>Raciocínio espacial</li>
              <li>Velocidade de processamento</li>
              <li>Memória de trabalho</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              A pontuação final é ajustada para que a média da população seja 100.
              Em geral:
            </p>
            <div className="bg-muted p-4 rounded-lg space-y-2 mt-4">
              <p className="text-muted-foreground">70–84 → abaixo da média</p>
              <p className="text-muted-foreground">85–115 → média</p>
              <p className="text-muted-foreground">116–130 → acima da média</p>
              <p className="text-muted-foreground">130+ → muito acima da média</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">O que o QI mede (e o que não mede)</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-xl font-medium">O que mede</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Capacidade de resolver problemas</li>
                  <li>Velocidade de raciocínio</li>
                  <li>Capacidade de abstração</li>
                  <li>Entendimento de padrões</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-medium">O que NÃO mede</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Criatividade</li>
                  <li>Inteligência emocional</li>
                  <li>Conhecimento geral</li>
                  <li>Sabedoria</li>
                  <li>Motivação ou esforço</li>
                </ul>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed italic mt-4">
              Ou seja: QI não é uma medida de valor pessoal — é apenas uma métrica cognitiva.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Limitações dos testes de QI</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Podem ser influenciados por ansiedade ou cansaço</li>
              <li>Não captam todas as formas de inteligência</li>
              <li>Dependem do estilo de teste utilizado</li>
              <li>Podem não refletir capacidades práticas do dia-a-dia</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Por isso, devem ser encarados com cuidado.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Estrutura típica de um teste de QI</h2>
            <p className="text-muted-foreground leading-relaxed">
              Os testes de QI costumam incluir secções como:
            </p>
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">1. Raciocínio lógico</h3>
                <p className="text-muted-foreground">Problemas de lógica, sequências e dedução.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">2. Padrões visuais</h3>
                <p className="text-muted-foreground">Escolher a figura que completa uma matriz.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">3. Raciocínio espacial</h3>
                <p className="text-muted-foreground">Rotação mental e orientação no espaço.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">4. Relações numéricas</h3>
                <p className="text-muted-foreground">Sequências de números, padrões matemáticos.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">5. Memória e atenção</h3>
                <p className="text-muted-foreground">Lembrar padrões, séries ou combinações.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Sobre o nosso teste</h2>
            <p className="text-muted-foreground leading-relaxed">
              O nosso teste de QI foi criado para ser rápido, divertido e acessível, inspirado nos testes mais comuns.
            </p>
            <div className="bg-muted p-6 rounded-lg space-y-3 mt-4">
              <h3 className="text-lg font-medium">Características:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>50 perguntas</li>
                <li>Dificuldade progressiva</li>
                <li>Sem limite de tempo</li>
                <li>Cálculo de pontuação baseado em respostas certas</li>
                <li>Não repete perguntas se o utilizador refizer o teste</li>
                <li>Avalia apenas raciocínio, não conhecimentos</li>
              </ul>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg mt-4">
              <p className="text-yellow-600 dark:text-yellow-400 font-medium">
                ⚠️ Aviso importante:
              </p>
              <p className="text-muted-foreground mt-2">
                Este teste é apenas recreativo. Não substitui avaliações profissionais de psicologia.
              </p>
            </div>
          </section>

          <div className="flex justify-center pt-8">
            <Link to="/quiz">
              <Button size="lg" className="text-lg px-12 py-6">
                <Brain className="w-5 h-5 mr-2" />
                Fazer Teste de QI
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default WhatIsIQ;
