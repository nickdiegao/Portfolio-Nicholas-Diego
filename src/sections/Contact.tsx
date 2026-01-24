export function Contact() {
    return (
        <section id="contact" className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Contato
                </h2>

                <p className="text-gray-600 mb-10 max-w-2xl">
                    Fique à vontade para entrar em contato comigo para oportunidades,
                    projetos ou conversas sobre tecnologia.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                    <a
                        href="mailto:nickdiegao@gmail.com"
                        className="px-6 py-3 rounded-md border border-gray-300 font-medium text-center hover:bg-gray-100 transition-colors duration-200"
                    >
                        E-mail
                    </a>

                    <a
                        href="https://www.linkedin.com/in/nicholas-diego/"
                        target="_blank"
                        className="px-6 py-3 rounded-md border border-gray-300 font-medium text-center hover:bg-gray-100 transition-colors duration-200"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/nickdiegao"
                        target="_blank"
                        className="
                        px-6 py-3 rounded-md
                        border border-gray-300
                        hover:bg-gray-100
                        transition-colors duration-200
                    "
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    ); 
}

export default Contact;