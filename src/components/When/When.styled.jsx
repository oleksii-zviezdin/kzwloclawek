import styled from '@emotion/styled';

export const WhenSection = styled.section`
  @media screen and (max-width: 768px) {
    display: block;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  padding: 5vw 5vw;
  background-color: rgba(177, 175, 175, 0.75);
`;

export const WhenDiv = styled.div`
  @media screen and (max-width: 768px) {
    display: block;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5vw;
  }

  @media screen and (max-width: 360px) {
    width: 90%;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2vw;
  align-items: center;

  font-size: 18px;
  width: 100%;

  backdrop-filter: blur(10px);
  border-radius: 8px;
  overflow: hidden;
`;

export const WhenDescription = styled.p`
  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }

  text-align: center;
  margin: 0;
  padding: 5px;
  font-size: 2vw;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.75);
`;

export const H2 = styled.h2`
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
  font-size: 42px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.75);

  text-shadow: 5px 5px 10px rgba(255, 255, 255, 0.85),
    -5px 5px 10px rgba(255, 255, 255, 0.85),
    -5px -5px 10px rgba(255, 255, 255, 0.85),
    5px -5px 10px rgba(255, 255, 255, 0.85);
`;
