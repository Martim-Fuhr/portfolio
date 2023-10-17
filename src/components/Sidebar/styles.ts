import styled from 'styled-components'

export const Container = styled.div`
  animation: showSidebar 0.6s;
  background-color: #222;
  box-shadow: 0 0 30px -20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  left: ${(props: { sidebar: any }) => (props.sidebar ? '0' : '-100')};
  height: 100%;
  position: fixed;
  top: 80px;
  width: 230px;
  z-index: 2;

  @media screen and (max-width: 768px) {
    width: 45vw;
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

export const InfoList = styled.p`
  cursor: pointer;
  text-align: center;
  padding: 20px 35px;

  &:hover {
    text-decoration: underline;
  }
`

export const LinkList = styled.a`
  width: initial;

  &:hover {
    box-shadow: 0px;
  }
`
export const SpanOverlay = styled.span`
  animation: 0.5s;
  background-color: #222;
  flex-direction: column;
  display: ${(p: any) => (p.sidebar ? 'none' : 'flex')};
  height: 100%;
  opacity: 90%;
  position: fixed;
  top: 80px;
  width: 100%;
  z-index: 1;
`
