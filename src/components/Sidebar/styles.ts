import styled from 'styled-components'

export const Container = styled.ul`
  animation: showSidebar 0.6s;
  align-items: center;
  background-color: #222;
  box-shadow: 0 0 30px -20px;
  color: #fff;
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
    color: #fff;
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
    padding: 25px 45px;

    &:hover {
      box-shadow: 0px;
    }
  }
`

export const SpanOverlay = styled.span`
  animation: 0.5s;
  background-color: #222;
  flex-direction: column;
  display: ${(p: any) => (p.sidebar ? 'none' : 'flex')};
  height: 100vh;
  opacity: 90%;
  position: fixed;
  top: 80px;
  width: 100%;
  z-index: 1;
`
