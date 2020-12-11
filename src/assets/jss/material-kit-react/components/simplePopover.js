import React from "react";

// Core Components
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";

// Custom Components
import TextFieldFunc from "components/CommentBox/TextFieldFunc.js";

// IMPORT FUNCTION FROM FIRESTORE.JS
import { getArrayOfReviews } from "/Users/brianroysar/Desktop/bruinbyte/src/database/firestore.js";

export default function SimplePopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    getArrayOfReviews("cava");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    buttonStyle: {
      backgroundColor: "#2774ae",
      color: "#ffd100",
    },
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        style={styles.buttonStyle}
        onClick={handleClick}
      >
        ADD REVIEW
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          style: { width: "70%" },
        }}
      >
        {" "}
        <TextFieldFunc />
      </Popover>
    </div>
  );
}
