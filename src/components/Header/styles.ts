import styled from 'styled-components'
import theme from '@/app/theme'

export const HeaderSection = styled.header`
  align-items: center;
  background-color: ${theme.colors.newBackgroundColorSecond};
  box-shadow: 0 0 20px 3px ${theme.colors.black};
  display: flex;
  flex-direction: row;
  height: 80px;
  max-width: 1920px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
`

export const HamburgerIcon = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  left: 20px;
  height: 42px;
  justify-content: center;
  position: absolute;
  width: 42px;
  z-index: 2;

  &.icon.iconActive .hamburger {
    background: transparent;
    box-shadow: 0 2px 5px transparent;
    transition: 0.5s;

    &:after {
      top: 0;
      background: ${theme.colors.whiteAccordion};
      transform: rotate(225deg);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    &:before {
      top: 0;
      background: ${theme.colors.whiteAccordion};
      transform: rotate(135deg);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
  }

  .hamburger {
    background-color: ${theme.colors.whiteAccordion};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    height: 3px;
    top: 50%;
    position: absolute;
    transition: 0.5s;
    width: 24px;

    @media screen and (max-width: 340px) {
      width: 1vw;
      position: absolute;
      left: 1px;
    }

    &:before {
      background: ${theme.colors.whiteAccordion};
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      content: '';
      height: 3px;
      position: absolute;
      transition: 0.5s;
      top: -10px;
      width: 28px;

      @media screen and (max-width: 340px) {
        width: 2vw;
      }
    }

    &:after {
      background: ${theme.colors.whiteAccordion};
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      content: '';
      height: 3px;
      position: absolute;
      top: 10px;
      transition: 0.5s;
      width: 28px;

      @media screen and (max-width: 340px) {
        width: 2vw;
      }
    }
  }
`

export const ProfileInfo = styled.div`
  align-items: center;
  color: ${theme.colors.whiteAccordion};
  display: flex;
  justify-content: center;
  line-height: 1.7em;
  width: 100%;

  @media screen and (max-width: 768px) {
    line-height: 1.5em;
  }
`

export const SpanName = styled.span`
  color: ${theme.colors.whiteAccordion};
  font-family: 'IBM Plex Mono', monospace;
  font-size: 40px;
  display: flex;
  white-space: nowrap;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 340px) {
    font-size: 9vw;
  }
`

export const SpanDesk = styled.span`
  color: ${theme.colors.whiteAccordion};
  font-family: 'IBM Plex Mono', monospace;
  font-size: 17px;
  text-align: end;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }

  @media screen and (max-width: 340px) {
    font-size: 6vw;
  }
`
