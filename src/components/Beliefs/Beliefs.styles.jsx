import styled from '@emotion/styled';

export const BeliefsSection = styled.section`
  text-align: center;
  margin: 0;
  padding: 4vw;
  background-color: rgba(177, 175, 175, 0.85);
`;

export const BeliefsH2 = styled.h2`
  @media screen and (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 10px;
  }

  margin: 0;
  margin-bottom: 10px;
  font-size: 32px;
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

export const BeliefsH3 = styled.h3`
  @media screen and (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 10px;
  }

  margin: 0;
  margin-bottom: 15px;
  font-size: 22px;
  display: inline-block;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.75);
  font-weight: 700;
`;

export const BeliefsList = styled.ul`
  @media screen and (max-width: 480px) {
    padding: 3vw;
    margin-bottom: 15px;
  }
  margin: 0;
  padding: 1vw;
  margin-bottom: 50px;
  background-color: rgba(243, 243, 243, 0.25);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  border-radius: 1.5vw;
`;

export const BeliefsListItem = styled.li`
  @media screen and (max-width: 480px) {
  }

  margin: 0;
  margin-bottom: 5px;
  padding: 5px;

  font-size: 18px;
  line-height: calc(24 / 18);
  display: inline-block;
`;

export const BeliefsDescription = styled.p`
  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 1.5;
    text-align: justify;
  }

  text-align: center;
  margin: 0;
  padding: 5px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.75;
  color: rgba(0, 0, 0, 0.85);
`;
