import React, { useState } from "react";
import ImageConfigurationContext from "contexts/ParsedConfigurationContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeView from "views/HomeView/HomeView";
import StandardLayout from "layouts/StandardLayout/StandardLayout";
import MovieView from "views/HomeView/MovieView";
import { ThemeProvider } from "styled-components";
import useConfiguration from "hooks/useConfiguration";
import Theme from "types/Theme";
import darkTheme from "themes/darkTheme";
import lightTheme from "themes/lightTheme";

const App: React.FC = () => {
  const config = useConfiguration();
  const [theme, setTheme] = useState<Theme>(darkTheme);

  return (
    <ThemeProvider
      theme={{
        dark: darkTheme,
        light: lightTheme,
        current: theme,
        setTheme: setTheme,
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
