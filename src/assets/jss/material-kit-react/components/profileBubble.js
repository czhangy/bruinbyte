import React from "react";

// @material-ui icons
import AccountCircle from "@material-ui/icons/AccountCircle";

// Auth0
import { useAuth0 } from "@auth0/auth0-react";

const ProfileBubble = () => {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    const { user } = useAuth0();
    const { picture } = user;
    return (
      <a
        href="/profile"
        style={{
          display: "inline-block",
          width: "50%",
        }}
      >
        <img
          src={picture}
          alt="..."
          style={{
            borderRadius: "50%",
            width: "100%",
            border: "2px solid #FFB81C",
          }}
        />
      </a>
    );
  } else return <AccountCircle />;
};

export default ProfileBubble;
