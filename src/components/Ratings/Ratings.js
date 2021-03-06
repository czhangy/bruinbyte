import React from "react";
import PropTypes from "prop-types";

// Core Components
import StarRatings from "../../../node_modules/react-star-ratings";

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
    this.props.update(newRating);
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
  update: PropTypes.func.isRequired,
};

export default Ratings;
