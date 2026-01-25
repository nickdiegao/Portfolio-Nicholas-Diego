export default function Hero() {
    return (
        <section className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            {/* Texto */}
            <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                Nicholas Diego
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] mb-8 max-w-xl">
                Desenvolvedor Backend com foco em Java e Spring Boot,
                construindo soluções modernas e escaláveis.
            </h2>

            <p className="text-sm text-[var(--text-secondary)] mb-10">
                Java • Spring Boot • PostgreSQL • React • Tailwind CSS
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <a
                href="#projects"
                className="
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
            <div className="hidden md:block">
            <div
                className="
                w-full h-80
                rounded-2xl
                bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-muted)]
                border border-[var(--border-subtle)]
                "
            />
            </div>

        </div>
        </section>
    )
}
