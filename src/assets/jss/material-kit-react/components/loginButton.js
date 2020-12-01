import React from "react";

// Core Components
import Button from "@material-ui/core/Button";

// Auth0
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      style={{
        backgroundColor: "#2774AE",
        color: "#FFD100",
        marginLeft: "20px",
        fontSize: "15px",
      }}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
  );
};

export default LoginButton;
