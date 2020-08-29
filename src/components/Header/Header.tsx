import React, { useCallback } from 'react';
import { FaAdjust } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import {
  Container,
  LeftSection,
  RightSection,
  ThemeToggle,
  DemoNote,
} from './styles';

const Header: React.FC = () => {
  const theme = useTheme();

  const handleThemeToggle = useCallback(() => {
    theme.setTheme(theme.current.isDark ? theme.light : theme.dark);
  }, [theme]);

  return (
    <Container>
      <DemoNote>
        This page is a demo which does not provide any actual video content.
      </DemoNote>
      <LeftSection />
      <RightSection>
        <ThemeToggle onClick={handleThemeToggle}>
          <FaAdjust />
        </ThemeToggle>
      </RightSection>
    </Container>
  );
};

export default Header;
