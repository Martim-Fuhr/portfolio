'use client'

import { Profile, TextParagraph } from './styles'

export function About() {
  return (
    <Profile>
      <h2 id="sobre">Sobre mim:</h2>
      <TextParagraph>
        Me chamo Martim Fuhr, tenho 26 anos e sou Gaúcho, Tchê! Trabalho como
        Desenvolvedor Frontend há 03 anos, com foco em React. Minha jornada na
        como programador iniciou-se em Junho/2021, quando ingressei no curso de
        Desenvolvedor FullStack, oferecido pela GrowDev. Ali, obtive minha
        primeira experiência profissional, através de um programa para jovens
        talentos na @Arezzo&Co. Fui selecionado para um programa de estágio,
        onde permaneci até março de 2023. Passei uma startup como Desenvolvedor
        FullStack, com foco em PHP e JavaScript. Atualmente trabalho no Grupo
        Meireles e Freitas, com React e C#
        <br />
        Estou no 4º semestre do curso de Gestão de TI na UNISINOS - Universidade
        do Vale dos Sinos.
      </TextParagraph>
    </Profile>
  )
}

export default About
