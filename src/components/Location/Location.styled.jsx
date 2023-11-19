import styled from '@emotion/styled';

export const LocationSection = styled.section`
  @media screen and (max-width: 768px) {
    display: block;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  padding: 5vw 5vw;
`;

export const LocationDiv = styled.div`
  @media screen and (max-width: 768px) {
    outline: 0.5vw solid rgba(255, 255, 255, 0.5);
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
  width: 50%;

  backdrop-filter: blur(10px);
  border-radius: 8px;
  outline: 5px solid rgba(255, 255, 255, 0.5);
  overflow: hidden;
`;

export const LocationDescription = styled.p`
  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }

  text-align: center;
  margin: 0;
  padding: 5px;
  font-size: 2vw;
  color: rgba(247, 247, 247, 0.95);
`;

export const LocationIframe = styled.iframe`
  width: 400px;
  border: 0;
`;

export const H2 = styled.h2`
  font-size: 22px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.75);

  text-shadow: 5px 5px 10px rgba(255, 255, 255, 0.85),
    -5px 5px 10px rgba(255, 255, 255, 0.85),
    -5px -5px 10px rgba(255, 255, 255, 0.85),
    5px -5px 10px rgba(255, 255, 255, 0.85);
`;

export const Iframe = styled.iframe`
  width: 90%;
  height: 250px;
  @media screen and (min-width: 480px) {
    height: 300px;
  }
  @media screen and (min-width: 1024px) {
    height: 400px;
  }
`;
