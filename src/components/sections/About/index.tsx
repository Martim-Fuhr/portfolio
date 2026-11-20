'use client'

import { Profile, TextParagraph } from './styles'

export function About() {
  return (
    <Profile>
      <h2 id="sobre">Sobre mim:</h2>
      <TextParagraph>
        Me chamo Martim Fuhr, tenho 27 anos e sou Gaúcho! Trabalho como
        Desenvolvedor Fullstack há mais de 04 anos com foco em React e C#. 
        Minha jornada na na programação iniciou-se em Junho/2021, quando ingressei no curso de
        Desenvolvedor FullStack, oferecido pela GrowDev. Ali, obtive minha
        primeira experiência profissional, através de um programa para jovens
        talentos na @Arezzo&Co. Fui selecionado para um programa de estágio,
        onde permaneci até março de 2023. Passei uma startup como Desenvolvedor
        FullStack, com foco em PHP e JavaScript. Atualmente trabalho na kedu, uma 
        plataforma que ajuda mais de 600 escolas privadas a gerenciar suas finanças.
        <br />
        Sou formado em Gestão da Tecnologia da Informação na UNISINOS - Universidade
        do Vale dos Sinos.
      </TextParagraph>
    </Profile>
  )
}

export default About
