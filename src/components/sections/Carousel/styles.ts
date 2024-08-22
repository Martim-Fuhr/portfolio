import styled from 'styled-components'
import theme from '../../../app/theme'

export const H2Title = styled.h2`
  color: ${theme.colors.text};
  font-family: 'IBM Plex Mono', monospace;
  align-self: flex-start;
  font-size: 38px;
  font-weight: 800;
  align-items: start;
  padding: 0 0 20px;
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
`

export const CarouselSection = styled.section`
  width: 100%;
  align-items: center;
  margin: 25px 0 25px 0;
  padding: 0 8%;

  .swiper.swiper-initialized {
    display: flex;
    justify-content: center;
  }

  .slide-item {
    height: 100%;
    max-height: 450px;
    width: 100%;
  }

  .slide-image {
    display: flex;
    height: 100%;
    max-height: 360px;
    width: auto;

    @media (min-width: 768px) and (max-width: 992px) {
      height: 240px;
    }

    @media (min-width: 992px) and (max-width: 1360px) {
      height: 300px;
    }
  }

  .badge {
    border-radius: 12px;
    font-size: 0.8em;
    font-weight: bold;
    height: min-content;
    padding: 0.2em 0.5em;
  }

  .Frontend {
    background-color: #e0f7fa;
    color: #006064;
  }

  .Fullstack {
    background-color: #ffecb3;
    color: #ff6f00;
  }
`
