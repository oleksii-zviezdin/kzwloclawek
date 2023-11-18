import styled from '@emotion/styled';

export const WhoWeAreMain = styled.main`
  margin: 0;
  padding: 20px;
  background-color: #b1afaf;
  backdrop-filter: blur(1px);

  border-bottom: 5px solid rgba(255, 255, 255, 0.5);
`;

export const WhoWeAreH2 = styled.h2`
  margin: 0;
  font-size: 22px;
  display: block;
  padding: 5px;
  text-transform: uppercase;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.599);
  text-shadow: 3px 3px 10px rgba(255, 255, 255, 0.85),
    -3px 3px 10px rgba(255, 255, 255, 0.85),
    -3px -3px 10px rgba(255, 255, 255, 0.85),
    3px -3px 10px rgba(255, 255, 255, 0.85);
`;

export const WhoWeAreWelcome = styled.p`
  margin: 0;
  padding: 5px;
  font-size: 18px;
  display: inline-block;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.599);
  font-weight: 500;
`;

export const WhoWeAreDescription = styled.p`
  margin: 0;
  padding: 5px;
  font-size: 18px;
  line-height: calc(24 / 18);
  display: inline-block;
  text-align: left;
  color: rgba(0, 0, 0, 0.599);
  font-weight: 400;
`;
