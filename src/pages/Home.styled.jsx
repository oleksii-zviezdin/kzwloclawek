import styled from '@emotion/styled';
import imgHero from '../img/hero-01.webp';
import imgHero_small from '../img/hero-01-small.webp';
import bgImg_large from '../img/bg.webp';
import bgImg_small from '../img/bg-small.webp';
import { Link } from 'react-scroll';

export const HomeMain = styled.main`
  @media screen and (min-width: 320px) and (max-width: 480px) {
    background-image: url(${bgImg_small});
  }

  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  background-image: url(${bgImg_large});
  background-repeat: repeat;
  background-size: contain;
  backdrop-filter: blur(1px);

  text-align: center;
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
  @media screen and (max-width: 480px) {
    background-image: url(${imgHero_small});
    background-size: cover;
  }
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
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 38px;
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
  @media screen and (max-width: 768px) {
    gap: 2vw;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5vw;
`;

export const HeroButtonWhere = styled(Link)`
  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding: 1.75vw;
    outline: 0.5vw solid rgba(255, 255, 255, 0.4);
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
  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding: 1.75vw;
    outline: 0.5vw solid rgba(255, 255, 255, 0.4);
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
