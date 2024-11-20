import { CardProject } from "../components/CardProject";

export function MainPage() {
  return (
    <section>
      <h1>Projects</h1>
      <div className="grid grid-cols-2 gap-5">
        <CardProject />
        <CardProject />
        <CardProject />
      </div>
    </section>
  );
}
