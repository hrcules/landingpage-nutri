"use client";

import { useActionState } from "react";
import { enviarContato, type ContatoState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function Contato() {
  const [state, action, pending] = useActionState<ContatoState, FormData>(enviarContato, null);
  return (
    <section id="contato" className="scroll-mt-16 bg-secondary">
      <div className="mx-auto max-w-2xl px-4 py-16">
        <h2 className="text-3xl font-bold">Vamos conversar?</h2>
        <p className="mt-3 text-muted-foreground">
          Conte um pouco sobre a sua criança e as suas dúvidas. A primeira conversa ajuda a
          entender se o acompanhamento faz sentido para vocês.
        </p>
        <form action={action} className="mt-8 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome</Label>
            <Input id="nome" name="nome" required autoComplete="name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" name="email" type="email" required autoComplete="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone/WhatsApp</Label>
            <Input id="telefone" name="telefone" type="tel" autoComplete="tel" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mensagem">Mensagem</Label>
            <Textarea id="mensagem" name="mensagem" rows={5} required />
          </div>
          <Button type="submit" disabled={pending}>
            {pending ? "Enviando..." : "Enviar mensagem"}
          </Button>
          {state && (
            <p
              role="status"
              className={state.ok ? "text-sm text-primary" : "text-sm text-destructive"}
            >
              {state.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
