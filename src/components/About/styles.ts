import styled from 'styled-components'

export const Profile = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 25px 0 25px 0;
  padding: 0 8%;

  h2 {
    align-self: flex-start;
    border-bottom: 2px solid rgb(115, 115, 230);
    font-size: 48px;
    font-weight: 800;
    align-items: start;
    width: 30%;
  }
`

export const ImageSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const TextParagraph = styled.p`
  font-size: 16px;
  letter-spacing: 1px;
  max-width: 85%;
  width: 100%;

  @media screen and (min-width: 768px) {
    color: #fff;
    padding: 10px 2px;
  }

  @media screen and (min-width: 1024px) {
    color: #fff;
    font-size: 25px;
    padding: 10px 2px;
  }
`
