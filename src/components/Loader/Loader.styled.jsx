import styled from '@emotion/styled';

export const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  backdrop-filter: blur(10px);
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;
