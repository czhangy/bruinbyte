import React, { useState } from "react";
import PropTypes from "prop-types";

// Core Components
import Button from "@material-ui/core/Button";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import TextField from "@material-ui/core/TextField";

// Firestore
import {
  setUserBio,
  setUserDisplayName,
  userExists,
} from "database/firestore.js";

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
  const [nameExists, checkName] = useState(true);
  const handleChange = (e) => {
    setValue(e.target.value);
    userExists(value).then((exists) => {
      checkName(exists);
    });
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
      onClick={() => {
        if (props.type == "username") {
          if (nameExists) {
            alert("That name is already taken, please select a new one");
          } else {
            setUserDisplayName(username, value);
            alert("Username changed!");
          }
        } else {
          setUserBio(username, value);
          alert("Bio changed!");
        }
      }}
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
