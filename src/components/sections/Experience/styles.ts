import styled from 'styled-components'
import theme from '../../../app/theme'

export const ExperienceSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 25px 0 25px 0;
  padding: 0 8%;
  width: 100%;

  h2 {
    color: ${theme.colors.text};
    font-family: 'IBM Plex Mono', monospace;
    text-align: right;
    font-size: 38px;
    font-weight: 800;
    position: relative;
    width: 100%;

    &::after {
      background-color: rgb(115, 115, 230);
      content: '';
      display: flex;
      height: 2px;
      right: 0;
      margin: -10px 0 10px 0;
      min-width: 200px;
      position: absolute;
      width: 50%;
    }
  }

  .exps {
    background-color: rgba(10, 23, 55, 0.1);
    backdrop-filter: blur(16px);
    -webki-backdrop-filter: blur(16px);
    font-size: 16px;
    letter-spacing: 1px;
    margin: 15px 0 40px;
    position: relative;
    width: 100%;

    @media screen and (min-width: 768px) {
      font-size: 23px;
    }

    &__title {
      color: white;
      font-weight: 600;
      font-size: 22px;
      padding: 4px;

      @media screen and (max-width: 768px) {
        font-size: 22px;
      }
    }

    &__company {
      color: white;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 18px;
      padding: 4px;

      @media screen and (min-width: 768px) {
        font-size: 23px;
      }
    }

    &__date {
      color: rgb(125, 125, 125);
      padding: 4px;
      font-size: 18px;

      @media screen and (min-width: 768px) {
        font-size: 23px;
      }
    }

    &::before {
      transform: translateX(-15px);
      content: '';
      position: absolute;
      width: 2px;
      height: 100%;
      top: 0;
      bottom: 5%;
      transition: background-color 0.5s ease;
      background: linear-gradient(90deg, #1e1e1e, #333, #1e1e1e);
      background-size: 200% 100%;
      animation: BorderAnimation 2s linear infinite;
    }

    @keyframes BorderAnimation {
      0% {
        background-position: 0% 0%;
      }
      100% {
        background-position: 100% 0%;
      }
    }
  }
`
export const Descriptions = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .accordions {
    padding: 0;

    li {
      display: flex;
      align-items: center;
      padding-bottom: 10px;
      position: relative;

      &::before {
        content: '';
        background-color: rgb(255, 165, 0);
        border-radius: 50%;
        height: 8px;
        margin-right: 10px;
        width: 8px;
        min-width: 8px;

        @media screen and (max-width: 400px) {
          height: 5px;
          margin-right: 8px;
          width: 5px;
          min-width: 5px;
        }
      }
    }

    span {
      min-width: 80px;
    }
  }
`

export const SvgArrowSpan = styled.span`
  width: 80%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  transition: transform 0.3s ease-in-out;

  .rotate-180 {
    transform: rotate(180deg);
    transition: transform 0.3s ease-in-out;
  }
`
