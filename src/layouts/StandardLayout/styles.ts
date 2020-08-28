import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.current.bg.main};
  color: ${({ theme }) => theme.current.text.main};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: background-color 0.4s, color 0.4s;
`;
