import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import bgImg_large from '../img/bg.webp';
import bgImg_small from '../img/bg-small.webp';

export const AboutMain = styled.main`
  @media screen and (max-width: 480px) {
    background-image: url(${bgImg_small});
  }

  @media screen and (min-width: 481px) {
    background-image: url(${bgImg_large});
    background-repeat: repeat;
    background-size: contain;
  }
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  backdrop-filter: blur(1px);
`;

export const AboutH1 = styled.h1`
  @media screen and (max-width: 768px) {
    font-size: 6vw;
  }
  text-align: center;
  font-size: 46px;
  margin: 0;
  padding: 10vw;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.75);

  text-shadow: 5px 5px 10px rgba(255, 255, 255, 0.85),
    -5px 5px 10px rgba(255, 255, 255, 0.85),
    -5px -5px 10px rgba(255, 255, 255, 0.85),
    5px -5px 10px rgba(255, 255, 255, 0.85);
`;

export const AboutList = styled.ul`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-grow: 0, 0, 1;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: rgb(117, 117, 117, 0.95);
`;
export const AboutLisLi = styled.li`
  width: 100%;
`;

export const AboutListItems = styled(NavLink)`
  @media screen and (max-width: 768px) {
    font-size: 3vw;
  }

  font-size: 22px;
  display: block;
  padding: 5vw;
  text-decoration: none;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.599);
  font-weight: 500;
  transition-duration: 250ms;
  color: rgba(255, 255, 255, 0.8);
  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.599);
    color: white;
  }
`;
