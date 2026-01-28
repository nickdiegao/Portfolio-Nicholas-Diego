import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Header() {

  function scrollToSection(
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    id: string
  ) {
    e.preventDefault();

    gsap.to(window, {
      duration: 0.8,
      ease: "power2.out",
      scrollTo: {
        y: `#${id}`,
        offsetY: 96,
      },
      onComplete: () => {
        ScrollTrigger.refresh();
      },
    });
  }

  return (
    <header className="
      w-full fixed top-0 left-0 z-50
      bg-[var(--bg-surface)]
      backdrop-blur-md
      border-b border-[var(--border-subtle)]
    ">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Nome */}
        <span className="font-semibold">
          Nicholas Diego de Lira Veloso
        </span>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="hover:text-[var(--text-secondary)] transition-colors duration-200"
          >
            Sobre
          </a>
          <a
            href="#skills"
            onClick={(e) => scrollToSection(e, "skills")}
            className="hover:text-[var(--text-secondary)] transition-colors duration-200"
          >
            Habilidades
          </a>


          <a
            href="#experience"
            onClick={(e) => scrollToSection(e, "experience")}
            className="hover:text-[var(--text-secondary)] transition-colors duration-200"
          >
            Experiência
          </a>

          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, "projects")}
            className="hover:text-[var(--text-secondary)] transition-colors duration-200"
          >
            Projetos
          </a>
          
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="hover:text-[var(--text-secondary)] transition-colors duration-200"
          >
            Contato
          </a>
        </nav>

        {/* Mobile CTA */}
        <div className="md:hidden">
          <button
            onClick={(e) => scrollToSection(e, "contact")}
            className="
              px-4 py-2 rounded-md
              bg-[var(--accent)]
              text-black text-sm font-medium
              focus:outline-none focus-visible:ring-2
              focus-visible:ring-[var(--text-secondary)]
            "
          >
            Contato
          </button>
        </div>
      </div>
    </header>
  );
}
