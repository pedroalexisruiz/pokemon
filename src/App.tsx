import React from "react";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "styled-components";
import i18n from "./i18n/config";
import RouterConfig from "./navigation/routerConfig";
import { theme } from "./themes/default";

const App = (props) => (
  //@ts-ignore
  <ThemeProvider theme={theme}>
    <I18nextProvider i18n={i18n}>
      <RouterConfig {...props} />
    </I18nextProvider>
  </ThemeProvider>
);

export default App;
