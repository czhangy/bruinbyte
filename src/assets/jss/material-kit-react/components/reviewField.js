import React, { useState } from "react";
import PropTypes from "prop-types";

// Core Components
import TextField from "@material-ui/core/TextField";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// Auth0
import { useAuth0 } from "@auth0/auth0-react";

export default function ReviewField(props) {
  const { user } = useAuth0();
  const username = JSON.stringify(user.name).substring(
    1,
    JSON.stringify(user.name).length - 1
  );
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    props.update(e.target.value);
    props.getUser(username);
  };

  return (
    <div className="TextFieldsFunc">
      <GridContainer direction="row" justify="center" alignItems="center">
        <GridItem xs={9}>
          <TextField
            id="standard-multiline-flexible"
            variant="outlined"
            label="What's on your mind?"
            multiline
            rowsMax={14}
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={value}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

ReviewField.propTypes = {
  update: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
};
