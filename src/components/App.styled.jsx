import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 8px 8px;
  margin-bottom: 16px;
  backdrop-filter: blur(10px);
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.5);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  margin: 0;
`;

export const LogoTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  border-radius: 2px;
`;

export const LogoDescription = styled.p`
  margin: 0;
  color: #ffffff;
  text-shadow: -0.5px -0.5px 0px black, 0px -0.5px 0px black,
    0.5px -0.5px 0px black, -0.5px 0px 0px black, 0.5px 0px 0px black,
    -0.5px 0.5px 0px black, 0.5px 0.5px 0px black, -0.5px 0px 0px black,
    0px 0px 2px white;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 8px 16px;

  border-radius: 8px;

  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  font-weight: 700;

  border-radius: 8px;
  transition-duration: 250ms;
  &:hover,
  &:focus,
  &.active {
    color: white;
    background-color: rgba(0, 0, 0, 0.599);
  }
`;

export const LogoLink = styled(NavLink)`
  display: inline-block;

  border-radius: 8px;

  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  font-weight: 700;

  border-radius: 8px;
  transition-duration: 250ms;
  &:hover,
  &:focus {
    scale: 1.1;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 1vw;
`;
