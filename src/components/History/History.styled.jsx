import styled from '@emotion/styled';

export const HistorySection = styled.section`
  text-align: justify;
  margin: 0;
  padding: 4vw;
  background-color: rgba(177, 175, 175, 0.85);
`;

export const HistoryH2 = styled.h2`
  @media screen and (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 10px;
  }

  margin: 0;
  margin-bottom: 20px;
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

export const HistoryDescription = styled.p`
  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 1.5;
  }

  margin: 0;
  margin-bottom: 10px;
  padding: 15px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.75;
  color: rgba(0, 0, 0, 0.85);
`;
