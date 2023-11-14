import styled from 'styled-components'

export const Profile = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 25px 0 25px 0;
  padding: 0 8%;
  width: 100%;

  h2 {
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
`

export const TextParagraph = styled.p`
  color: #fff;
  font-size: 16px;
  text-align: right;
  letter-spacing: 1px;
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 25px;
    padding: 10px 2px;
  }
`
