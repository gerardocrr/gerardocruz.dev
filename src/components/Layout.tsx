import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div className="container max-w-4xl mx-auto flex flex-col min-h-screen">
      <header className="bg-red-500">header</header>
      <main className="flex-grow">{children}</main>
      <footer>footer</footer>
    </div>
  );
}
