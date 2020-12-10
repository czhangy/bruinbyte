import React from "react";
import PropTypes from "prop-types";

// Core Components
import StarRatings from "../../../node_modules/react-star-ratings";

// Firestore
import { addStarRating } from "../../database/firestore.js";

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
    this.changeRating = this.changeRating.bind(this);
  }
  changeRating(newRating) {
    this.setState({
      rating: newRating,
    });
    addStarRating("me", this.props.restaurant, this.state.rating);
    // alert("written");
  }

  render() {
    return (
      <StarRatings
        rating={this.state.rating}
        starRatedColor="#ffd100"
        starHoverColor="#2774ae"
        changeRating={this.changeRating}
        numberOfStars={5}
        name="rating"
      />
    );
  }
}

Ratings.propTypes = {
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

export default Ratings;
