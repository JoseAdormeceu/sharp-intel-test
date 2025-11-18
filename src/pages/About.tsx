import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, History, Target } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Play } from "lucide-react";

const About = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          <section className="text-center space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Sobre o Nosso Teste de QI
            </h1>
            <p className="text-xl text-muted-foreground">
              Descubra o seu potencial cognitivo com precisão e confiança
            </p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-primary/10">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">O que é QI?</h2>
            </div>
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-muted-foreground leading-relaxed">
                O Quociente de Inteligência (QI) é uma medida padronizada da capacidade cognitiva humana. 
                Desenvolvido inicialmente no início do século XX, o QI avalia várias dimensões da inteligência, 
                incluindo raciocínio lógico, capacidade de resolução de problemas, memória, compreensão verbal 
                e habilidades espaciais.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Um QI médio situa-se em torno de 100 pontos, com a maioria da população (cerca de 68%) 
                pontuando entre 85 e 115. Pontuações acima de 130 são consideradas excepcionalmente altas, 
                enquanto pontuações abaixo de 70 podem indicar desafios cognitivos que requerem atenção especial.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-secondary/10">
                <History className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold">História do QI</h2>
            </div>
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-muted-foreground leading-relaxed">
                O conceito de teste de QI foi pioneiro pelo psicólogo francês Alfred Binet em 1905, 
                que desenvolveu o primeiro teste prático de inteligência para identificar estudantes 
                que precisavam de apoio educacional adicional. Sua abordagem revolucionária focava 
                em medir habilidades cognitivas práticas em vez de características físicas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ao longo do século XX, o teste evoluiu significativamente. Lewis Terman, da 
                Universidade de Stanford, adaptou o teste de Binet criando a escala Stanford-Binet, 
                que introduziu o termo "Quociente de Inteligência". David Wechsler posteriormente 
                desenvolveu testes que consideravam diferentes aspectos da inteligência, estabelecendo 
                muitos dos padrões modernos de avaliação cognitiva que usamos hoje.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-accent/10">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold">O Nosso Teste</h2>
            </div>
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-muted-foreground leading-relaxed">
                O nosso teste de QI foi cuidadosamente desenvolvido com base em metodologias 
                comprovadas de avaliação cognitiva. Ele apresenta uma variedade de questões 
                que avaliam diferentes aspetos da inteligência, incluindo:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Raciocínio lógico e dedutivo</li>
                <li>Reconhecimento de padrões</li>
                <li>Resolução de problemas matemáticos</li>
                <li>Compreensão verbal e analógica</li>
                <li>Pensamento abstrato</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Com 15 perguntas cuidadosamente selecionadas em três níveis de dificuldade, 
                o teste proporciona uma avaliação equilibrada do seu QI em aproximadamente 15 minutos. 
                Cada pergunta foi desenhada para desafiar capacidades específicas, oferecendo uma 
                visão abrangente das suas habilidades cognitivas.
              </p>
            </div>
          </section>

          <section className="bg-gradient-card border border-border rounded-2xl p-8 text-center space-y-6">
            <h2 className="text-3xl font-bold">Pronto para começar?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubra o seu potencial cognitivo e compare-se com a população global. 
              O teste é gratuito, rápido e fornece resultados imediatos.
            </p>
            <Link to="/quiz">
              <Button size="lg" className="text-lg px-8 py-6 gap-2">
                <Play className="w-5 h-5" />
                Iniciar Teste de QI
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
