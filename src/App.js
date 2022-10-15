import React, {useState} from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./Components/UI/themes";
import { ThemeButton } from "./Components/UI";
import ThemeToggler from "./Components/ThemeToggler";
function App() {
const [theme, setTheme] = useState(true)

  const toggleThemehandler = ()=>{
    setTheme((theme)=> !theme)
  }

  return (
    <ThemeProvider theme={theme ? LightTheme : DarkTheme}>
      <GlobalStyle />
      <ThemeButton onClick={toggleThemehandler}>
        <ThemeToggler theme={theme}/>
      </ThemeButton>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
