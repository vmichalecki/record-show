import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Genre from "./pages/Genres";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* Wrap page elements in Router component to keep track of location state */}
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">

          <div className="container">
            {/* Define routes to render different page components at different paths */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/genre">
              <Genre />
            </Route>
            {/* Define a route that will take in variable data */}

          </div>

        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
