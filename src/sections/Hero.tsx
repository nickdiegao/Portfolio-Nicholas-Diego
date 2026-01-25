export function Hero() {
    return (
        <section className="min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                    Nicholas Diego de Lira Veloso
                </h1>

                <h2 className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] mb-6 max-w-2xl">
                    Desenvolvedor Backend com foco em Java e Spring Boot, contruindo soluções modernas e escaláveis.
                </h2>

                <p className="text-gray-500 mb-10">
                    Java • Spring Boot • PostgreSQL • React • Tailwind CSS
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                        href="https://github.com/nickdiegao"
                        target="_blank"
                        className="
                            px-6 py-3 rounded-md
                            bg-[var(--color-primary)] text-white font-medium
                            hover:opacity-90
                            transition-opacity duration-200
                        "
                    >
                        GitHub
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/nicholas-diego/"
                        target="_blank"
                        className="px-6 py-3 rounded-md bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition-colors duration-200"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    ); 
}

export default Hero;