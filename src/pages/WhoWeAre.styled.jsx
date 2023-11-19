import styled from '@emotion/styled';

export const WhoWeAreMain = styled.main`
  @media screen and (min-width: 320px) and (max-width: 480px) {
    padding: 12px 16px;
  }
  margin: 0;
  padding: 24px 32px;
  background-color: #b1afaf;
  backdrop-filter: blur(1px);

  border-bottom: 0.25vw solid rgba(255, 255, 255, 0.5);
`;

export const WhoWeAreH2 = styled.h2`
  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 10px;
  }

  margin: 0;
  margin-bottom: 20px;
  font-size: 22px;
  display: block;
  padding: 5px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.75);
  text-shadow: 3px 3px 10px rgba(255, 255, 255, 0.85),
    -3px 3px 10px rgba(255, 255, 255, 0.85),
    -3px -3px 10px rgba(255, 255, 255, 0.85),
    3px -3px 10px rgba(255, 255, 255, 0.85);
`;

export const WhoWeAreWelcome = styled.h3`
  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 10px;
  }

  margin: 0;
  margin-bottom: 15px;
  font-size: 20px;
  display: inline-block;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.75);
  font-weight: 700;
`;

export const WhoWeAreList = styled.ul`
  @media screen and (min-width: 320px) and (max-width: 480px) {
    padding: 4px;
    margin-bottom: 15px;
  }
  margin: 0;
  padding: 10px;
  border-radius: 1.5vw;
  background-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  text-align: left;
  margin-bottom: 50px;
`;

export const WhoWeAreListItem = styled.li`
  @media screen and (min-width: 320px) and (max-width: 480px) {
    padding: 4px;
  }
  margin: 0;
  padding: 10px;
  font-size: 18px;
  line-height: calc(24 / 18);
  display: inline-block;
  text-align: left;
  color: rgba(0, 0, 0, 0.75);
  font-weight: 500;
`;

export const WhoWeAreDescription = styled.p`
  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 12px;
  }
  margin: 0;
  > a {
    font-weight: 700;
    color: inherit;
  }
`;

export const WhoWeAreMotto = styled.p`
  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 18px;
    margin: 0;
  }
  margin: 0;
  margin-bottom: 20px;
  font-size: 22px;
  padding: 5px;
  text-transform: uppercase;
  text-align: center;
  color: rgba(0, 0, 0, 0.75);
  text-shadow: 3px 3px 10px rgba(255, 255, 255, 0.85),
    -3px 3px 10px rgba(255, 255, 255, 0.85),
    -3px -3px 10px rgba(255, 255, 255, 0.85),
    3px -3px 10px rgba(255, 255, 255, 0.85);
`;

export const WhoWeAreWishes = styled.p`
  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
  margin: 0;
  padding: 0 10px;
  margin-bottom: 32px;
  font-size: 20px;
  line-height: calc(24 / 18);
  display: inline-block;
  color: rgba(0, 0, 0, 0.75);
  font-weight: 500;
`;
