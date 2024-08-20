import styled from 'styled-components'
import theme from '../../app/theme'

const AccordionStyle = styled.div`
  width: 100%;

  .accordion-title {
    align-items: center;
    border: 0;
    border-radius: 5px;
    box-shadow: -5px -5px 15px -15px rgba(255, 255, 255, 0.7) inset;
    background-color: ${theme.colors.newBackgroundColor};
    color: ${theme.colors.white};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    text-transform: initial;
    text-align: start;
    padding: 0 10px;
    width: 100%;

    &.open {
      box-shadow: -5px 12px 15px -14px rgba(255, 255, 255, 0.7) inset;
      border-radius: 5px 5px 0 0;
    }

    @media screen and (min-width: 768px) {
      font-size: ${theme.fontSizes.largePlus};
    }

    &:after {
      content: '';
      color: ${theme.colors.white};
      font-size: ${theme.fontSizes.semiLarge};
      font-weight: ${theme.fontWeights.normal};
      margin: 15px 0;
      min-height: 30px;
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
      font-size: ${theme.fontSizes.semiLarge};

      @media screen and (min-width: 768px) {
        font-size: ${theme.fontSizes.largePlus};
      }
    }
  }

  .accordion-content {
    background-color: ${theme.colors.newBackgroundColor};
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

    &.show {
      box-shadow: -5px -5px 15px -15px rgba(255, 255, 255, 0.7) inset;
      max-height: fit-content;
      overflow: hidden;
      margin-bottom: 10px;
      transition: 0.2s linear;
      padding: 20px;
    }
  }
`

export default AccordionStyle
