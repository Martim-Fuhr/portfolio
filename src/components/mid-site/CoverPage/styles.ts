import styled from 'styled-components'

export const Profile = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 0 25px 0;
  padding: 105px 8% 0 8%;
  min-height: 95vh;
`

export const ImageSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const TextParagraph = styled.span`
  font-size: 16px;
  letter-spacing: 1px;
  text-align: justify;
  /* max-width: 85%; */
  padding-top: 50px;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-left: 90px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 25px;
    padding: 10px 2px;
  }
`
