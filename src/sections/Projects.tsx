import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);

    gsap.set(".reveal", { opacity: 0, y: 20 });

    gsap.to(".reveal", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.08,
    scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
    },
    });

    return (
        <section id="projects" className="py-24 bg-[var(--bg-muted)]">
            <div className="reveal max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Projetos
                </h2>

                <div className="reveal grid md:grid-cols-2 gap-12">
                    {/* ecoEduca */}
                    <div className="
                        reveal
                        bg-[var(--bg-surface)]
                        border border-[var(--border-subtle)]
                        rounded-2xl
                        p-8
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:shadow-2xl
                        ">
                        <h3 className="text-xl font-semibold mb-3">
                            ecoEduca
                        </h3>

                        <p className="text-[var(--text-secondary)] mb-4">
                            Aplicação voltada à educação ambiental, com foco em conscientização e descarte correto
                            de resíduos. O projeto possui backend em Java com Spring Boot, banco de dados relacional
                            e deploy em nuvem utilizando serviços da AWS.
                        </p>

                        <p className="text-sm text-[var(--text-secondary)] mb-6">
                            Java • Spring Boot • MySQL • AWS (EC2, RDS)
                        </p>

                        <div className="mt-6 pt-4 border-t border-[var(--border-subtle)]">
                            <a
                                href="https://github.com/nickdiegao/ecoeduca"
                                target="_blank"
                                className="font-medium text-[var(--accent)] hover:underline transition-colors duration-200"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>

                    {/*Portfolio*/}
                    <div className="
                            reveal
                            bg-[var(--bg-surface)]
                            border border-[var(--border-subtle)]
                            rounded-2xl
                            p-8
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:shadow-2xl
                        ">
                        <h3 className="text-xl font-semibold mb-3">
                            Portfólio Pessoal
                        </h3>

                        <p className="text-[var(--text-secondary)] mb-4">
                            Portfólio pessoal desenvolvido como landing-page, com foco em clareza, organização
                            e apresentação profissional. Projeto construído em React com TypeScript e Tailwind CSS.
                        </p>

                        <p className="text-sm text-[var(--text-secondary)] mb-6">
                            React • TypeScript • Tailwind CSS
                        </p>

                        <div className="mt-6 pt-4 border-t border-[var(--border-subtle)]">
                            <a
                                href="https://github.com/nickdiegao/Portfolio-Nicholas-Diego"
                                target="_blank"
                                className="font-medium text-[var(--accent)] hover:underline transition-colors duration-200"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ); 
}
