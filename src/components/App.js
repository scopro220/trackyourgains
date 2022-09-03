import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import DashBoard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/dashboard" exact component={DashBoard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
