import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";


import Home from "./pages/Home";
import Genres from "./pages/Genres";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logo from "./images/recordShow1.png"


const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <header>
          <img width="200" src={Logo} alt={"logo"}/>
        </header>
      </div>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/genres">
              <Genres />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </div>
        </div>
      </Router>
    </ApolloProvider >
  );
}

export default App;
