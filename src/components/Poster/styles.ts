import styled from 'styled-components';

interface WrapperProps {
  width: number;
  height: number;
}

export const Wrapper = styled.div<WrapperProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ theme }) => theme.current.bg.alt};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  user-select: none;
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition-duration: 0.2s;
`;
