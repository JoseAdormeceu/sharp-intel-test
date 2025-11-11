import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Info, Play } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            IQ Test
          </div>
          <div className="flex gap-4">
            <Link to="/about">
              <Button variant="ghost" className="gap-2">
                <Info className="w-4 h-4" />
                About Us
              </Button>
            </Link>
            <Link to="/quiz">
              <Button className="gap-2">
                <Play className="w-4 h-4" />
                Take Quiz
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4">
        <section className="min-h-[calc(100vh-80px)] flex items-center justify-center py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <div className="p-4 rounded-2xl bg-gradient-hero shadow-elevated">
                  <Brain className="w-16 h-16 text-white" />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Descubra o Seu{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Quociente de Inteligência
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Teste as suas capacidades cognitivas com o nosso teste de QI 
                cientificamente desenvolvido. Avalie o seu raciocínio lógico, 
                resolução de problemas e muito mais.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/quiz">
                <Button size="lg" className="text-lg px-8 py-6 shadow-soft gap-2">
                  <Play className="w-5 h-5" />
                  Começar o Teste
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 gap-2"
                >
                  <Info className="w-5 h-5" />
                  Saber Mais
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
              <div className="p-6 rounded-xl bg-gradient-card border border-border shadow-soft">
                <div className="text-4xl font-bold text-primary mb-2">15</div>
                <div className="text-sm text-muted-foreground">Perguntas Diversificadas</div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-card border border-border shadow-soft">
                <div className="text-4xl font-bold text-secondary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Níveis de Dificuldade</div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-card border border-border shadow-soft">
                <div className="text-4xl font-bold text-accent mb-2">≈15min</div>
                <div className="text-sm text-muted-foreground">Duração do Teste</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 IQ Test. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
