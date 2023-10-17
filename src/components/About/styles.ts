import styled from 'styled-components'

export const Profile = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 25px 0 25px 0;
  padding: 0 8%;
`

export const ImageSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const TextParagraph = styled.p`
  color: #fff;
  font-size: 25px;
  padding: 10px 2px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    letter-spacing: 1px;
    margin-left: 0;
    max-width: 85%;
    width: 100%;
  }
`
