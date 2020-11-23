import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "./assets/jss/material-kit-react/components/loginButton.js";

import "assets/scss/material-kit-react.scss?v=1.9.0";
require('./ably');
// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Auth0Provider
    domain="bruinbyte.us.auth0.com"
    clientId="ZJIcTawo9TVY5NJzEU55DblmrByd7jOj"
    redirectUri={window.location.origin}
  >
    <Router history={hist}>
      <Switch>
        <Route path="/landing-page" component={LandingPage} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/" component={Components} />
      </Switch>
        </Router>
        <LoginButton />
  </Auth0Provider>,
  document.getElementById("root")
);
