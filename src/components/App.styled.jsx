import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1720px;
  margin: 0 auto;
  padding: 0 8px;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Header = styled.header`
  @media screen and (max-width: 768px) {
    padding: 8px 16px;
  }

  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px 32px;
  background-color: rgba(117, 117, 117, 0.75);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  border-bottom: 0.25vw solid rgba(255, 255, 255, 0.75);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin: 0;
`;

export const LogoTitle = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }

  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  border-radius: 2px;
`;

export const LogoDescription = styled.p`
  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }

  margin: 0;
  color: #ffffff;
  text-shadow: -0.5px -0.5px 0px black, 0px -0.5px 0px black,
    0.5px -0.5px 0px black, -0.5px 0px 0px black, 0.5px 0px 0px black,
    -0.5px 0.5px 0px black, 0.5px 0.5px 0px black, -0.5px 0px 0px black,
    0px 0px 2px white;
`;

export const Link = styled(NavLink)`
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }

  @media screen and (min-width: 768.1px) and (max-width: 1024px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1024.1px) {
    padding: 8px 16px;
  }

  outline: none;
  display: inline-block;
  padding: 8px 12px;

  border-radius: 8px;

  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  font-weight: 700;
  transition-duration: 250ms;
  &:hover,
  &:focus,
  &.active {
    color: white;
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

export const LogoLink = styled(NavLink)`
  outline: none;
  display: inline-block;

  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  font-weight: 700;

  cursor: pointer;

  border-radius: 8px;
  transition-duration: 250ms;
  &:hover,
  &:focus {
    scale: 1.1;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1vw;
`;

export const Footer = styled.footer`
  @media screen and (max-width: 480px) {
    padding: 5vw 16px;
  }
  padding: 5vw 32px;

  background-color: rgba(0, 0, 0, 0.45);
  border-top: 0.25vw solid rgba(255, 255, 255, 0.5);
  > p {
    @media screen and (max-width: 1024px) {
      font-size: 12px;
    }
    margin: 0;
    margin-top: 32px;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    > a {
      @media screen and (max-width: 1024px) {
        font-size: 12px;
      }
      outline: none;
      text-decoration: none;
      color: inherit;
      font-weight: bold;
      transition-duration: 250ms;
      &:hover,
      &:focus {
        color: rgba(255, 255, 255, 0.8);
        text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.25),
          -2px 2px 4px rgba(255, 255, 255, 0.25),
          -2px -2px 4px rgba(255, 255, 255, 0.25),
          2px -2px 4px rgba(255, 255, 255, 0.25);
      }
    }
  }
`;

export const Contact = styled.div`
  display: block;
  list-style: none;
`;

export const ContactList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: left;
`;
export const ContactListItems = styled.li`
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
`;

export const Address = styled.a`
  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }

  align-items: center;
  font-size: 18px;
  outline: none;
  display: flex;
  gap: 5px;
  padding: 5px;
  text-decoration: none;
  color: inherit;
  transition-duration: 250ms;
  &:hover,
  &:focus {
    color: rgba(255, 255, 255, 0.8);
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.25),
      -2px 2px 4px rgba(255, 255, 255, 0.25),
      -2px -2px 4px rgba(255, 255, 255, 0.25),
      2px -2px 4px rgba(255, 255, 255, 0.25);
  }
`;

export const Mail = styled.a`
  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }

  align-items: center;
  font-size: 18px;
  outline: none;
  display: flex;
  gap: 5px;
  padding: 5px;
  text-decoration: none;
  color: inherit;
  transition-duration: 250ms;
  &:hover,
  &:focus {
    color: rgba(255, 255, 255, 0.8);
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.25),
      -2px 2px 4px rgba(255, 255, 255, 0.25),
      -2px -2px 4px rgba(255, 255, 255, 0.25),
      2px -2px 4px rgba(255, 255, 255, 0.25);
  }
`;
