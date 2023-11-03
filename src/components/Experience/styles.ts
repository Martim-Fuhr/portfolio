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
    align-self: flex-start;
    font-size: 38px;
    font-weight: 800;
    align-items: start;
    position: relative;
    width: 100%;

    &::after {
      background-color: rgb(115, 115, 230);
      content: '';
      display: flex;
      height: 2px;
      left: 0;
      margin: -10px 0 10px 0;
      min-width: 200px;
      position: absolute;
      width: 50%;
    }
  }

  .exps {
    font-size: 16px;
    letter-spacing: 1px;
    padding: 15px 0 40px;
    position: relative;
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

    &__date {
      color: rgb(125, 125, 125);
      padding: 4px 0 4px 8px;
    }

    &__title {
      font-weight: 600;
      padding: 4px 0 4px 8px;
    }

    &__company {
      text-transform: uppercase;
      font-weight: 600;
      font-size: 26px;
      padding: 4px 0 4px 8px;
      /* align-self: normal;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row; */
      /* justify-content: space-evenly; */
    }

    &::after {
      content: '';
      border-top: 2px solid #fff;
      border-left: 2px solid #fff;
      padding: 15px;
      position: absolute;
      top: 8px;
    }
  }
`

export const Descriptions = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .accordions {
    padding: 0;

    li {
      display: flex;
      align-items: center;
      padding-bottom: 10px;
      position: relative;

      &::before {
        content: '';
        background-color: rgb(255, 165, 0);
        border-radius: 50%;
        height: 8px;
        margin-right: 10px;
        width: 8px;
        min-width: 8px;

        @media screen and (max-width: 400px) {
          height: 5px;
          margin-right: 8px;
          width: 5px;
          min-width: 5px;
        }
      }
    }
  }
`
