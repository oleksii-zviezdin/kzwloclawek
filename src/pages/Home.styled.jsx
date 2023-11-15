import styled from '@emotion/styled';
import imgHero from '../img/hero-01.jpg';

export const ImgHero = styled.img`
  width: 100%;
  size: cover;
`;

export const HeroSection = styled.section`
  position: relative;
  text-align: center;
`;

export const BlurBox = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100.075%;
  height: 100.075%;
  backdrop-filter: blur(2px);
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.15)
  );
`;

export const HeroDiv = styled.div`
  position: relative;
  width: 100%;
  background-image: url(${imgHero});
  background-repeat: no-repeat;
  background-size: cover;
  backdrop-filter: blur(1px);
  padding-top: 10vw;
  padding-bottom: 10vw;
`;

export const H1 = styled.h1`
  font-size: 42px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.599);

  text-shadow: 10px 10px 10px rgba(255, 255, 255, 0.85),
    -10px 10px 10px rgba(255, 255, 255, 0.85),
    -10px -10px 10px rgba(255, 255, 255, 0.85),
    10px -10px 10px rgba(255, 255, 255, 0.85);
`;

export const HeroBoxOfButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5vw;
`;

export const HeroButton = styled.a`
  display: inline-block;
  padding: 0.75vw;

  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.75);

  border-radius: 8px;
  backdrop-filter: blur(5px);
  outline: 5px solid rgba(0, 0, 0, 0.599);
  transition-duration: 250ms;
  &:hover,
  &:focus {
    box-shadow: 10px 10px 10px rgba(255, 255, 255, 0.5),
      -10px 10px 10px rgba(255, 255, 255, 0.5),
      -10px -10px 10px rgba(255, 255, 255, 0.5),
      10px -10px 10px rgba(255, 255, 255, 0.5);
    scale: 1.1;
  }

  @keyframes stretchAnimation {
    0% {
      transform: scale(1);
    }
    15% {
      transform: scale(1.075);
    }
    30% {
      transform: scale(1.025);
    }
    50% {
      transform: scale(1.08);
    }
    75% {
      transform: scale(1.05);
    }
    95% {
      transform: scale(1.015);
    }
    100% {
      transform: scale(1);
    }
  }
  animation: stretchAnimation 3000ms forwards infinite ease-out 2000ms;
`;
