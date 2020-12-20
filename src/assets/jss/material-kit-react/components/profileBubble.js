import React from "react";

// @material-ui icons
import AccountCircle from "@material-ui/icons/AccountCircle";

// Core Components
import IconButton from "@material-ui/core/IconButton";

// Auth0
import { useAuth0 } from "@auth0/auth0-react";

// Images
import df from "assets/img/faces/default.png";

// Get CSS styles
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
    width: "10%",
    border: "2px solid #FFB81C",
    position: "relative",
    right: "-190%",
  },
};

const ProfileBubble = () => {
  const { isAuthenticated } = useAuth0();

  // If signed in, return a different bubble image
  if (isAuthenticated) {
    return (
      <a href="/profile" style={styles.anchorEl}>
        <img src={df} alt="..." style={styles.profileImg} />
      </a>
    );
  } // Otherwise, return default bubble image
  else
    return (
      <IconButton style={styles.icon} href="/profile">
        <AccountCircle />
      </IconButton>
    );
};

export default ProfileBubble;
