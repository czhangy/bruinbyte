import React from "react";

// Core Components
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";

// Custom Components
import CommentCard from "../../../../components/CommentBox/CommentCard.js";

export default function RestPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const styles = {
    buttonStyle: {
      color: "#ffd100",
      backgroundColor: "#2774ae",
    },
  };

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        style={styles.buttonStyle}
        onClick={handleClick}
      >
        Reviews
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
      >
        <CommentCard />
      </Popover>
    </div>
  );
}
