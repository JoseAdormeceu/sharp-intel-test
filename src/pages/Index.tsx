import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Info, Users } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";

const Index = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        <main className="min-h-screen flex items-center justify-center py-20">
          <section className="max-w-2xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                Teste de QI
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
                Avalie suas capacidades cognitivas através de 50 perguntas científicas
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              <Link to="/quiz">
                <Button
                  size="lg"
                  className="text-lg px-12 py-6 w-full sm:w-auto"
                  aria-label="Iniciar teste de QI"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Iniciar Teste
                </Button>
              </Link>

              <Link to="/what-is-iq">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-12 py-6 w-full sm:w-auto"
                  aria-label="Aprender sobre o que é QI"
                >
                  <Info className="w-5 h-5 mr-2" />
                  O que é o QI?
                </Button>
              </Link>

              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-12 py-6 w-full sm:w-auto"
                  aria-label="Saber mais sobre o UniQuiz"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Sobre
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 max-w-lg mx-auto">
              <div className="space-y-2">
                <div className="text-3xl font-bold">50</div>
                <div className="text-sm text-muted-foreground">Questões</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">5</div>
                <div className="text-sm text-muted-foreground">Categorias</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">≈25min</div>
                <div className="text-sm text-muted-foreground">Duração</div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </PageLayout>
  );
};

export default Index;
