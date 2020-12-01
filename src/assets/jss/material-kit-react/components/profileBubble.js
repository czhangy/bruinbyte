import React from "react";

// @material-ui icons
import AccountCircle from "@material-ui/icons/AccountCircle";

// Core Components
import IconButton from "@material-ui/core/IconButton";

// Auth0
import { useAuth0 } from "@auth0/auth0-react";

const styles = {
  icon: {
    transform: "scale(2)",
    color: "#FFB81C",
  },
  anchorEl: {
    display: "inline-block",
    width: "50%",
  },
  profileImg: {
    borderRadius: "50%",
    width: "80%",
    border: "2px solid #FFB81C",
    position: "relative",
    right: "-70px",
  },
};

const ProfileBubble = () => {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    const { user } = useAuth0();
    const { picture } = user;
    return (
      <a href="/profile" style={styles.anchorEl}>
        <img src={picture} alt="..." style={styles.profileImg} />
      </a>
    );
  } else
    return (
      <IconButton style={styles.icon}>
        <AccountCircle />
      </IconButton>
    );
};

export default ProfileBubble;
