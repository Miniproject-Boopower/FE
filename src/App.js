import React from "react";
import styled from "styled-components";
import RouterComponent from "./router";
import NavBar from "./components/navbar";
import { BrowserRouter } from "react-router-dom";

const AppWrapper = styled.div`
  display: flex;
  justify-content:center ;
  flex-direction: column;
  align-items: center;
`;


const Main = styled.main`
  flex: 1;
`;

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Main>
          <RouterComponent />
        </Main>
        <NavBar />
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
