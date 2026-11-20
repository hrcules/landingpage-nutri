import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { fotoLocal } from "@/lib/profissional";

export function Hero() {
  return (
    <section id="inicio" className="bg-secondary">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 md:grid-cols-[1fr_320px] md:py-24">
        <div>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
            Alimentação com cuidado e respeito ao ritmo da sua criança
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Acompanhamento nutricional materno-infantil, com olhar atento para crianças
            neurodivergentes e suas famílias.
          </p>
          <div className="mt-8">
            <a href="#contato" className={cn(buttonVariants({ size: "lg" }))}>
              Agendar uma conversa
            </a>
          </div>
        </div>
        {fotoLocal ? (
          <Image
            src="/local/foto-profissional.jpeg"
            alt="Foto de [NOME DA NUTRICIONISTA], nutricionista materno-infantil"
            width={640}
            height={800}
            priority
            className="aspect-[4/5] w-full max-w-xs rounded-2xl object-cover md:max-w-none"
          />
        ) : (
          <div className="flex aspect-[4/5] w-full max-w-xs items-center justify-center rounded-2xl bg-background text-center text-sm text-muted-foreground md:max-w-none">
            [FOTO DA NUTRICIONISTA]
          </div>
        )}
      </div>
    </section>
  );
}
