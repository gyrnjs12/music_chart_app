import React, { useContext } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import NavBar from "./components/Nav";
import ChartTemplate from "./components/ChartTemplate";
import ChartHead from "./components/ChartHead";
import ChartList from "./components/ChartList";
import ChartProvider from "./components/Provider/ChartProvider.component";
import theme from "./components/theme/theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #e9ecef;
  }
  `;
// 사용하고자 하는 자식 컴포넌트를 밖에서 <Provider>로 감싸주기
function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ChartProvider>
          <NavBar />
          <ChartTemplate>
            <ChartHead />
            <ChartList />
          </ChartTemplate>
        </ChartProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
