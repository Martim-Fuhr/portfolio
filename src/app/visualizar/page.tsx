'use client'

import Link from 'next/link'

export default function VisualizarCurriculoPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 py-10 px-4 sm:px-8 print:bg-white print:text-black print:py-0 mt-20">
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between print:hidden">
        <Link
          href="/"
          className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
        >
          ← Voltar ao portfólio
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 text-sm bg-neutral-800 hover:bg-neutral-700 text-white rounded-full transition-colors cursor-pointer"
          >
            Imprimir / Salvar PDF
          </button>
          <a
            href="/files/Curriculo-Martim.pdf"
            download="Curriculo-Martim.pdf"
            className="px-4 py-2 text-sm bg-blue-800 hover:bg-blue-600 text-white rounded-full transition-colors"
          >
            Baixar PDF Original
          </a>
        </div>
      </div>

      {/* Folha do Currículo */}
      <article className="max-w-4xl mx-auto bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-12 shadow-2xl print:shadow-none print:border-none print:bg-white print:p-0">
        {/* Cabeçalho */}
        <header className="border-b border-neutral-800 pb-6 mb-8 print:border-neutral-300">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white print:text-black">
            MARTIM FUHR
          </h1>
          <p className="text-blue-400 font-semibold text-sm sm:text-base mt-1 tracking-wide print:text-blue-800">
            DESENVOLVEDOR FULL STACK PLENO | ANGULAR • C#.NET • REACT • TYPESCRIPT
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-neutral-400 mt-4 print:text-neutral-700">
            <span>📍 Sapiranga/RS</span>
            <span>📱 (51) 99598-7124</span>
            <a
              href="mailto:martimfuhr@hotmail.com"
              className="hover:text-white transition-colors"
            >
              ✉️ martimfuhr@hotmail.com
            </a>
            <a
              href="https://linkedin.com/in/martim-fuhr/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors underline underline-offset-2"
            >
              LinkedIn
            </a>
            <a
              href="https://martim-fuhr.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors underline underline-offset-2"
            >
              Portfólio
            </a>
          </div>
        </header>

        {/* Resumo */}
        <section className="mb-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 print:text-blue-800">
            Resumo Profissional
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed print:text-neutral-800">
            Desenvolvedor Full Stack com mais de 4 anos de experiência no desenvolvimento de
            aplicações web, atuando principalmente com Angular, TypeScript, C#, .NET, React,
            Next.js e GraphQL. Participação completa no ciclo de produtos — da prototipagem à
            implementação, testes e manutenção em produção. Experiência sólida em e-commerce,
            educação, pagamentos e comunicação, incluindo projetos para a Arezzo&Co e plataforma
            utilizada por mais de 600 escolas.
          </p>
        </section>

        {/* Experiência Profissional */}
        <section className="mb-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-5 print:text-blue-800">
            Experiência Profissional
          </h2>

          <div className="space-y-6">
            {/* Kedu Tech */}
            <div className="relative pl-4 border-l-2 border-blue-700">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-bold text-white print:text-black">
                  Kedu Tech — <span className="font-normal text-neutral-300 print:text-neutral-700">Desenvolvedor Full Stack Pleno</span>
                </h3>
                <span className="text-xs font-medium text-neutral-400 print:text-neutral-600">
                  10/2024 – Atual
                </span>
              </div>
              <ul className="list-disc list-inside text-sm text-neutral-300 mt-2 space-y-1.5 print:text-neutral-800">
                <li>Desenvolvimento de funcionalidades em Angular, TypeScript, React e C#/.NET para plataforma utilizada por mais de 600 escolas.</li>
                <li>Participação desde a prototipagem até entregas de sistemas internos e integrações com terceiros.</li>
                <li>Implementação de regras de negócio para matrículas, turmas e estrutura acadêmica.</li>
                <li>Correção de gargalos de performance e bugs críticos em produção seguindo Git Flow e Code Review.</li>
              </ul>
            </div>

            {/* Facilita System */}
            <div className="relative pl-4 border-l-2 border-neutral-700">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-bold text-white print:text-black">
                  Facilita System — <span className="font-normal text-neutral-300 print:text-neutral-700">Desenvolvedor Full Stack</span>
                </h3>
                <span className="text-xs font-medium text-neutral-400 print:text-neutral-600">
                  01/2024 – 07/2024
                </span>
              </div>
              <ul className="list-disc list-inside text-sm text-neutral-300 mt-2 space-y-1.5 print:text-neutral-800">
                <li>Automatização de 100% do fluxo de testes do SMSFunnel utilizando Cypress.</li>
                <li>Desenvolvimento de validação de contas via SMS e dashboard de monitoramento diário.</li>
                <li>Evolução do Call4U (sistema de comunicação por voz) e features em Angular, PHP e Laravel.</li>
                <li>Melhorias de performance, SEO e refatoração de código legado.</li>
              </ul>
            </div>

            {/* Arezzo&Co */}
            <div className="relative pl-4 border-l-2 border-neutral-700">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-bold text-white print:text-black">
                  Arezzo&Co — <span className="font-normal text-neutral-300 print:text-neutral-700">Analista Frontend</span>
                </h3>
                <span className="text-xs font-medium text-neutral-400 print:text-neutral-600">
                  01/2022 – 03/2023
                </span>
              </div>
              <ul className="list-disc list-inside text-sm text-neutral-300 mt-2 space-y-1.5 print:text-neutral-800">
                <li>Desenvolvimento e manutenção dos e-commerces Vans, Schutz, Fiever, Alexandre Birman e ZZMall.</li>
                <li>Criação de Landing Pages e evolução do Gerador de Landing Pages e Blogs do grupo.</li>
                <li>Implementação de vitrines interativas e testes A/B com Google Optimize.</li>
                <li>Atuação com React, Next.js, TypeScript e Styled Components com foco em SEO e performance.</li>
              </ul>
            </div>

            {/* Growdev */}
            <div className="relative pl-4 border-l-2 border-neutral-700">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-bold text-white print:text-black">
                  Growdev (alocado em Arezzo&Co) — <span className="font-normal text-neutral-300 print:text-neutral-700">Desenvolvedor Full Stack</span>
                </h3>
                <span className="text-xs font-medium text-neutral-400 print:text-neutral-600">
                  06/2021 – 01/2022
                </span>
              </div>
              <ul className="list-disc list-inside text-sm text-neutral-300 mt-2 space-y-1.5 print:text-neutral-800">
                <li>Desenvolvimento de funcionalidades na plataforma ZZMall utilizando React, TypeScript e Node.js.</li>
                <li>Participação na primeira versão do ZZPay (solução de cashback que alcançou ~R$ 1 milhão no primeiro ano).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Habilidades Técnicas */}
        <section className="mb-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4 print:text-blue-800">
            Habilidades Técnicas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="bg-neutral-800/60 p-3 rounded-lg print:bg-neutral-100">
              <span className="font-semibold text-white block mb-1 print:text-black">Frontend</span>
              <span className="text-neutral-300 print:text-neutral-800">
                Angular, React, Next.js, TypeScript, JavaScript, Blazor, Styled Components, Tailwind CSS
              </span>
            </div>
            <div className="bg-neutral-800/60 p-3 rounded-lg print:bg-neutral-100">
              <span className="font-semibold text-white block mb-1 print:text-black">Backend & APIs</span>
              <span className="text-neutral-300 print:text-neutral-800">
                C#, .NET, Node.js, PHP, Laravel, GraphQL
              </span>
            </div>
            <div className="bg-neutral-800/60 p-3 rounded-lg print:bg-neutral-100">
              <span className="font-semibold text-white block mb-1 print:text-black">Banco de Dados</span>
              <span className="text-neutral-300 print:text-neutral-800">
                PostgreSQL, MySQL, Redis
              </span>
            </div>
            <div className="bg-neutral-800/60 p-3 rounded-lg print:bg-neutral-100">
              <span className="font-semibold text-white block mb-1 print:text-black">DevOps, Testes & Ferramentas</span>
              <span className="text-neutral-300 print:text-neutral-800">
                Git, GitHub, Azure DevOps, Docker, Azure, Cypress, GTM, Google Optimize
              </span>
            </div>
          </div>
        </section>

        {/* Formação Acadêmica */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4 print:text-blue-800">
            Formação Acadêmica
          </h2>
          <div className="space-y-3 text-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div>
                <p className="font-semibold text-white print:text-black">
                  Gestão de Tecnologia da Informação (Tecnólogo)
                </p>
                <p className="text-neutral-400 print:text-neutral-700">
                  Universidade do Vale do Rio dos Sinos (UNISINOS)
                </p>
              </div>
              <span className="text-neutral-400 text-xs sm:text-sm">2022 – 2026</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div>
                <p className="font-semibold text-white print:text-black">
                  Bootcamp de Programação Full Stack
                </p>
                <p className="text-neutral-400 print:text-neutral-700">Growdev</p>
              </div>
              <span className="text-neutral-400 text-xs sm:text-sm">2020 – 2021</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div>
                <p className="font-semibold text-white print:text-black">
                  Curso Técnico em Informática
                </p>
                <p className="text-neutral-400 print:text-neutral-700">
                  Centro Sinodal de Sapiranga
                </p>
              </div>
              <span className="text-neutral-400 text-xs sm:text-sm">2015 – 2016</span>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}