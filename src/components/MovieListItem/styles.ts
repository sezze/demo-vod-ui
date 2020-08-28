import styled from 'styled-components';

export const Cover = styled.div`
  visibility: hidden;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  color: ${({ theme }) => theme.dark.text.main};
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: flex-end;
  font-size: 1.25rem;
  transition-duration: 0.2s;
`;

export const CoverContent = styled.div`
  visibility: hidden;
  position: relative;
  top: 1rem;
  opacity: 0;
  transition-duration: 0.2s;
  text-shadow: ${({ theme }) => theme.current.shadow(1)};
`;

export const Background = styled.div`
  transition-duration: 0.2s;
`;

export const Container = styled.div`
  width: 220px;
  height: 330px;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  user-select: none;
  transition-duration: 0.2s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 4px 8px ${({ theme }) => theme.current.accent.main};
  }

  &:hover > ${Cover} {
    visibility: visible;
    opacity: 1;
  }

  &:hover ${CoverContent} {
    visibility: visible;
    opacity: 1;
    top: 0;
  }

  &:hover > ${Background} {
    filter: blur(1px);
    transform: scale(1.025);
  }
`;
