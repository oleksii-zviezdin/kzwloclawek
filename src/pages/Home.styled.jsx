import styled from '@emotion/styled';
import imgHero from '../img/hero-01.webp';
import bgImg from '../img/bg.webp';
import { Link } from 'react-scroll';

export const HomeMain = styled.main`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  background-image: url(${bgImg});
  background-repeat: repeat;
  background-size: contain;
  backdrop-filter: blur(1px);

  text-align: center;
`;

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
  border-bottom: 0.25vw solid rgba(255, 255, 255, 0.75);
  box-shadow: 0 5px 23px #a2a2a2;
`;

export const H1 = styled.h1`
  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 32px;
  }
  margin: 0;
  margin-bottom: 32px;
  font-size: 46px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.75);

  text-shadow: 10px 10px 10px rgba(255, 255, 255, 0.85),
    -10px 10px 10px rgba(255, 255, 255, 0.85),
    -10px -10px 10px rgba(255, 255, 255, 0.85),
    10px -10px 10px rgba(255, 255, 255, 0.85);
`;

export const HeroBoxOfButton = styled.div`
  @media screen and (min-width: 320px) and (max-width: 480px) {
    gap: 8vw;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5vw;
`;

export const HeroButtonWhere = styled(Link)`
  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 16px;
    padding: 2vw;
    outline: 1vw solid rgba(255, 255, 255, 0.4);
  }

  display: inline-block;
  padding: 0.75vw;

  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.75);

  cursor: pointer;

  border-radius: 8px;
  backdrop-filter: blur(5px);

  outline: 0.25vw solid rgba(255, 255, 255, 0.4);
  transition-duration: 250ms;
  &:hover,
  &:focus {
    box-shadow: 10px 10px 10px rgba(255, 255, 255, 0.5),
      -10px 10px 10px rgba(255, 255, 255, 0.5),
      -10px -10px 10px rgba(255, 255, 255, 0.5),
      10px -10px 10px rgba(255, 255, 255, 0.5);
    scale: 1.1;
    outline: 0.25vw solid rgba(0, 0, 0, 0.599);
    animation-play-state: paused;
  }

  @keyframes stretchAnimation {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(1.055);
    }
    30% {
      transform: scale(1.005);
    }
    50% {
      transform: scale(1.06);
    }
    75% {
      transform: scale(0.85);
    }
    95% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }
  animation: stretchAnimation forwards infinite ease-out 2000ms;
`;

export const HeroButtonWhen = styled(Link)`
  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 16px;
    padding: 2vw;
    outline: 1vw solid rgba(255, 255, 255, 0.4);
  }

  display: inline-block;
  padding: 0.75vw;

  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.75);

  cursor: pointer;

  border-radius: 8px;
  backdrop-filter: blur(5px);
  outline: 0.25vw solid rgba(255, 255, 255, 0.5);
  transition-duration: 250ms;
  &:hover,
  &:focus {
    box-shadow: 10px 10px 10px rgba(255, 255, 255, 0.5),
      -10px 10px 10px rgba(255, 255, 255, 0.5),
      -10px -10px 10px rgba(255, 255, 255, 0.5),
      10px -10px 10px rgba(255, 255, 255, 0.5);
    scale: 1.1;
    outline: 0.25vw solid rgba(0, 0, 0, 0.599);
    animation-play-state: paused;
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
  animation: stretchAnimation 1500ms forwards infinite ease-out 2000ms;
`;
