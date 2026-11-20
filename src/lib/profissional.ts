import fs from "node:fs";
import path from "node:path";

// Foto e CRN são locais (public/local e .env.local, ambos fora do git).
// Sem eles, a página mostra placeholders.
export const fotoLocal = fs.existsSync(
  path.join(process.cwd(), "public/local/foto-profissional.jpeg"),
);
export const crn = process.env.CRN;
