import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLHeadingElement>(null);
    const metaRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLSpanElement>(null);

    useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;
        
    let ctx = gsap.context(() => {
        gsap.set(
        [
            titleRef.current,
            subtitleRef.current,
            metaRef.current,
            ctaRef.current,
            visualRef.current,
        ],
        { opacity: 0, y: 12 }
        );

        gsap.timeline({ defaults: { ease: "power2.out" } })
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.6 })
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .to(metaRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.25")
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.2")
        .to(
            visualRef.current,
            { opacity: 1, y: 0, scale: 1, duration: 0.6 },
            "-=0.4"
        );
    }, containerRef);


    return () => {
                ctx.revert(); // <-- ESSENCIAL
            };
            }, []);

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
        <section className="min-h-screen flex items-center pt-28">
        <div
            ref={containerRef}
            className="
                max-w-6xl mx-auto px-6
                flex flex-col md:flex-row
                items-center
                gap-16
            "
        >
            {/* Texto */}
            <div className="w-full md:w-1/2">
            <h1
                ref={titleRef}
                className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
            >
                Olá, sou Nicholas Diego
            </h1>

            <h2
                ref={subtitleRef}
                className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] mb-8 max-w-xl"
            >
                Apaixonado por programação, com foco em desenvolvimento back-end e experiência em Java e Spring.
            </h2>

            <p
                ref={metaRef}
                className="text-sm text-[var(--text-secondary)] mb-10"
            >
                Java • Spring Boot • PostgreSQL • React • Tailwind CSS
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
                <a
                onClick={(e) => scrollToSection(e, "projects")}
                className="
                    w-full sm:w-auto
                    px-8 py-4 rounded-lg
                    bg-[var(--accent)] text-black font-semibold
                    hover:opacity-90
                    transition-opacity duration-300
                "
                >
                Ver Projetos
                </a>

                <a
                href="https://github.com/nickdiegao"
                target="_blank"
                className="
                    w-full sm:w-auto
                    px-8 py-4 rounded-lg
                    border border-[var(--border-subtle)]
                    hover:bg-[var(--bg-surface)]
                    transition-colors duration-300
                "
                >
                GitHub
                </a>
            </div>
            </div>

            {/* Bloco visual */}
            <div
            ref={visualRef}
            className="
                w-full max-w-md h-80
                rounded-2xl
                bg-[var(--bg-surface)]
                border border-[var(--border-subtle)]
                p-6
                relative overflow-hidden
                font-mono text-[13px]
                text-[var(--text-secondary)]
                animate-float
                hidden md:block
            "
            >
            {/* GRID LAYER */}
            <div
                ref={gridRef}
                className="absolute -inset-12 pointer-events-none"
                style={{
                backgroundImage: `
                    linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)
                `,
                backgroundSize: "24px 24px",
                }}
            />

            {/* CÓDIGO */}
                <pre className="relative z-10 leading-relaxed right-20">
{`
    @Service
                        public class PortfolioService {

                    public Solution buildSolution(Scale scale) {
                        return Solution.builder()
                            .cleanArchitecture(true)
                    .scalable(true)
                            .maintainable(true)
                            .cloudReady(true)
                            .build();
                }
                }`}
                <span className="ml-1 inline-block animate-caret">|</span>
                </pre>
            </div>
        </div>
    </section>
  );
}