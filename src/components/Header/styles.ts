import styled from 'styled-components';

export const Container = styled.header``;

export const LeftSection = styled.div``;

export const RightSection = styled.div``;

export const ThemeToggle = styled.div``;

export const DemoNote = styled.div`
  background-color: ${({ theme }) => theme.current.bg.alt};
  color: ${({ theme }) => theme.current.text.alt};
  font-size: 1rem;
  padding: 0.125rem 0.5rem 0.25rem;
  box-shadow: ${({ theme }) => theme.current.shadow(1)};
  transition-duration: 0.3s;
  text-align: center;
`;
