import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0ProviderWithHistory";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory
      domain="bruinbyte.us.auth0.com"
      clientId="ZJIcTawo9TVY5NJzEU55DblmrByd7jOj"
      redirectUri={window.location.origin + "/bruinbyte"}
    >
      <Router history={hist} basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/search" component={Components} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
    </Auth0ProviderWithHistory>
  </BrowserRouter>,
  document.getElementById("root")
);
