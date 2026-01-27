export default function Contact() {
    return (
        <section id="contact" className="py-24 scroll-mt-24">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Contato
                </h2>

                <p className="text-[var(--text-secondary)] mb-10 max-w-2xl">
                    Fique à vontade para entrar em contato comigo para oportunidades,
                    projetos ou conversas sobre tecnologia.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="mailto:nickdiegao@gmail.com"
                        className="px-6 py-3 rounded-md border border-[var(--border-subtle)]"
                    >
                        E-mail
                    </a>

                    <a
                        href="https://www.linkedin.com/in/nicholas-diego/"
                        target="_blank"
                        className="px-6 py-3 rounded-md border border-[var(--border-subtle)]"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/nickdiegao"
                        target="_blank"
                        className="px-6 py-3 rounded-md border border-[var(--border-subtle)]"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    ); 
}