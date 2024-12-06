import { ReactNode } from "react";
import { Header } from "./Header";

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div className="container max-w-4xl mx-auto flex flex-col min-h-screen sm:container">
      <Header />
      <main className="flex-grow">{children}</main>
      <footer>footer</footer>
    </div>
  );
}
