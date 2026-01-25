import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.set(contentRef.current, { opacity: 0, y: 24 });
      
      gsap.to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []); 

  return (
    <section ref={sectionRef} id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Foto */}
        <div 
          className="flex justify-center md:justify-start"
          ref={contentRef}
        >
          <img
            src="/profile.jpeg"
            alt="Nicholas Diego"
            className="
              w-64 h-64 object-cover
              rounded-2xl
              border border-[var(--border-subtle)]
            "
          />
        </div>

        {/* Texto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sobre mim
          </h2>

          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            Sou formado em Análise e Desenvolvimento de Sistemas e Técnico em Informática,
            com atuação na área de tecnologia e foco em desenvolvimento backend.
          </p>

          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            Tenho experiência em ambientes corporativos, suporte técnico e sistemas em produção,
            o que me proporcionou uma visão prática e orientada à qualidade.
          </p>

          <p className="text-[var(--text-secondary)] leading-relaxed">
            Atualmente, meu foco é o desenvolvimento backend com Java e Spring Boot,
            buscando evoluir em arquitetura de software e sistemas escaláveis.
          </p>
        </div>

      </div>
    </section>
  )
}
