import styled from '@emotion/styled';

export const ActsSection = styled.section`
  text-align: justify;
  margin: 0;
  padding: 2vw;
  background-color: rgba(177, 175, 175, 0.85);
`;

export const ActsH2 = styled.h2`
  @media screen and (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 10px;
  }

  margin: 0;
  margin-bottom: 10px;
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

export const ActsList = styled.ul`
  @media screen and (max-width: 480px) {
    padding: 3vw;
    margin-bottom: 15px;
  }
  margin: 0;
  padding: 24px;
  text-align: left;
  margin-bottom: 50px;
`;

export const ActsListItem = styled.li`
  @media screen and (max-width: 480px) {
  }

  margin: 0;
  margin-bottom: 5px;

  font-size: 18px;
  line-height: calc(24 / 18);
  display: inline-block;
  text-align: justify;
  color: rgba(0, 0, 0, 0.75);
  font-weight: 500;

  border-radius: 2vw;
  transition-duration: 500ms;

  &:hover,
  &:focus {
    > a {
      color: rgba(255, 255, 255, 0.8);
    }
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

export const ActsDescription = styled.a`
  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 1.5;
    padding: 2vw;
  }

  display: inline-block;
  margin: 0;
  padding: 15px;

  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.75;
  color: rgba(0, 0, 0, 0.85);

  transition-duration: 500ms;
`;
