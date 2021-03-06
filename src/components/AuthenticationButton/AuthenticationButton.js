import React from "react";

import LoginButton from "../../assets/jss/material-kit-react/components/loginButton";
import LogoutButton from "../../assets/jss/material-kit-react/components/logoutButton";
import ReactLoading from "react-loading";

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <ReactLoading type={"spinningBubbles"} color={"#FFD100"} />;
  }
  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;
