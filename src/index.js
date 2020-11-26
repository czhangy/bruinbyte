import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0ProviderWithHistory";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// require('./ably');

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import AuthenticationButton from "./components/AuthenticationButton/authenticationButton.js";
import StarRatings from "../node_modules/react-star-ratings";

var hist = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory
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
      <AuthenticationButton />
      <StarRatings />
    </Auth0ProviderWithHistory>
  </BrowserRouter>,
  document.getElementById("root")
);
