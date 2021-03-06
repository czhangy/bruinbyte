import React from "react";
import PropTypes from "prop-types";

// Firebase
import { getUserBio } from "database/firestore.js";

// Stylize
const customStyles = {
  bioText: {
    fontSize: "1.4vw",
  },
};

export default class BioSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: "",
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  // Set state based on database access
  componentDidMount() {
    getUserBio(this.props.name)
      .then((value) => {
        this.setState({ bio: value });
      })
      .catch(() => {
        this.setState({ bio: "No bio found, make one below!" });
      });
  }

  // Return bio, even if blank
  render() {
    return <p style={customStyles.bioText}> {this.state.bio} </p>;
  }
}

// Define props
BioSection.propTypes = {
  name: PropTypes.string.isRequired,
};
