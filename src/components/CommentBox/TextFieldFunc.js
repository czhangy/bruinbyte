import React, { useState } from "react";

// Core Components
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function TextFieldsFunc() {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="TextFieldsFunc">
      <TextField
        id="standard-multiline-flexible"
        variant="outlined"
        label="Add Comment"
        multiline
        rowsMax={14}
        fullWidth
        margin="normal"
        onChange={handleChange}
        value={value}
      />
      <Button variant="contained" color="primary" onClick={() => alert(value)}>
        Submit!
      </Button>
    </div>
  );
}
