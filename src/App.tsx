import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

const App = () => {
  return <ThemeProvider theme={theme}>Biccas</ThemeProvider>;
};

export default App;
