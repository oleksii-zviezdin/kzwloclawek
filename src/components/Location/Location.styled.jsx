import styled from '@emotion/styled';

export const LocationSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  padding: 32px;
`;

export const LocationDiv = styled.div`
  font-size: 18px;
  text-align: center;
  width: 50%;
  color: rgba(0, 0, 0, 0.599);
`;

export const LocationIframe = styled.iframe`
  width: 400px;
  border: 0;
`;

export const H2 = styled.h2`
  font-size: 2vw;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.599);

  text-shadow: 10px 10px 10px rgba(255, 255, 255, 0.85),
    -10px 10px 10px rgba(255, 255, 255, 0.85),
    -10px -10px 10px rgba(255, 255, 255, 0.85),
    10px -10px 10px rgba(255, 255, 255, 0.85);
`;
