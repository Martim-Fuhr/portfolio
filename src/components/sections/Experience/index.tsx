'use client'

import { ExperienceSection, Descriptions, SvgArrowSpan } from './styles'
import { FaReact, FaLaravel, FaAws } from 'react-icons/fa'
import { BiLogoJavascript, BiLogoSass, BiLogoTypescript } from 'react-icons/bi'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiCsharp } from 'react-icons/si'
import { IoMdArrowDropdownCircle } from 'react-icons/io'
import arezzoSvg from '../../../../public/icons/arezzo.svg'
import facilitaImg from '../../../../public/images/facilita.png'
import logoKedu from '../../../../public/images/logo-kedu.png'
import growdevSvg from '../../../../public/images/icon.webp'
import Accordion from '../../../components/accordion'
import Image from 'next/image'
import { useState } from 'react'

export function Experiences() {
  const [openAccordion, setOpenAccordion] = useState(false)

  const handleAccordionToggle = () => {
    setOpenAccordion(!openAccordion)
  }

  return (
    <ExperienceSection>
      <h2 id="experiencia">Experiência:</h2>
      <div className="exps">
        <Descriptions>
          <div className="accordions">
            <Accordion
              title={
                <>
                  <div className="flex flex-col md:flex-row">
                    <div className="flex items-center justify-center md:w-52">
                      <Image
                        className="flex h-10"
                        src={logoKedu}
                        alt="MF Logo"
                        width="180"
                        height="50"
                      />
                    </div>
                    <div>
                      <p className="exps__title text-center md:text-start">
                        Desenvolvedor FullStack Pleno
                      </p>
                      <p className="exps__company text-center md:text-start">
                        kedu
                      </p>
                      <p className="exps__date text-center md:text-start">
                        10/2024 - o momento
                      </p>
                    </div>
                  </div>
                  <SvgArrowSpan
                    onClick={handleAccordionToggle}
                    className={`flex justify-center p-1 ${
                      openAccordion ? 'rotate-180' : ''
                    }`}
                  >
                    <IoMdArrowDropdownCircle />
                  </SvgArrowSpan>
                </>
              }
            >
              <li>Desenvolvimento de funcionalidades em Angular, TypeScript, React e C#/.NET para uma plataforma
              utilizada por mais de 600 escolas privadas;</li>
              <li>Participação no ciclo de desenvolvimento desde a prototipagem até a entrega de sistemas internos e
              integrações com sistemas de terceiros;</li>
              <li> Implementação de regras de negócio relacionadas a matrículas, turmas e estrutura acadêmica.</li>
              <div>
                <p className="flex text-xl uppercase p-3 justify-center w-full text-center">
                  principais tecnologias utilizadas aqui:
                </p>
                <span className="flex-1 flex flex-row justify-evenly flex-wrap w-full pb-5">
                  <span className="flex flex-col text-sm text-center w-4/12">
                    <FaReact
                      size={100}
                      className="w-full flex justify-center"
                    />
                    <p>ReactJs</p>
                  </span>

                  <span className="flex flex-col text-sm text-center w-4/12">
                    <BiLogoTypescript
                      size={100}
                      className="w-full flex justify-center"
                    />
                    <p>TypeScript</p>
                  </span>

                  <span className="flex flex-col text-sm text-center w-4/12">
                    <SiCsharp
                      size={100}
                      className="w-full flex justify-center"
                    />
                    <p>C#</p>
                  </span>
                </span>
              </div>
              <div>
                <ul>
                  <p className="pb-4 text-lg">Principais entregas:</p>
                  <li>Entrega do APP KEDU MULTI;</li>
                  <li>Fatoração completa do sistema de matrículas;</li>
                  <li>Criação do Painel Administrativo.</li>
                </ul>
              </div>
            </Accordion>
          </div>
        </Descriptions>
      </div>
      <div className="exps">
        <Descriptions>
          <div className="accordions">
            <Accordion
              title={
                <>
                  <div className="flex flex-col md:flex-row">
                    <div className="flex items-center justify-center md:w-52">
                      <Image
                        className="flex h-10"
                        src={facilitaImg}
                        alt="Facilita Logo"
                        width="160"
                        height="50"
                      />
                    </div>
                    <div>
                      <p className="exps__title text-center md:text-start">
                        Desenvolvedor FullStack
                      </p>
                      <p className="exps__company text-center md:text-start">
                        Facilita System
                      </p>
                      <p className="exps__date text-center md:text-start">
                        01/2024 - 07/2024
                      </p>
                    </div>
                  </div>
                  <SvgArrowSpan
                    onClick={handleAccordionToggle}
                    className={`flex justify-center p-1 ${
                      openAccordion ? 'rotate-180' : ''
                    }`}
                  >
                    <IoMdArrowDropdownCircle />
                  </SvgArrowSpan>
                </>
              }
            >
              <li>Automatização de 100% do fluxo de testes do SMSFunnel utilizando Cypress;</li>
              <li>Implementação de melhorias no Call4U, sistema de comunicação por voz e chamadas telefônicas;</li>
              <li>Melhorias de performance, SEO e refatoração de código legado.</li>
              <div>
                <p className="flex text-xl uppercase p-3 justify-center w-full text-center">
                  principais tecnologias utilizadas aqui:
                </p>
                <span className="flex-1 flex flex-row justify-evenly flex-wrap w-full pb-5">
                  <span className="flex flex-col text-sm text-center w-4/12">
                    <FaLaravel
                      size={100}
                      className="w-full flex justify-center"
                    />
                    <p>Lavarel - PHP</p>
                  </span>

                  <span className="flex flex-col text-sm text-center w-4/12">
                    <BiLogoJavascript
                      size={100}
                      className="w-full flex justify-center"
                    />
                    <p>JS - React - Angular</p>
                  </span>

                  <span className="flex flex-col text-sm text-center w-4/12">
                    <FaAws size={100} className="w-full flex justify-center" />
                    <p>AWS Services</p>
                  </span>
                </span>
              </div>
              <div>
                <ul>
                  <p className="pb-4 text-lg">Principais entregas:</p>
                  <li>Validação de Conta com Token via SMS do SMSFunnel;</li>
                  <li>
                    Implementação de Testes Automatizados com Cypress em 100% do SMSFunnel;
                  </li>
                  <li>Entrega do MVP do Picnut.</li>
                </ul>
              </div>
            </Accordion>
          </div>
        </Descriptions>
      </div>
      <div className="exps">
        <Descriptions>
          <div className="accordions">
            <Accordion
              title={
                <>
                  <div className="flex flex-col md:flex-row">
                    <div className="flex items-center justify-center md:w-52">
                      <Image
                        className="flex h-10"
                        src={arezzoSvg}
                        alt="Arezzo Logo"
                        width="80"
                        height="20"
                      />
                    </div>
                    <div>
                      <p className="exps__title text-center md:text-start">
                        Analista Frontend I
                      </p>
                      <p className="exps__company text-center md:text-start">
                        Arezzo&Co
                      </p>
                      <p className="exps__date text-center md:text-start">
                        01/2022 - 03/2023
                      </p>
                    </div>
                  </div>
                  <SvgArrowSpan
                    onClick={handleAccordionToggle}
                    className={`flex justify-center p-1 ${
                      openAccordion ? 'rotate-180' : ''
                    }`}
                  >
                    <IoMdArrowDropdownCircle />
                  </SvgArrowSpan>
                </>
              }
            >
              <li>
                Desenvolvimento e manutenção de interfaces para os e-commerces das marcas Vans, Schutz, Fiever,
                Alexandre Birman e Alexandre Birman Kids;
              </li>
              <li>
                Desenvolvimento de Landing Pages para Vans, Anacapri e Schutz, incluindo HTML, CSS, JavaScript e
                configurações específicas para cada marca;</li>
              <li>
                Implementação de funcionalidades no Gerador de Landing Pages e Blogs utilizado pelas marcas do
                grupo Arezzo&Co;
              </li>
              <li>
                Gerenciamento de Testes AB e Fix’s emergenciais (Google Tag
                Manager, Google Optimize).
              </li>
              <div>
                <p className="flex text-xl uppercase p-3 justify-center w-full text-center">
                  principais tecnologias utilizadas aqui:
                </p>
                <span className="flex-1 flex flex-row justify-evenly flex-wrap w-full pb-5">
                  <span className="flex flex-col text-sm text-center w-4/12">
                    <FaReact
                      size={100}
                      className="w-full flex justify-center"
                    />
                    <p>ReactJs</p>
                  </span>

                  <span className="flex flex-col text-sm text-center w-4/12">
                    <BiLogoTypescript
                      size={100}
                      className="w-full flex justify-center"
                    />
                    <p>TypeScript</p>
                  </span>

                  <span className="flex flex-col text-sm text-center w-4/12">
                    <TbBrandNextjs
                      size={100}
                      className="w-full flex justify-center"
                    />
                    <p>NextJs</p>
                  </span>
                </span>
              </div>
              <div>
                <ul>
                  <p className="pb-4 text-lg">Principais entregas:</p>
                  <li>
                    Criação do hover com video nas páginas de categorias nos
                    sites da companhia;
                  </li>
                  <li>
                    Desenvolvimento do hover de produtos nas vitrines das páginas principais e participação em testes A/B
                    com Google Optimize;
                  </li>
                  <li>
                    Criação e personalização do Gerador de Blog da Companhia
                    para sites de renome como Vans e Schutz.
                  </li>
                </ul>
              </div>
            </Accordion>
          </div>
        </Descriptions>
      </div>
      <div className="exps">
        <Descriptions>
          <div className="accordions">
            <Accordion
              title={
                <>
                  <div className="flex flex-col md:flex-row">
                    <div className="flex items-center justify-center md:w-52 flex-row gap-5">
                      <Image
                        className="flex h-10"
                        src={arezzoSvg}
                        alt="Arezzo Logo"
                        width="80"
                        height="20"
                      />
                      <Image
                        className="flex h-11"
                        src={growdevSvg}
                        alt="Growdev Logo"
                        width="80"
                        height="50"
                      />
                    </div>
                    <div>
                      <p className="exps__title text-center md:text-start">
                        Desenvolvedor Frontend Trainee
                      </p>
                      <p className="exps__company text-center md:text-start">
                        Arezzo&co | GrowDev
                      </p>
                      <p className="exps__date text-center md:text-start">
                        06/2021 - 01/2022
                      </p>
                    </div>
                  </div>
                  <SvgArrowSpan
                    onClick={handleAccordionToggle}
                    className={`flex justify-center p-1 ${
                      openAccordion ? 'rotate-180' : ''
                    }`}
                  >
                    <IoMdArrowDropdownCircle />
                  </SvgArrowSpan>
                </>
              }
            >
              <li>
                Atuação no desenvolvimento do ZZMall, com foco em funcionalidades da plataforma e evolução do
                produto;
              </li>
              <li>Criação de LP&#39;s para datas especiais(Natal, Páscoa, Dia das Mães, Dia dos Pais, etc.)</li>
              <li>Criação de LP&#39;s no BLOG da Companhia.</li>
              <li>Fix&#39;s emergenciais com GTM;</li>
              <li>
                Desenvolvimento e manutenção de funcionalidades utilizando React, JavaScript, TypeScript e tecnologias
                do ecossistema Node.js;
              </li>
              <div>
                <p className="flex text-xl uppercase p-3 justify-center w-full text-center">
                  principais tecnologias utilizadas aqui:
                </p>
                <span className="flex-1 flex flex-row justify-evenly flex-wrap w-full pb-5">
                  <span className="flex flex-col text-sm text-center w-4/12">
                    <FaReact
                      size={100}
                      className="w-full flex justify-center"
                    />
                    <p>ReactJs</p>
                  </span>

                  <span className="flex flex-col text-sm text-center w-4/12">
                    <BiLogoJavascript
                      size={100}
                      className="w-full flex justify-center"
                    />
                    <p>JavaScript</p>
                  </span>

                  <span className="flex flex-col text-sm text-center w-4/12">
                    <BiLogoSass
                      size={100}
                      className="w-full flex justify-center"
                    />
                    <p>SASS</p>
                  </span>
                </span>
              </div>
              <div>
                <ul>
                  <p className="pb-4 text-lg">Principais entregas:</p>
                  <li>
                    Participação no desenvolvimento da primeira versão do ZZPay, solução de cashback da Arezzo&Co, que
                    alcançou aproximadamente R$ 1 milhão em cashback no primeiro ano de lançamento;
                  </li>
                  <li>Refatoração do Menu Mobile e Web do ZZMall</li>
                </ul>
              </div>
            </Accordion>
          </div>
        </Descriptions>
      </div>
    </ExperienceSection>
  )
}

export default Experiences
