export default function Header() {
    return (
        <header className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <span className="font-semibold">Nicholas Diego de Lira Veloso</span>
                <nav className="flex gap-6">
                    <a href="#about">Sobre</a>
                    <a href="#projects">Projetos</a>
                    <a href="#contact">Contato</a>
                </nav>
            </div>
        </header>
    )
}