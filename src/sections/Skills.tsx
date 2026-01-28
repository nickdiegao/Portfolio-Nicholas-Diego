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
            <div className="reveal bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 
              transition-all duration-300 ease-out
              hover:-translate-y-[2px]
              hover:shadow-xl
              hover:border-[var(--accent)]
            ">
              <h3 className="font-semibold mb-3">Backend</h3>
              <ul className="text-[var(--text-secondary)] space-y-1">
                <li>Java</li>
                <li>Spring Boot</li>
                <li>APIs REST</li>
                <li>JPA / Hibernate</li>
              </ul>
            </div>

            {/* Frontend */}
            <div className="reveal bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6
              transition-all duration-300 ease-out
              hover:-translate-y-[2px]
              hover:shadow-xl
              hover:border-[var(--accent)]
            ">
              <h3 className="font-semibold mb-3">Frontend</h3>
              <ul className="text-[var(--text-secondary)] space-y-1">
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            {/* Banco de Dados */}
            <div className="reveal bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6
              transition-all duration-300 ease-out
              hover:-translate-y-[2px]
              hover:shadow-xl
              hover:border-[var(--accent)]
            ">
              <h3 className="font-semibold mb-3">Banco de Dados</h3>
              <ul className="text-[var(--text-secondary)] space-y-1">
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>Modelagem relacional</li>
              </ul>
            </div>

            {/* Ferramentas */}
            <div className="reveal bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6
              transition-all duration-300 ease-out
              hover:-translate-y-[2px]
              hover:shadow-xl
              hover:border-[var(--accent)]
            ">
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
       <div className="hidden md:flex w-full justify-center flex-1">
                <div
                  className="
                    relative
                    w-full max-w-md h-80
                    rounded-2xl
                    bg-[var(--bg-surface)]
                    border border-[var(--border-subtle)]
                    p-6
                    overflow-hidden
                    font-mono text-[13px]
                    text-[var(--text-secondary)]
                  "
                >

              {/* GRID QUADRICULADO */}
              <div
                className="
                  absolute inset-0 pointer-events-none opacity-90 
                "
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(148,163,184,0.04) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(148,163,184,0.04) 1px, transparent 1px)
                  `,
                  backgroundSize: "28px 28px",
                }}
              />

              {/* CÓDIGO */}
              <pre className="relative z-10 leading-relaxed opacity-70 right-20">
{`  @Configuration
          @EnableJpaRepositories
                  public class PersistenceConfig {
    
  @Bean
                      DataSource dataSource() {
                      return DataSourceBuilder.create()
                .url(env("DB_URL"))
                      .username(env("DB_USER"))
                      .password(env("DB_PASS"))
      .build();
      }
  }
`}
                </pre>
              </div>
            </div>
        </div>
    </section>
  );
}
