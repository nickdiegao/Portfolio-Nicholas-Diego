import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Header() {

  function scrollToSection(
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) {
    e.preventDefault();

    gsap.to(window, {
      duration: 0.8,
      ease: "power2.out",
      scrollTo: {
        y: `#${id}`,
        offsetY: 96, // altura do header
      },
      onComplete: () => {
        ScrollTrigger.refresh();
      },
    });
  }

  return (
    <header className="
      w-full fixed top-0 left-0 z-50
      bg-[rgba(11,15,20,0.8)]
      backdrop-blur-md
      border-b border-[var(--border-subtle)]
    ">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-semibold">
          Nicholas Diego de Lira Veloso
        </span>

        <nav className="hidden md:flex gap-6 text-sm">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="hover:text-[var(--accent)] transition-colors duration-200"
          >
            Sobre
          </a>

          <a
            href="#skills"
            onClick={(e) => scrollToSection(e, "skills")}
            className="hover:text-[var(--accent)] transition-colors duration-200"
          >
            Habilidades
          </a>

          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, "projects")}
            className="hover:text-[var(--accent)] transition-colors duration-200"
          >
            Projetos
          </a>

          <a
            href="#experience"
            onClick={(e) => scrollToSection(e, "experience")}
            className="hover:text-[var(--accent)] transition-colors duration-200"
          >
            Experiência
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="hover:text-[var(--accent)] transition-colors duration-200"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
