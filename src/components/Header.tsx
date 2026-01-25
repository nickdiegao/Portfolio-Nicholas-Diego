export default function Header() {
    return (
        <header className="
            w-full fixed top-0 left-0 z-50
            bg-[rgba(11,15,20,0.8)]
            backdrop-blur-md
            border-b border-[var(--border-subtle)]
            ">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <span className="font-semibold">
                    Nicholas Diego de Lira Veloso
                </span>

                <nav className="hidden md:flex gap-6 text-sm">
                    <a href="#about" className="hover:text-[var(--color-primary)] transition">
                        Sobre
                    </a>
                    <a href="#skills" className="hover:text-[var(--color-primary)] transition">
                        Habilidades
                    </a>
                    <a href="#projects" className="hover:text-[var(--color-primary)] transition">
                        Projetos
                    </a>
                    <a href="#contact" className="hover:text-[var(--color-primary)] transition">
                        Contato
                    </a>
                    <a href="#experience" className="hover:text-[var(--color-primary)] transition">
                        Experiência
                    </a>
                </nav>
            </div>
        </header>
    )
}