import React, { useState } from "react";

// Core Components
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

const styles = {
  buttonStyle: {
    backgroundColor: "#2774ae",
    color: "#ffd100",
  },
};

export default function TextFieldsFunc() {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
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
        <GridItem xs={1}>
          <Button
            variant="contained"
            style={styles.buttonStyle}
            onClick={() => alert(value)}
          >
            Submit!
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
