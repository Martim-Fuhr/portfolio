import styled from 'styled-components'
import theme from '../../../../styles/themes/dark'

const AccordionStyle = styled.div`
  padding: 30px 0 5px 0;
  width: 100%;

  .accordion-title {
    align-items: center;
    background-color: rgba(30 30 30 / 0.3);
    border: 0;
    border-radius: 5px;
    color: ${theme.colors.white};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    text-transform: initial;
    text-align: start;
    padding: 0 20px;
    width: 100%;

    &:hover {
      background-color: rgba(30 30 30 / 0.4);
    }

    &.open {
      border-radius: 5px 5px 0 0;
    }

    @media screen and (min-width: 768px) {
      font-size: ${theme.fontSizes.largePlus};
    }

    &:after {
      content: '↓';
      color: ${theme.colors.white};
      font-size: ${theme.fontSizes.semiLarge};
      font-weight: ${theme.fontWeights.normal};
      margin: 15px 0;
      transition: 0.3s linear;
      position: relative;

      @media screen and (min-width: 768px) {
        font-size: ${theme.fontSizes.largePlus};
      }
    }

    &.open:after {
      transform: rotate(-180deg);
      transition: 0.2s linear;
    }

    .accordion-name-title {
      padding: 8px 0;
      letter-spacing: 1px;
      font-size: ${theme.fontSizes.medium2};
    }
  }

  .accordion-content {
    background-color: rgba(30 30 30 / 0.3);
    border-radius: 0 0 5px 5px;
    color: ${theme.colors.whiteAccordion};
    max-height: 0;
    overflow: hidden;
    transition: 0.2s linear;
    text-transform: initial;
    font-size: ${theme.fontSizes.medium};
    line-height: ${theme.fontSizes.large};

    @media screen and (min-width: 768px) {
      font-size: ${theme.fontSizes.medium};
    }

    &:hover {
      background-color: rgba(30 30 30 / 0.4);
    }

    &.show {
      max-height: fit-content;
      overflow: hidden;
      margin-bottom: 10px;
      transition: 0.2s linear;
      padding: 20px 20px 0 20px;
    }
  }
`

export default AccordionStyle
