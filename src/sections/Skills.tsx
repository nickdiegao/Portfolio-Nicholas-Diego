export function Skills() {
    return (
        <section id="skills" className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12">
                    Skills
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Backend */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Backend</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>Java</li>
                            <li>Spring Boot</li>
                            <li>APIs Rest</li>
                            <li>JPA / Hibernate</li>
                        </ul>
                    </div>

                    {/* Banco de Dados */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Banco de Dados</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>PostgreSQL</li>
                            <li>MySQL</li>  
                            <li>MongoDB</li>
                            <li>Spring SQL</li>
                        </ul>
                    </div>

                    {/* Frontend */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>React</li>
                            <li>TypeScript</li>
                            <li>Tailwind CSS</li>
                            <li>HTML / CSS</li>
                        </ul>
                    </div>

                    {/* Ferramentas */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Ferramentas</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>Git / GitHub</li>
                            <li>Docker</li>
                            <li>AWS (EC2, RDS)</li>
                            <li>Boas Práticas de Código</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    ); 
}

export default Skills;