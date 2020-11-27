import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
//import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

// const useStyles = makeStyles((theme) => ({
//   typography: {
//     padding: theme.spacing(2),
//   },
// }));

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: "25ch",
//   },
// }));

export default function SimplePopover() {
  //const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        ADD COMENT
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
        <TextField
          id="standard-multiline-flexible"
          variant="outlined"
          label="Add Comment"
          multiline
          rowsMax={14}
          //helperText="Full width!"
          fullWidth
          margin="normal"
          //value={value}
          //onChange={handleChange}
        />
        <Button aria-describedby={id} variant="contained" color="primary">
          Submit!
        </Button>
        {/* <TextField id="outlined-basic" label="Add Comment" variant="outlined" /> */}
        {/* <Typography className={classes.typography}>
          The content of the Popover.
        </Typography> */}
      </Popover>
    </div>
  );
}
