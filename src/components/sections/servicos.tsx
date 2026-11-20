import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const servicos = [
  {
    titulo: "Acompanhamento na gestação",
    texto: "Orientação nutricional para a gestante e a família.",
  },
  {
    titulo: "Alimentação do bebê e da criança",
    texto: "Introdução alimentar, rotina e mais tranquilidade à mesa.",
  },
  {
    titulo: "Crianças neurodivergentes",
    texto:
      "Plano alimentar e estratégias adaptadas ao perfil sensorial e à rotina da criança.",
  },
];

export function Servicos() {
  return (
    <section id="servicos" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-16">
      <h2 className="text-3xl font-bold">Como posso ajudar</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {servicos.map((s) => (
          <Card key={s.titulo}>
            <CardHeader>
              <CardTitle>{s.titulo}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{s.texto}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
