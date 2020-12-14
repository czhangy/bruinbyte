/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

// Core Components
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";

// Custom Components
import Submission from "components/Submission/Submission.js";

// Auth0
import { useAuth0 } from "@auth0/auth0-react";

export default function AddReviewCard(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();

  const handleClick = (event) => {
    isAuthenticated ? setAnchorEl(event.currentTarget) : loginWithRedirect();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const customStyles = {
    buttonStyle: {
      backgroundColor: "#2774ae",
      color: "#ffd100",
    },
    text: {
      fontWeight: "bold",
      fontSize: "2vw",
      color: "#2774ae",
    },
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        style={customStyles.buttonStyle}
        onClick={handleClick}
      >
        ADD REVIEW
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          style: { width: "70%" },
        }}
      >
        <br />
        <br />
        <Submission restaurant = {props.restaurant}/>
      </Popover>
    </div>
  );
}

AddReviewCard.propTypes = {
  restaurant: PropTypes.oneOf([
    "california-pizza-kitchen",
    "cava",
    "chick-fil-a",
    "corner-bakery",
    "enzos",
    "fat-sals",
    "fellow",
    "gushi",
    "hangry-moons",
    "house-of-meatballs",
    "in-n-out",
    "mr-rice",
    "taco-bell",
    "tender-greens",
    "tlt",
  ]).isRequired,
};
