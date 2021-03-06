import React from "react";
import PropTypes from "prop-types";

// Core Components
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";

// Custom Components
import RestaurantCard from "components/RestaurantCard/RestaurantCard.js";

export default function RestPopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const styles = {
    buttonStyle: {
      color: "#ffd100",
      backgroundColor: "#2774ae",
    },
  };

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        style={styles.buttonStyle}
        onClick={handleClick}
      >
        Reviews
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <RestaurantCard restaurant={props.restaurant} />
      </Popover>
    </div>
  );
}

RestPopover.propTypes = {
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
