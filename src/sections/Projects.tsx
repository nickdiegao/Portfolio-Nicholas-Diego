export function Projects() {
    return (
        <section id="projects" className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Projetos
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* ecoEduca */}
                    <div className="border rounded-lg p-6 bg-white">
                        <h3 className="text-xl font-semibold mb-3">
                            ecoEduca
                        </h3>

                        <p className="text-gray-600 mb-4">
                            Aplicação voltada à educação ambiental, com foco em conscientização e descarte correto
                            de resíduos. O projeto possui backend em Java com Spring Boot, banco de dados relacional
                            e deploy em nuvem utilizando serviços da AWS.
                        </p>

                        <p className="text-sm text-gray-500 mb-6">
                            Java • Spring Boot • MySQL • AWS (EC2, RDS)
                        </p>

                        <div className="flex gap-4">
                            <a 
                            href="https://github.com/nickdiegao/ecoeduca"
                            target="_blank"
                            className="font-medium text-[var(--color-primary)] hover:underline"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>

                    {/*Portfolio*/}
                    <div className="border rounded-lg p-6 bg-white">
                        <h3 className="text-xl font-semibold mb-3">
                            Portfólio Pessoal
                        </h3>

                        <p className="text-gray-600 mb-4">
                            Portfólio pessoal desenvolvido como landing-page, com foco em clareza, organização
                            e apresentação profissional. Projeto construído em React com TypeScript e Tailwind CSS.
                        </p>

                        <p className="text-sm text-gray-500 mb-6">
                            React • TypeScript • Tailwind CSS
                        </p>

                        <div className="flex gap-4">
                            <a 
                            href="https://github.com/nickdiegao/Portfolio-Nicholas-Diego"
                            target="_blank"
                            className="font-medium text-[var(--color-primary)] hover:underline"
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

export default Projects;