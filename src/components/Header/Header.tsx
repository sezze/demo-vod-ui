import React, { useCallback } from 'react';
import { FaAdjust } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { Container, LeftSection, RightSection, ThemeToggle } from './styles';

const Header: React.FC = () => {
  const theme = useTheme();

  const handleThemeToggle = useCallback(() => {
    theme.setTheme(theme.current.isDark ? theme.light : theme.dark);
  }, [theme]);

  return (
    <Container>
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
