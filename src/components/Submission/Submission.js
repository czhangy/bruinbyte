import React from "react";
import PropTypes from "prop-types";

// Core Components
import Button from "@material-ui/core/Button";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Typography from "@material-ui/core/Typography";

// Custom Components
import TextFieldFunc from "components/CommentBox/TextFieldFunc.js";
import Ratings from "components/Ratings/Ratings.js";

// Firestore
import { addStarRating } from "database/firestore.js";

const customStyles = {
  text: {
    fontWeight: "bold",
    fontSize: "2vw",
    color: "#2774ae",
  },
  buttonStyle: {
    backgroundColor: "#2774ae",
    color: "#ffd100",
  },
};

export default class Submission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: -1,
      text: "",
    };
    this.changeComment = this.changeComment.bind(this);
    this.changeRating = this.changeRating.bind(this);
    this.handleWrite = this.handleWrite.bind(this);
  }

  changeRating(newRating) {
    this.setState({
      stars: newRating,
    });
  }

  changeComment(newComment) {
    this.setState({
      text: newComment,
    });
  }

  handleWrite() {
    addStarRating("placeholder", this.props.restaurant, this.state.stars);
    // write comment code
    alert("written");
  }

  render() {
    return (
      <GridContainer direction="row" justify="center" alignItems="center">
        <GridItem xs={5}>
          <Typography style={customStyles.text} align="right">
            Rating:
          </Typography>
        </GridItem>
        <GridItem xs={7}>
          <Ratings
            restaurant={this.props.restaurant}
            update={this.changeRating}
          />
        </GridItem>
        <GridItem xs={12}>
          <br />
          <TextFieldFunc />
          <br />
          <br />
        </GridItem>
        <GridItem xs={12}>
          <Button
            variant="contained"
            style={customStyles.buttonStyle}
            onClick={() => this.handleWrite()}
          >
            Submit!
          </Button>
        </GridItem>
      </GridContainer>
    );
  }
}

Submission.propTypes = {
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
