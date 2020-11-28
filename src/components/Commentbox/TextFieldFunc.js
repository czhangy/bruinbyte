import React from "react";
//import PropTypes from "prop-types";
//import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export default function TextFieldsFunc() {
  return (
    <TextField
      id="standard-multiline-flexible"
      variant="outlined"
      label="Add Comment"
      multiline
      rowsMax={14}
      //helperText="!"
      fullWidth
      margin="normal"
      //value={this.state.value}
      //onChange={this.handleChange}
      //value={value}
      //onChange={handleChange}
    />
  );
}
