import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.js";
import Pages from "./Pages/index.js";


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Pages />
    </ThemeProvider>
  );
}

export default App;
