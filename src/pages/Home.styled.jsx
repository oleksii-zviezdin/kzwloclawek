import styled from '@emotion/styled';
// import imgHero from '../img/hero-01.jpg';

export const ImgHero = styled.img`
  width: 100%;
  size: cover;
`;

export const HeroSection = styled.div`
  position: relative;
  text-align: center;
`;

export const HeroDiv = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1;
  left: 50%;
  top: 40%;
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
