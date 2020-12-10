import React from "react";
import PropTypes from "prop-types";

// Core Components
import StarRatings from "../../../../../node_modules/react-star-ratings";
import Typography from "@material-ui/core/Typography";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// Firebase
import { getStarRating } from "database/firestore.js";
import { getNumStarRatings } from "database/firestore.js";

const customStyles = {
  text: {
    fontWeight: "bold",
    fontSize: "1.5vw",
    color: "#ffd100",
  },
};

export default class RatingsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      num: 0,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    getStarRating(this.props.restaurant).then((value) => {
      this.setState({ rating: value });
    });
    getNumStarRatings(this.props.restaurant).then((value) => {
      this.setState({ num: value });
    });
  }

  render() {
    return (
      <GridContainer direction="row" justify="flex-start" alignItems="center">
        <GridItem xs={12}>
          <StarRatings
            rating={this.state.rating}
            starRatedColor="#ffd100"
            starDimension="75px"
          />
          <Typography style={customStyles.text}>
            ({this.state.num} Ratings)
          </Typography>
        </GridItem>
      </GridContainer>
    );
  }
}

RatingsView.propTypes = {
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
