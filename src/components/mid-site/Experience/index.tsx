'use client'
// import { useBreakpoints } from '@/hooks/use-breakpoints'
import { Profile, Descriptions, SvgArrowSpan } from './styles'
import { FaReact } from 'react-icons/fa'
import { BiLogoJavascript, BiLogoSass, BiLogoTypescript } from 'react-icons/bi'
import { TbBrandNextjs } from 'react-icons/tb'
import { IoMdArrowDropdownCircle } from 'react-icons/io'
import arezzoSvg from '../../../../public/icons/arezzo.svg'
import facilitaImg from '../../../../public/images/facilita.png'
import growdevSvg from '../../../../public/images/icon.webp'
import Accordion from './accordion'
import Link from 'next/link'
import Image from 'next/image'

export function Experiences() {
  // const { isMobile } = useBreakpoints()

  // Repensar modelo mobile - Desk ta OK.
  // ajustar modelo desktop também, talvez fazer 2 versões
  // Fazer setinha sumir ao abrir modal

  return (
    <Profile>
      <h2 id="experience">Experience</h2>
      <div className="exps">
        <Descriptions>
          <div className="accordions">
            <Accordion
              title={
                <>
                  <div className="flex flex-col md:flex-row">
                    <div className="flex items-center justify-center">
                      <Image
                        className="flex h-10"
                        src={facilitaImg}
                        alt="Facilita Logo"
                        width="140"
                        height="40"
                      />
                    </div>
                    <div>
                      <p className="exps__title">Desenvolvedor FullStack</p>
                      <p className="exps__company">Facilita System</p>
                      <p className="exps__date">01/2024 - Até o momento</p>
                    </div>
                  </div>
                  <SvgArrowSpan className="flex justify-center p-1">
                    <IoMdArrowDropdownCircle />
                  </SvgArrowSpan>
                </>
              }
            >
              <li>Implementação de novas funcionalidades;</li>
              <li>Automação de testes;</li>
              <li>Melhorias de SEO;</li>
              <li>Fatoração de códigos legados.</li>
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
                  Principais entregas:
                  <li>
                    Entrega do MVP do <Link href="picnut.com.br">teste</Link>
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
                    <div className="flex items-center justify-center">
                      <Image
                        className="flex h-10"
                        src={arezzoSvg}
                        alt="Facilita Logo"
                        width="80"
                        height="20"
                      />
                    </div>
                    <div>
                      <p className="exps__title">Analista Frontend I</p>
                      <p className="exps__company">Arezzo&Co</p>
                      <p className="exps__date">01/2022 - 03/2023</p>
                    </div>
                  </div>
                  <SvgArrowSpan className="flex justify-center p-1">
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
                  Principais entregas:
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
                    <div className="flex items-center justify-center flex-row gap-5">
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
                      <p className="exps__title text-center sm:text-start">
                        Desenvolvedor Frontend Trainee
                      </p>
                      <p className="exps__company">Arezzo&co | GrowDev</p>
                      <p className="exps__date">06/2021 - 01/2022</p>
                    </div>
                  </div>
                  <SvgArrowSpan className="flex justify-center p-1">
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
                  Principais entregas:
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
    </Profile>
  )
}

export default Experiences
