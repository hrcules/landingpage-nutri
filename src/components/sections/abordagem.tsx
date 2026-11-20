import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const pilares = [
  { titulo: "[PLACEHOLDER: pilar 1]", texto: "[PLACEHOLDER: descrição]" },
  { titulo: "[PLACEHOLDER: pilar 2]", texto: "[PLACEHOLDER: descrição]" },
  { titulo: "[PLACEHOLDER: pilar 3]", texto: "[PLACEHOLDER: descrição]" },
];

export function Abordagem() {
  return (
    <section id="abordagem" className="scroll-mt-16 bg-secondary">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-3xl font-bold">Abordagem para neurodivergência</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          [PLACEHOLDER: texto introdutório sobre a abordagem. Sem conteúdo clínico até aprovação.]
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {pilares.map((p, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{p.titulo}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{p.texto}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
