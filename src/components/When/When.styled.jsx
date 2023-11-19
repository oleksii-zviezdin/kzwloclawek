import styled from '@emotion/styled';

export const WhenSection = styled.section`
  @media screen and (max-width: 768px) {
    display: block;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  padding: 7vw 5vw;
  background-color: rgba(177, 175, 175, 0.85);
`;

export const WhenDiv = styled.div`
  @media screen and (max-width: 768px) {
    width: 85%;
    height: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
    height: 300px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2vw;
  align-items: center;

  font-size: 18px;
  width: 100%;

  backdrop-filter: blur(10px);

  outline: 5px solid transparent;
  border-radius: 20px;
  overflow: hidden;
`;

export const H2 = styled.h2`
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }

  margin: 0;
  margin-bottom: 1.5vw;
  font-size: 4vw;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.75);

  text-shadow: 5px 5px 10px rgba(255, 255, 255, 0.85),
    -5px 5px 10px rgba(255, 255, 255, 0.85),
    -5px -5px 10px rgba(255, 255, 255, 0.85),
    5px -5px 10px rgba(255, 255, 255, 0.85);
`;

export const WhenDescription = styled.p`
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  text-align: center;
  margin: 0;
  padding: 5px;
  font-size: 3vw;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.75);
`;
