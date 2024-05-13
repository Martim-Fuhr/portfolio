import styled from 'styled-components'
import theme from '../../../app/theme'

const SOCIAL_MEDIA_COLORS = {
  LINKEDIN: '#0E76A8',
  GITHUB: '#171515',
  INSTAGRAM: '#E1306C',
  OUTLOOK: '#007FFF',
}

export const SocialMedias = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 25px;
  padding: 15px 0;
  width: 100%;

  a {
    svg {
      color: ${theme.colors.text};
      transition: transform 0.2s;
    }

    &:hover {
      svg {
        transform: scale(1.25);
      }

      &.linkedin {
        svg {
          path:last-child {
            animation: 0.5s linear;
            fill: ${SOCIAL_MEDIA_COLORS.LINKEDIN};
          }
        }
      }

      &.github {
        svg {
          path:last-child {
            fill: ${SOCIAL_MEDIA_COLORS.GITHUB};
          }
        }
      }

      &.instagram {
        svg {
          path:last-child {
            fill: ${SOCIAL_MEDIA_COLORS.INSTAGRAM};
          }
        }
      }

      /* &.outlook {
        svg {
          path:last-child {
            fill: ${SOCIAL_MEDIA_COLORS.OUTLOOK};
          }
        }
      } */
    }
  }
`
