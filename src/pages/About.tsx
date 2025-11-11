import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, History, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            IQ Test
          </Link>
          <div className="flex gap-4">
            <Link to="/about">
              <Button variant="ghost">About Us</Button>
            </Link>
            <Link to="/quiz">
              <Button>Take Quiz</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
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
                O nosso teste de QI foi cuidadosamente desenvolvido para oferecer uma avaliação 
                abrangente e precisa das suas capacidades cognitivas. Utilizamos uma metodologia 
                baseada em princípios científicos estabelecidos, com questões organizadas em 
                diferentes níveis de dificuldade.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cada sessão de teste apresenta questões selecionadas aleatoriamente de uma ampla 
                base de dados, garantindo que cada experiência seja única e justa. As perguntas 
                avaliam diversos aspectos da inteligência, incluindo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Raciocínio lógico e dedutivo</li>
                <li>Reconhecimento de padrões</li>
                <li>Habilidades matemáticas</li>
                <li>Compreensão verbal e vocabulário</li>
                <li>Raciocínio espacial</li>
                <li>Memória de trabalho</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                O sistema de pontuação adapta-se dinamicamente ao seu desempenho, oferecendo 
                uma estimativa precisa do seu QI ao final do teste. Os resultados são apresentados 
                de forma clara e compreensível, com contexto sobre o que significam no espectro geral 
                da inteligência humana.
              </p>
            </div>
          </section>

          <section className="text-center pt-8">
            <Link to="/quiz">
              <Button size="lg" className="text-lg px-8 py-6">
                Começar o Teste Agora
              </Button>
            </Link>
          </section>
        </div>
      </main>

      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 IQ Test. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
