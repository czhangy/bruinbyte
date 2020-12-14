import React, { useState } from "react";
import PropTypes from "prop-types";

// Core Components
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// Firestore
import { createBio, createDisplayName } from "database/firestore.js";

export default function UserForm(props) {
  // Get fields
  const label =
    JSON.stringify(props.type).charAt(1).toUpperCase() +
    JSON.stringify(props.type).substring(
      2,
      JSON.stringify(props.type).length - 1
    );
  const username = JSON.stringify(props.name).substring(
    1,
    JSON.stringify(props.name).length - 1
  );
  // Update fields
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  // Button CSS
  const styles = {
    buttonStyle: {
      color: "#ffd100",
      backgroundColor: "#2774ae",
    },
  };

  // Generalize the button
  const saveButton = (
    <Button
      variant="contained"
      style={styles.buttonStyle}
      onClick={() =>
        props.type == "username"
          ? createDisplayName(username, value)
          : createBio(username, value)
      }
    >
      Save!
    </Button>
  );

  return (
    <GridContainer direction="row" justify="center" alignItems="center">
      <GridItem xs={9}>
        <TextField
          id="standard-multiline-flexible"
          variant="outlined"
          label={label}
          multiline
          rowsMax={14}
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={value}
        />
      </GridItem>
      <GridItem xs={2}>{saveButton}</GridItem>
    </GridContainer>
  );
}

// Define props
UserForm.propTypes = {
  type: PropTypes.oneOf(["username", "bio"]).isRequired,
  name: PropTypes.string.isRequired,
};

export { UserForm };
