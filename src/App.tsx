import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import * as S from "./styles"


const Camera = lazy(() => import("./pages/Camera/Camera"));
const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
    <S.Navbar>
      <S.Brand>
        Lofino
      </S.Brand>
    </S.Navbar>
    <Header />
    <Switch>
      <Route path="/camera">
        <Camera />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </Suspense>
  </Router>
  );
}


export default App;
