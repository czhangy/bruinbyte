import React from "react";
import PropTypes from "prop-types";

// Firebase
import { getUserBio } from "database/firestore.js";

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

  componentDidMount() {
    getUserBio(this.props.name).then((value) => {
      this.setState({ bio: value });
    });
  }

  render() {
    return <p style={customStyles.bioText}> {this.state.bio} </p>;
  }
}

BioSection.propTypes = {
  name: PropTypes.string.isRequired,
};
