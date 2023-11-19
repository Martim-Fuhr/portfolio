import React from 'react'
// import { useBreakpoints } from '@/hooks/use-breakpoints'
import { Profile, Descriptions } from './styles'
import { FaReact } from 'react-icons/fa'
import { BiLogoJavascript, BiLogoSass, BiLogoTypescript } from 'react-icons/bi'
import { TbBrandNextjs } from 'react-icons/tb'
import Accordion from './accordion'
import SeeMore from './seemore'

export function Experiences() {
  // const { isMobile } = useBreakpoints()

  return (
    <Profile>
      <h2 id="experience">Experience</h2>
      <div className="exps">
        <div className="exps__date">06/2021 - 01/2022</div>
        <div className="exps__title">Frontend Developer Trainee</div>
        <div className="exps__company">Arezzo&co | GrowDev</div>
        <Descriptions>
          <div className="accordions">
            <Accordion title="Atribuições">
              <li>Correções de bugs nas paginas e sites da companhia;</li>
              <li>Criação de LP&#39;s para datas especiais</li>
              <li>Criação de LP&#39;s no BLOG da Companhia.</li>
              <li>Fix&#39;s emergenciais com GTM;</li>
              <li>Fatoração de códigos legados;</li>
              <div>
                <p className="flex text-xl uppercase p-3 justify-center w-full text-center">
                  main technologies used here
                </p>
                <span className="flex-1 flex flex-row justify-evenly flex-wrap w-full">
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
            </Accordion>
            <SeeMore title="Principais Entregas">
              <li>
                Criação da v1 do ZZPay, a ferramenta de cashback da Arezzo&Co
              </li>
              <li>Refatoração do Menu Mobile e Web do ZZMall</li>
            </SeeMore>
          </div>
        </Descriptions>
      </div>
      <div className="exps">
        <div className="exps__date">01/2022 - 03/2023</div>
        <div className="exps__title">Frontend Analyst I</div>
        <div className="exps__company">Arezzo&co</div>
        <Descriptions>
          <div className="accordions">
            <Accordion title="Atribuições">
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
                  main technologies used here
                </p>
                <span className="flex-1 flex flex-row justify-evenly flex-wrap w-full">
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
            </Accordion>
            <SeeMore title="Principais Entregas">
              <li>
                Criação do Hover Com Video nas Páginas de Categorias nos sites
                da companhia
              </li>
              <li>
                Criação do Hover com Imagens nas Páginas de Categoria nos sites
                da companhia
              </li>
              <li>
                Criação e personalização do Gerador de Blog da Companhia para
                sites de renome como Vans e Schutz
              </li>
            </SeeMore>
          </div>
        </Descriptions>
      </div>
    </Profile>
  )
}

export default Experiences
