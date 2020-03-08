import React, { createContext, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./page/Home";
import { Container, CssBaseline } from "@material-ui/core";
import { mainReducer, initialMainReducerState } from "./reducer";

export const MainContext = createContext()

const App = () => {
  const [state, dispatcher] = useReducer(mainReducer, initialMainReducerState);
  return (
    <>
      <main style={{ marginTop: "50px" }}>
        <MainContext.Provider value={{ state, dispatcher }}>
        <Router>
          <CssBaseline />
          <Container maxWidth="md">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </Container>
        </Router>
        </MainContext.Provider>
      </main>
    </>
  );
}

export default App;
