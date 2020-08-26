import styled from "styled-components";

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  height: 100%;
  flex-wrap: nowrap;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    height: 12px;
    visibility: hidden;
    background-color: ${({ theme }) => theme.current.bg.alt};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.current.item.alt.normal};
    border-radius: 999px;
    visibility: hidden;

    &:hover {
      background-color: ${({ theme }) => theme.current.item.alt.hover};
    }
    &:active {
      background-color: ${({ theme }) => theme.current.item.alt.active};
    }
  }
`;

export const ChildContainer = styled.div`
  height: 100%;
  margin: 8px 0;
  display: flex;
  scroll-snap-align: start;
`;

export const ChildWrapper = styled.div`
  scroll-snap-align: start;
  padding-left: 16px;
  &:first-child {
    padding-left: 64px;
  }
  &:last-child {
    padding-right: 64px;
  }
`;

export const ScrollSnapButton = styled.div`
  background-color: ${({ theme }) => theme.current.item.alt.normal};
  width: 64px;
  height: 64px;
  margin: 0 8px;
  position: absolute;
  top: calc(50% - 32px);
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  user-select: none;
  transition-duration: 0.2s;
  visibility: hidden;
  opacity: 0;
  color: ${({ theme }) => theme.current.item.alt.text};
  font-size: 2rem;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.current.shadow(2)};

  &:hover {
    border-radius: 50% 8px 8px 50%;
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.current.item.alt.hover};
    box-shadow: ${({ theme }) => theme.current.shadow(4)};
  }

  &:active {
    transform: scale(1);
    background-color: ${({ theme }) => theme.current.item.alt.active};
    box-shadow: ${({ theme }) => theme.current.shadow(1)};
  }

  &:last-child:hover {
    border-radius: 8px 50% 50% 8px;
  }
`;

export const Container = styled.div`
  position: relative;

  &:hover > ${ScrollSnapButton} {
    visibility: visible;
    opacity: 1;
  }

  &:hover > ${ScrollContainer}::-webkit-scrollbar {
    visibility: visible;
  }
  &:hover > ${ScrollContainer}::-webkit-scrollbar-thumb {
    visibility: visible;
  }
`;
