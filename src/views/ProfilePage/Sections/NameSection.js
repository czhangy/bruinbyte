import React from "react";
import PropTypes from "prop-types";

// Firebase
import { getUserDisplayName } from "database/firestore.js";

// Get CSS styles
const customStyles = {
  nameText: {
    fontSize: "2vw",
  },
};

export default class NameSection extends React.Component {
  // Set up props and state for Firebase functions
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  // Set state from database data
  componentDidMount() {
    getUserDisplayName(this.props.name).then((value) => {
      this.setState({ displayName: value });
    });
  }

  // Return display name if it exists, otherwise use username
  render() {
    return (
      <p style={customStyles.nameText}>
        {this.state.displayName === undefined
          ? this.props.name
          : this.state.displayName}
      </p>
    );
  }
}

// Define props
NameSection.propTypes = {
  name: PropTypes.string.isRequired,
};
