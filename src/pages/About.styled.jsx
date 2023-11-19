import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import bgImg from '../img/bg.webp';

export const AboutMain = styled.main`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  background-image: url(${bgImg});
  background-repeat: repeat;
  background-size: contain;
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
  width: 94%;
`;

export const AboutListItems = styled(NavLink)`
  @media screen and (max-width: 768px) {
    font-size: 3vw;
  }

  min-width: 100%;
  font-size: 22px;
  display: block;
  padding: 3vw;
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
