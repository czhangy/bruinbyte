import React from "react";
import PropTypes from "prop-types";

// Core Components
import StarRatings from "../../../../../node_modules/react-star-ratings";

// Firebase
import { getStarRating } from "database/firestore.js";

export default class RatingsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    getStarRating(this.props.restaurant).then((value) => {
      this.setState({ rating: value });
    });
  }

  render() {
    return (
      <StarRatings
        rating={this.state.rating}
        starRatedColor="#ffd100"
        starDimension="75px"
      />
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
