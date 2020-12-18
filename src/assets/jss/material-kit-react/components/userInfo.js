import React from "react";
import PropTypes from "prop-types";

// Core Components
import Divider from "@material-ui/core/Divider";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Typography from "@material-ui/core/Typography";

// Firebase
import {
  getUserDisplayName,
  getUserBio,
  getArrayOfReviewsFromUser,
} from "database/firestore.js";

// Get CSS styles
const customStyles = {
  headerStyle: {
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
    fontSize: "1.2vw",
    padding: "0px 25px",
    margin: "20px 0px",
  },
  textStyle: {
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
    fontSize: "1.2vw",
    textAlign: "center",
    margin: "20px 0px 10px 0px",
  },
};

export default class UserInfo extends React.Component {
  // Set up props and state for Firebase functions
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      bio: "",
      num: 0,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  // Set state based on data from database
  componentDidMount() {
    getUserBio(this.props.username).then((value) => {
      this.setState({ bio: value });
    });
    getUserDisplayName(this.props.username).then((value) => {
      this.setState({ displayName: value });
    });
    getArrayOfReviewsFromUser(this.props.username).then((value) => {
      this.setState({ num: value.length });
    });
  }

  render() {
    return (
      <GridContainer
        direction="column"
        justify="center"
        alignItems="center"
        style={customStyles.center}
      >
        <GridItem xs={12}>
          <Typography style={customStyles.headerStyle}>
            {this.state.displayName == undefined
              ? this.props.username
              : this.state.displayName}
          </Typography>
          <Divider />
        </GridItem>
        <GridItem xs={12}>
          <Typography style={customStyles.textStyle}>
            {this.state.bio == undefined
              ? "This user has not created a bio"
              : this.state.bio}
          </Typography>
        </GridItem>
        <GridItem xs={12}>
          <Typography style={customStyles.textStyle}>
            {"This user has posted " + this.state.num + " reviews!"}
          </Typography>
          <br />
        </GridItem>
      </GridContainer>
    );
  }
}

// Define props
UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
};
