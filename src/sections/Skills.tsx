export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[var(--bg-muted)]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Skills
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Backend */}
          <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Backend</h3>
            <ul className="space-y-2 text-[var(--text-secondary)]">
              <li>Java</li>
              <li>Spring Boot</li>
              <li>APIs REST</li>
              <li>JPA / Hibernate</li>
            </ul>
          </div>

          {/* Banco */}
          <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Banco de Dados</h3>
            <ul className="space-y-2 text-[var(--text-secondary)]">
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>Modelagem relacional</li>
            </ul>
          </div>

          {/* Frontend */}
          <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <ul className="space-y-2 text-[var(--text-secondary)]">
              <li>React</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML / CSS</li>
            </ul>
          </div>

          {/* Ferramentas */}
          <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Ferramentas & Conceitos</h3>
            <ul className="space-y-2 text-[var(--text-secondary)]">
              <li>Git / GitHub</li>
              <li>Linux</li>
              <li>AWS (EC2, RDS)</li>
              <li>Boas práticas de código</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}