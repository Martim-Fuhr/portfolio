import styled from 'styled-components'
import theme from './../../styles/themes/dark'

export const Container = styled.ul`
  animation: showSidebar 0.6s;
  align-items: center;
  background-color: ${theme.colors.backgroundSecondary};
  box-shadow: 0 0 30px -20px ${theme.colors.black};
  color: ${theme.colors.whiteAccordion};
  display: flex;
  flex-direction: column;
  left: ${(props: { sidebar: any }) => (props.sidebar ? '0' : '-100')};
  height: 100vh;
  position: fixed;
  top: 80px;
  scroll-behavior: smooth;
  width: 230px;
  z-index: 2;

  @media screen and (max-width: 768px) {
    width: 45vw;
    min-width: 150px;
  }

  > svg {
    cursor: pointer;
    color: ${theme.colors.whiteAccordion};
    height: 28px;
    padding: 15px 15px 15px 10px;
    position: fixed;
    left: 183px;
    width: 28px;

    @media screen and (max-width: 768px) {
      left: 33vw;
      width: 25px;
    }
  }

  @media screen and (min-width: 768px) {
    @keyframes showSidebar {
      from {
        opacity: 0;
        width: 0;
      }

      to {
        opacity: 1;
        width: 230px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    @keyframes showSidebar {
      from {
        opacity: 0;
        width: 0;
      }

      to {
        opacity: 1;
        width: 45vw;
      }
    }
  }
`

export const InfoList = styled.li`
  display: flex;
  cursor: pointer;
  list-style-type: none;
  justify-content: center;
  text-align: center;
  min-width: 140px;
  margin: 5px;

  &:hover {
    text-decoration: underline;
  }

  a {
    color: ${theme.colors.whiteAccordion};
    padding: 25px 45px;

    &:hover {
      box-shadow: 0px;
    }
  }
`

export const SpanOverlay = styled.span`
  animation: 0.5s;
  background-color: ${theme.colors.backgroundSecondary};
  flex-direction: column;
  display: ${(p: any) => (p.sidebar ? 'none' : 'flex')};
  height: 100vh;
  opacity: 90%;
  position: fixed;
  top: 80px;
  width: 100%;
  z-index: 1;
`
