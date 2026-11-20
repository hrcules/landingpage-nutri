"use server";

export type ContatoState = { ok: boolean; message: string } | null;

// Envio SIMULADO: nenhum dado é enviado ou armazenado nesta fase.
export async function enviarContato(
  _prev: ContatoState,
  formData: FormData,
): Promise<ContatoState> {
  const nome = String(formData.get("nome") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const mensagem = String(formData.get("mensagem") ?? "").trim();
  if (!nome || !email.includes("@") || !mensagem) {
    return { ok: false, message: "Preencha nome, e-mail válido e mensagem." };
  }
  await new Promise((r) => setTimeout(r, 600));
  return {
    ok: true,
    message:
      "Envio simulado: esta é uma versão de demonstração e sua mensagem não foi enviada.",
  };
}
