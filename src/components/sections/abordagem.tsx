import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const pontos = [
  {
    titulo: "Escuta inicial",
    texto: "Entendo a rotina, as preferências e as dificuldades da criança e da família.",
  },
  {
    titulo: "Passos pequenos",
    texto: "Mudanças graduais, no ritmo que a criança consegue acompanhar.",
  },
  {
    titulo: "Trabalho em equipe",
    texto:
      "Quando necessário, articulo com outros profissionais, como psicólogos, terapeutas ocupacionais e fonoaudiólogos. [CONFIRMAR]",
  },
];

export function Abordagem() {
  return (
    <section id="abordagem" className="scroll-mt-16 bg-secondary">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-3xl font-bold">Uma abordagem pensada para cada criança</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Crianças neurodivergentes, como as com TEA, TDAH ou outras condições do
          neurodesenvolvimento, podem ter sensibilidades alimentares, seletividade e rotinas
          próprias. Meu trabalho começa ouvindo a família, entendendo a história alimentar e
          construindo pequenos passos possíveis, no tempo de cada uma.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {pontos.map((p) => (
            <Card key={p.titulo}>
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
