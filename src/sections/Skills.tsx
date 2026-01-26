import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const items = contentRef.current?.querySelectorAll(".reveal");
      if (!items || items.length === 0) return;

      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}   
      id="skills"
      className="py-24 scroll-mt-24"
    >
      <div ref={contentRef} className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Conteúdo */}
        <div>
          <h2 className="reveal text-3xl md:text-4xl font-bold mb-12">
            Skills
          </h2>

          <div className="grid gap-6">
            {/* Backend */}
            <div className="reveal bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6">
              <h3 className="font-semibold mb-3">Backend</h3>
              <ul className="text-[var(--text-secondary)] space-y-1">
                <li>Java</li>
                <li>Spring Boot</li>
                <li>APIs REST</li>
                <li>JPA / Hibernate</li>
              </ul>
            </div>

            {/* Frontend */}
            <div className="reveal bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6">
              <h3 className="font-semibold mb-3">Frontend</h3>
              <ul className="text-[var(--text-secondary)] space-y-1">
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            {/* Banco de Dados */}
            <div className="reveal bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6">
              <h3 className="font-semibold mb-3">Banco de Dados</h3>
              <ul className="text-[var(--text-secondary)] space-y-1">
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>Modelagem relacional</li>
              </ul>
            </div>

            {/* Ferramentas */}
            <div className="reveal bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6">
              <h3 className="font-semibold mb-3">Ferramentas & Conceitos</h3>
              <ul className="text-[var(--text-secondary)] space-y-1">
                <li>AWS (EC2, RDS)</li>
                <li>Git / GitHub</li>
                <li>Linux</li>
                <li>Boas práticas de código</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quadro visual */}
        <div className="reveal">
          <div
            className="
              relative w-full h-96
              rounded-2xl
              bg-gradient-to-br from-[#0b1220] to-[#111827]
              border border-[var(--border-subtle)]
              overflow-hidden
            "
          >
            {/* Grid sutil */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />

            {/* Hint técnico */}
            <div className="absolute bottom-6 left-6 right-6 font-mono text-xs text-white/30 leading-relaxed">
              class SkillEngine &#123;<br />
              &nbsp;&nbsp;build(scale) &#123; ... &#125;<br />
              &#125;
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
