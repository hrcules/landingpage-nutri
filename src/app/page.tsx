import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Sobre } from "@/components/sections/sobre";
import { Abordagem } from "@/components/sections/abordagem";
import { Servicos } from "@/components/sections/servicos";
import { Contato } from "@/components/sections/contato";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Sobre />
        <Abordagem />
        <Servicos />
        <Contato />
      </main>
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © [PLACEHOLDER: ano e nome da profissional]. Conteúdo informativo; não
        substitui consulta.
      </footer>
    </>
  );
}
