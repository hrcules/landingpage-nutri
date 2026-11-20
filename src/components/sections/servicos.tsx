import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const servicos = [
  { titulo: "[PLACEHOLDER: serviço 1]", texto: "[PLACEHOLDER: descrição]" },
  { titulo: "[PLACEHOLDER: serviço 2]", texto: "[PLACEHOLDER: descrição]" },
  { titulo: "[PLACEHOLDER: serviço 3]", texto: "[PLACEHOLDER: descrição]" },
];

export function Servicos() {
  return (
    <section id="servicos" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-16">
      <h2 className="text-3xl font-bold">Serviços</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {servicos.map((s, i) => (
          <Card key={i}>
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
