import React from 'react'
import Accordion from './accordion'
import styled from 'styled-components'
// import theme from '../../../styles/themes/dark'

const Descriptions = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .accordions {
    padding: 0;
  }
`
// const test = 'Correção de bugs nas diversas paginas e sites da companhia'

export function JobDescription() {
  return (
    <Descriptions>
      <div className="accordions">
        <Accordion title="Desenvolvia xxx yyyy...">qwertqwerqerqer</Accordion>
        <Accordion title="Principais Stacks">
          {/* {test} */}
          Correção de bugs nas diversas paginas e sites da companhia- de Landing
          Pages para datas especiais - Fix&apos;s emergenciais com - Fatoração
          de códigos legados - Criação de Landing Pages.
        </Accordion>
      </div>
    </Descriptions>
  )
}

export default JobDescription
