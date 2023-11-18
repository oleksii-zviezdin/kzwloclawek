import styled from '@emotion/styled';

export const LocationSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  padding: 5vw 5vw;
  border-bottom: 5px solid rgba(255, 255, 255, 0.5);
`;

export const LocationDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2vw;
  align-items: center;

  font-size: 18px;
  width: 50%;
  color: rgba(0, 0, 0, 0.599);

  backdrop-filter: blur(10px);
  border-radius: 8px;
  outline: 5px solid rgba(255, 255, 255, 0.5);
  overflow: hidden;
`;
export const LocationDescription = styled.p`
  margin: 0;
  padding: 5px;
  font-size: 2vw;
  width: 50%;
  color: rgba(247, 247, 247, 0.85);
`;

export const LocationIframe = styled.iframe`
  width: 400px;
  border: 0;
`;

export const H2 = styled.h2`
  font-size: 2.5vw;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.599);

  text-shadow: 5px 5px 10px rgba(255, 255, 255, 0.85),
    -5px 5px 10px rgba(255, 255, 255, 0.85),
    -5px -5px 10px rgba(255, 255, 255, 0.85),
    5px -5px 10px rgba(255, 255, 255, 0.85);
`;
