import styled from 'styled-components'
import theme from '../../app/theme'

export const Profile = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 80px 0 25px 0;
  padding: 15px 8% 0 8%;
  min-height: 85vh;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    padding: 25px 8% 0 8%;
    min-height: 95vh;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 25px 8% 0 8%;
  }
`

export const TextWrapper = styled.div`
  color: ${theme.colors.text};
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 1px;
  text-align: justify;
  padding-top: 30px;
  max-width: min-content;

  @media screen and (min-width: 1024px) {
    line-height: 20px;
    margin-left: 60px;
    padding: 10px 2px;
  }

  .h2-function {
    font-size: 70px;

    @media screen and (max-width: 1366px) {
      font-size: 60px;
    }

    @media screen and (max-width: 768px) {
      font-size: 10vw;
    }
  }

  a {
    color: ${theme.colors.whiteOff};
  }
`
