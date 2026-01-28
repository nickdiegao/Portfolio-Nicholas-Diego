export default function Footer() {
    return (
        <footer className="border-t border-[var(--border-subtle)]">
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="text-center md:text-left">
                    <p className="text-sm font-semibold">
                        Nicholas Diego
                    </p>
                    <p className="text-sm text-[var(--text-secondary)]">
                        Desenvolvedor Backend • Java & Spring Boot
                    </p>
                </div>

                <div className="flex gap-6 text-sm">
                    <a
                        href="https://github.com/nickdiegao"
                        target="_blank"
                        className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nicholas-diego/"
                        target="_blank"
                        className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                        rel="noopener noreferrer"
                    >
                        Linkedin
                    </a>
                </div>
            </div>

            <div className="text-center text-xs text-[var(--text-secondary)] pb-6">
                   © {new Date().getFullYear()} Nicholas Diego. Todos os direitos reservados.
            </div>

        </footer>
    )
}
