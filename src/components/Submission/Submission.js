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
import { addStarRating, addReview } from "database/firestore.js";

const customStyles = {
  text: {
    fontWeight: "bold",
    fontSize: "2vw",
    color: "#2774ae",
  },
  bigText: {
    fontWeight: "bold",
    fontSize: "3vw",
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
      status: 0,
      username: "",
    };
    this.changeComment = this.changeComment.bind(this);
    this.changeRating = this.changeRating.bind(this);
    this.handleWrite = this.handleWrite.bind(this);
    this.getUsername = this.getUsername.bind(this);
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

  getUsername(user) {
    this.setState({
      username: user,
    });
  }

  handleWrite() {
    addStarRating(this.state.username, this.props.restaurant, this.state.stars);
    addReview(this.state.username, this.props.restaurant, this.state.text);
    alert("written");
    this.setState({
      status: 1,
    });
  }

  render() {
    if (!this.state.status) {
      // default
      return (
        <GridContainer direction="row" justify="center" alignItems="center">
          <GridItem xs={5}>
            <Typography style={customStyles.text} align="right">
              Rating:
            </Typography>
          </GridItem>
          <GridItem xs={7}>
            <Ratings update={this.changeRating} />
          </GridItem>
          <GridItem xs={12}>
            <br />
            <TextFieldFunc
              update={this.changeComment}
              getUser={this.getUsername}
            />
          </GridItem>
          <GridItem xs={1}>
            <br />
            <Button
              variant="contained"
              style={customStyles.buttonStyle}
              onClick={() => this.handleWrite()}
            >
              Submit!
            </Button>
            <br />
            <br />
          </GridItem>
        </GridContainer>
      );
    } else if (this.state.status == 1) {
      // rating just submitted
      return (
        <GridContainer direction="row" justify="center" alignItems="center">
          <GridItem xs={12}>
            <br />
            <br />
            <br />
            <br />
            <Typography style={customStyles.bigText} align="center">
              Rating submitted!
            </Typography>
            <br />
            <br />
            <br />
            <br />
            <br />
          </GridItem>
        </GridContainer>
      );
    }
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
