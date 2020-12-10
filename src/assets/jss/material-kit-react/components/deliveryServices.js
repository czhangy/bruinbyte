import React from "react";
import PropTypes from "prop-types";

// @material-ui
import FastfoodIcon from "@material-ui/icons/Fastfood";

// Core Components
import Button from "@material-ui/core/Button";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

const customStyles = {
  buttonStyle: {
    backgroundColor: "#2774ae",
    color: "#ffd100",
    margin: "15px",
    width: "140px",
  },
  disabledStyle: {
    backgroundColor: "#a9a9a9",
    color: "#2a2a2a",
    margin: "15px",
    width: "140px",
  },
};

export default function DeliveryServices(props) {
  return (
    <GridContainer direction="row" justify="space-evenly" alignItems="center">
      <GridItem xs={6}>
        <Button
          style={
            props.doordash
              ? customStyles.buttonStyle
              : customStyles.disabledStyle
          }
          startIcon={<FastfoodIcon />}
          disabled={!props.doordash}
        >
          Doordash
        </Button>
      </GridItem>
      <GridItem xs={6}>
        <Button
          style={
            props.grubhub
              ? customStyles.buttonStyle
              : customStyles.disabledStyle
          }
          startIcon={<FastfoodIcon />}
          disabled={!props.grubhub}
        >
          Grubhub
        </Button>
      </GridItem>
      <GridItem xs={6}>
        <Button
          style={
            props.ubereats
              ? customStyles.buttonStyle
              : customStyles.disabledStyle
          }
          startIcon={<FastfoodIcon />}
          disabled={!props.ubereats}
        >
          UberEats
        </Button>
      </GridItem>
      <GridItem xs={6}>
        <Button
          style={
            props.postmates
              ? customStyles.buttonStyle
              : customStyles.disabledStyle
          }
          startIcon={<FastfoodIcon />}
          disabled={!props.postmates}
        >
          Postmates
        </Button>
      </GridItem>
    </GridContainer>
  );
}

DeliveryServices.propTypes = {
  doordash: PropTypes.bool.isRequired,
  grubhub: PropTypes.bool.isRequired,
  ubereats: PropTypes.bool.isRequired,
  postmates: PropTypes.bool.isRequired,
};
