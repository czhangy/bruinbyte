import React from "react";

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
  }

  render() {
    // rating = 2;
    return (
      <StarRatings
        rating={this.state.rating}
        starRatedColor="blue"
        changeRating={this.changeRating}
        numberOfStars={5}
        name="rating"
      />
    );
  }
}

export default Ratings;
