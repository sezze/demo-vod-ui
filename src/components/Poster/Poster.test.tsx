import React from 'react';
import { render } from '@testing-library/react';
import useSources from 'hooks/useSources';
import { ThemeProvider } from 'styled-components';
import darkTheme from 'themes/darkTheme';
import lightTheme from 'themes/lightTheme';
import Poster from './Poster';

jest.mock('hooks/useSources');

type MockedUseSource = jest.Mock<ReturnType<typeof useSources>>;

const ThemedPoster = (
  <ThemeProvider
    theme={{
      dark: darkTheme,
      light: lightTheme,
      current: lightTheme,
      setTheme: () => {},
    }}
  >
    <Poster width={64} height={128} />
  </ThemeProvider>
);

describe('renders correctly', () => {
  test('without source', () => {
    (useSources as MockedUseSource).mockReturnValue({
      src: undefined,
      srcSet: undefined,
    });

    render(ThemedPoster);
  });

  test('with mocked source', () => {
    (useSources as MockedUseSource).mockReturnValue({
      src: '/source',
      srcSet: '/source-set',
    });

    const { getByTestId } = render(ThemedPoster);
    const img = getByTestId('poster-image') as HTMLImageElement;

    expect(img.src).toContain('/source');
    expect(img.srcset).toContain('/source-set');
  });
});
