import React from "react";

import ThemeProvider from "./context/Theme";

import Routes from "./routes";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <ThemeProvider>
      <Routes />

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
