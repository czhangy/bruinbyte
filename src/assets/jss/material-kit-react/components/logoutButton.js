import React from "react";

// Core Components
import Button from "@material-ui/core/Button";

// Auth0
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      style={{
        backgroundColor: "#2774AE",
        color: "#FFD100",
        marginLeft: "20px",
        fontSize: "15px",
      }}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
