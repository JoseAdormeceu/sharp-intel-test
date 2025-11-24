import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Users, Heart, Play } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";

const teamMembers = [
  {
    name: "José Moura",
    role: "Developer",
    avatar: "JM",
  },
  {
    name: "Rui Cruzeiro",
    role: "Product Owner",
    avatar: "RC",
  },
  {
    name: "Afonso Sobreira",
    role: "Developer",
    avatar: "AS",
  },
  {
    name: "Afonso Rosa",
    role: "Scrum Master",
    avatar: "AR",
  },
  {
    name: "João Fonseca",
    role: "Developer",
    avatar: "JF",
  },
];

const About = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          <section className="text-center space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Sobre a Equipa
            </h1>
            <p className="text-xl text-muted-foreground">
              Conheça as pessoas por trás do UniQuiz
            </p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-primary/10">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">A Nossa História</h2>
            </div>
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-muted-foreground leading-relaxed">
                O UniQuiz nasceu da paixão de uma equipa de estudantes e entusiastas da
                psicologia cognitiva que acreditam que o conhecimento sobre as nossas próprias
                capacidades intelectuais deve ser acessível a todos. Combinando conhecimentos
                em desenvolvimento web, psicometria e design de experiência do utilizador,
                criámos uma plataforma que torna a avaliação do QI simples, precisa e envolvente.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A nossa missão é desmistificar os testes de inteligência e proporcionar uma
                ferramenta educativa que ajude as pessoas a compreender melhor as suas
                capacidades cognitivas. Através de uma abordagem científica e uma interface
                moderna, tornamos a avaliação do QI uma experiência acessível e informativa.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-secondary/10">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold">A Nossa Equipa</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="border border-border rounded-xl p-6 text-center space-y-4 bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-hero flex items-center justify-center text-white text-2xl font-bold">
                    {member.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-accent/10">
                <Brain className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold">O Nosso Teste</h2>
            </div>
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-muted-foreground leading-relaxed">
                O teste UniQuiz avalia cinco áreas fundamentais da inteligência:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Raciocínio lógico - capacidade de dedução e pensamento estruturado</li>
                <li>Raciocínio verbal - compreensão de linguagem e analogias</li>
                <li>Raciocínio matemático - resolução de problemas numéricos</li>
                <li>Raciocínio espacial - visualização e manipulação mental de formas</li>
                <li>Memória e atenção - capacidade de reter e processar informação</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Cada categoria é avaliada individualmente, e o seu QI final é calculado
                como a média ponderada das cinco áreas, ajustada pela idade. Utilizamos
                metodologias baseadas em escalas psicométricas reconhecidas internacionalmente,
                garantindo resultados precisos e significativos.
              </p>
            </div>
          </section>

          <section className="bg-gradient-card border border-border rounded-2xl p-8 text-center space-y-6">
            <h2 className="text-3xl font-bold">Pronto para começar?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubra o seu potencial cognitivo e veja como se compara.
              O teste é gratuito, rápido e fornece resultados detalhados imediatos.
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
