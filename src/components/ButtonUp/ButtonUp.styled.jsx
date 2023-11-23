import styled from '@emotion/styled';
import { Link } from 'react-scroll';

export const Up = styled(Link)`
  font-size: 30px;
  position: fixed;
  bottom: 12vw;
  right: 5vw;

  display: inline-flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;

  z-index: 1000;
  transition-duration: 250ms;

  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  border: none;

  outline: 3px solid rgba(0, 0, 0, 0.5);
  outline-offset: -3px;
  backdrop-filter: blur(5px);

  @media screen and (min-width: 1200px) {
    right: 2vw;
    bottom: 3.75vw;
    width: 75px;
    height: 75px;
  }

  &:hover,
  &:focus {
    outline: 5px solid #bb0000;
    outline-offset: 5px;
    border: 2px solid #bb0000;
    background-color: rgba(255, 255, 255, 0.65);
    /* box-shadow: 0px 0px 10px #bb0000, -0px 0px 10px #bb0000,
      -0px -0px 10px #bb0000, 0px -0px 10px #bb0000; */
  }
`;
