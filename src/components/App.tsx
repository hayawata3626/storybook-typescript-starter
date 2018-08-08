import * as React from "react";
import { theme } from "../theme";
import { ThemeProvider } from "styled-components";
import Button from "./Button";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button />
    </ThemeProvider>
  );
};

export default App;
