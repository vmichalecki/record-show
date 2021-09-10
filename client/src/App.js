import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";


import Home from "./pages/Home";
import Genres from "./pages/Genres";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logo from "./images/recordShow1.png"
import { Link } from 'react-router-dom';

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
      </div>
      <Router>
      <header className="bg-black d-flex justify-content-between align-items-center p-2">
          <Link to="/"><img width="200" src={Logo} alt={"logo"}/></Link>
          <div className="d-flex flex-column h5 justify-content-around">
          <Link className="text-white text-decoration-none pr-3 d-block text-right" to="/login">Login</Link>
          <Link className="text-white text-decoration-none pr-3 d-block text-right" to="/Signup">Signup</Link>
          <Link className="text-white text-decoration-none pr-3 d-block text-right" to="/Genres">Genres</Link>
          </div>
        </header>
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
