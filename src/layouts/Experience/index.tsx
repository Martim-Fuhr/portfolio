'use client'

import { ExperienceSection, Descriptions, SvgArrowSpan } from './styles'
import { FaReact, FaLaravel, FaAws } from 'react-icons/fa'
import { BiLogoJavascript, BiLogoSass, BiLogoTypescript } from 'react-icons/bi'
import { TbBrandNextjs } from 'react-icons/tb'
import { IoMdArrowDropdownCircle } from 'react-icons/io'
import arezzoSvg from '../../../public/icons/arezzo.svg'
import facilitaImg from '../../../public/images/facilita.png'
import growdevSvg from '../../../public/images/icon.webp'
import Accordion from '../../components/accordion'
import Image from 'next/image'
import { useState } from 'react'

export function Experiences() {
  const [openAccordion, setOpenAccordion] = useState(false)

  const handleAccordionToggle = () => {
    setOpenAccordion(!openAccordion)
  }

  return (
    <ExperienceSection>
      <h2 id="experience">Experience</h2>
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
                        01/2024 - Até o momento
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
              <li>Implementação de novas funcionalidades;</li>
              <li>Automação de testes;</li>
              <li>Correção de Bugs;</li>
              <li>Fatoração de códigos legados.</li>
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
                  <li>Validação de Conta com Token via SMS do SMSFunnel</li>
                  <li>
                    Implementação de Testes Automatizados com Cypress no
                    SMSFunnel
                  </li>
                  <li>Entrega do MVP do Picnut</li>
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
                        alt="Facilita Logo"
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
                Implementação de novas funcionalidades nos sites da companhia;
              </li>
              <li>Criação de Landing Pages;</li>
              <li>
                Implementação de novas ferramentas e funcionalidades no Gerador
                de Landings Pages & Blogs da companhia;
              </li>
              <li>Correções de bugs;</li>
              <li>Melhorias de SEO;</li>
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
                    Criação do Hover Com Video nas Páginas de Categorias nos
                    sites da companhia
                  </li>
                  <li>
                    Criação do Hover com Imagens nas Páginas de Categoria nos
                    sites da companhia
                  </li>
                  <li>
                    Criação e personalização do Gerador de Blog da Companhia
                    para sites de renome como Vans e Schutz
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
                        alt="Facilita Logo"
                        width="80"
                        height="20"
                      />
                      <Image
                        className="flex h-11"
                        src={growdevSvg}
                        alt="Facilita Logo"
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
              <li>Correções de bugs nas paginas e sites da companhia;</li>
              <li>Criação de LP&#39;s para datas especiais</li>
              <li>Criação de LP&#39;s no BLOG da Companhia.</li>
              <li>Fix&#39;s emergenciais com GTM;</li>
              <li>Fatoração de códigos legados;</li>
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
                    Criação da v1 do ZZPay, a ferramenta de cashback da
                    Arezzo&Co
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
