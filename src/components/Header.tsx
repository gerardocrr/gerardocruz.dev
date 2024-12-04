import LinkedIn from "../icons/Linkedin";
import Github from "../icons/Github";
import X from "../icons/X";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="flex justify-between mt-10">
      <h1 className="font-bold">gerardocruz.dev</h1>
      <div className="flex items-center gap-2">
        <a
          className={buttonVariants({
            variant: "ghost",
            size: "icon",
          })}
          href="https://www.linkedin.com/in/gerardo-cruz-9903a3266/"
          target="_blank"
        >
          <LinkedIn />
        </a>
        <a
          className={buttonVariants({
            variant: "ghost",
            size: "icon",
          })}
          href="https://github.com/gerardocrr"
          target="_blank"
        >
          <Github />
        </a>
        <a
          className={buttonVariants({
            variant: "ghost",
            size: "icon",
          })}
          href="https://x.com/gerardocrrr"
          target="_blank"
        >
          <X />
        </a>
        <ModeToggle />
      </div>
    </header>
  );
}
