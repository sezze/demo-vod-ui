import React, { useState } from 'react';
import ImageConfigurationContext from 'contexts/ParsedConfigurationContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeView from 'views/HomeView/HomeView';
import StandardLayout from 'layouts/StandardLayout/StandardLayout';
import MovieView from 'views/HomeView/MovieView';
import { ThemeProvider } from 'styled-components';
import useConfiguration from 'hooks/useConfiguration';
import darkTheme from 'themes/darkTheme';
import lightTheme from 'themes/lightTheme';
import useSystemTheme from 'hooks/useSystemTheme';

const App: React.FC = () => {
  const config = useConfiguration();
  const systemTheme = useSystemTheme(lightTheme, darkTheme);
  const [isUsingSystemTheme, setUsingSystemTheme] = useState(true);
  const [userTheme, setUserTheme] = useState(systemTheme);

  return (
    <ThemeProvider
      theme={{
        dark: darkTheme,
        light: lightTheme,
        current: systemTheme,
        setTheme: setUserTheme,
      }}
    >
      <ImageConfigurationContext.Provider value={config}>
        <BrowserRouter>
          <StandardLayout>
            <Switch>
              <Route exact path="/">
                <HomeView />
              </Route>
              <Route path="/movie/:id">
                <MovieView />
              </Route>
            </Switch>
          </StandardLayout>
        </BrowserRouter>
      </ImageConfigurationContext.Provider>
    </ThemeProvider>
  );
};

export default App;
