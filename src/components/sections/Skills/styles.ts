import styled from 'styled-components'
import theme from '../../../app/theme'

export const SkillSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 25px 0 25px 0;
  padding: 0 8%;
  width: 100%;

  h2 {
    color: ${theme.colors.text};
    font-family: 'IBM Plex Mono', monospace;
    font-size: 48px;
    font-weight: 800;
    text-align: right;
    position: relative;
    width: 100%;

    &::after {
      background-color: rgb(115, 115, 230);
      content: '';
      display: flex;
      height: 2px;
      margin: -10px 0 10px 0;
      min-width: 200px;
      right: 0;
      position: absolute;
      width: 50%;
    }
  }

  svg {
    color: ${theme.colors.text};
    margin: 0 auto;
    transition: 0.2s linear;

    &:hover {
      transform: scale(1.5);
      transition: 0.2s linear;

      &.react {
        fill: #61dafb;
      }

      &.js {
        fill: #f7e018;
      }

      &.ts {
        fill: #007acd;
      }

      &.next path {
        color: #000;
      }

      &.tw {
        fill: #38bdf8;
      }

      &.stc {
        fill: #f7c9ff;
      }

      &.git {
        fill: #f05033;
      }

      &.node path {
        color: #90c53f;
      }

      &.go {
        fill: #b366f6;
      }

      &.gtm {
        fill: #4fc4f7;
      }

      &.lrv {
        fill: #ff2414;
      }

      &.php {
        fill: #7377ad;
      }
    }
  }
`

export const TextParagraph = styled.p`
  color: ${theme.colors.text};
  font-size: 16px;
  text-align: center;
  letter-spacing: 1px;
  padding: 10px 2px;
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 25px;
    padding: 20px 2px;
  }
`
