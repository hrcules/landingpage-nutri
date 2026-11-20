import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

// Foto e CRN são locais (public/local e .env.local, fora do git).
// Sem eles, o site exibe placeholders.
const fotoLocal = fs.existsSync(path.join(process.cwd(), "public/local/foto-profissional.jpeg"));
const crn = process.env.CRN;

export function Sobre() {
  return (
    <section id="sobre" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-16">
      <div className="grid items-center gap-10 md:grid-cols-[280px_1fr]">
        {fotoLocal ? (
          <Image
            src="/local/foto-profissional.jpeg"
            alt="Foto da nutricionista"
            width={560}
            height={700}
            className="aspect-[4/5] w-full max-w-xs rounded-2xl object-cover"
          />
        ) : (
          <div className="flex aspect-[4/5] w-full max-w-xs items-center justify-center rounded-2xl bg-secondary text-center text-sm text-muted-foreground">
            [PLACEHOLDER: foto da profissional]
          </div>
        )}
        <div>
          <h2 className="text-3xl font-bold">Sobre a profissional</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Nutricionista materno-infantil · {crn ? `CRN ${crn}` : "[PLACEHOLDER: CRN]"}
          </p>
          <p className="mt-4 text-muted-foreground">
            [PLACEHOLDER: texto de apresentação, formação e trajetória. Conteúdo a ser fornecido
            pela profissional.]
          </p>
        </div>
      </div>
    </section>
  );
}
