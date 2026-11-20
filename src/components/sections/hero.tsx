import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section id="inicio" className="bg-secondary">
      <div className="mx-auto max-w-5xl px-4 py-20 md:py-28">
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-primary">
          [PLACEHOLDER: especialidade]
        </p>
        <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
          [PLACEHOLDER: título principal sobre nutrição materno-infantil e neurodivergência]
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          [PLACEHOLDER: subtítulo acolhedor para famílias de crianças neurodivergentes]
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contato" className={cn(buttonVariants({ size: "lg" }))}>
            Agendar conversa
          </a>
          <a href="#abordagem" className={cn(buttonVariants({ size: "lg", variant: "outline" }))}>
            Conheça a abordagem
          </a>
        </div>
      </div>
    </section>
  );
}
