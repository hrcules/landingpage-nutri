import { redirect } from "next/navigation";

// Fallback: a raiz é reescrita para /index.html no next.config.ts.
export default function Home() {
  redirect("/index.html");
}
