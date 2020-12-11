/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

// Core Components
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// Custom Components
import TextFieldFunc from "components/CommentBox/TextFieldFunc.js";
import Ratings from "components/Ratings/Ratings.js";

export default function SimplePopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
        onClick={handleClick}>
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
        }}>
        <br />
        <br />
        <GridContainer direction="row" justify="center" alignItems="center">
          <GridItem xs={5}>
            <Typography style={customStyles.text} align="right">
              Rating:
            </Typography>
          </GridItem>
          <GridItem xs={7}>
            <Ratings restaurant = {props.restaurant}/>
          </GridItem>
          <GridItem xs={12}>
            <br />
            <TextFieldFunc />
            <br />
            <br />
          </GridItem>
        </GridContainer>
      </Popover>
    </div>
  );
}

SimplePopover.propTypes = {
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