/* eslint-disable */
import React from "react";
import { useState, useEffect } from "react";

// @material-ui
import { makeStyles } from "@material-ui/core/styles";

// @material-ui icons
import FastfoodIcon from "@material-ui/icons/Fastfood";

// Core Components
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Popover from "@material-ui/core/Popover";

// Custom Components
import UserInfo from "assets/jss/material-kit-react/components/userInfo.js";

// Firebase
import { getArrayOfReviews } from "database/firestore.js";

// Make CSS styles
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function CommentList(props) {
  // Get CSS styles
  const classes = useStyles();

  // Setup states for popover
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openedId, setId] = React.useState(null);

  // Popover functions
  const handleClick = (event, popoverId) => {
    setAnchorEl(event.currentTarget);
    setId(popoverId);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setId(null);
  };

  // Popover variables
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // Get arrays for promise handling
  let arrayOfReviewsPromise = getArrayOfReviews(props.establishment);
  const [comments, setComments] = useState([]);

  // Promise handling -> only re-renders when comments is updated
  useEffect(() => {
    arrayOfReviewsPromise.then((array) => {
      setComments(array);
    });
  }, comments);

  return (
    <div className={classes.root}>
      {comments.map((comment) => (
        <div>
          <ListItem button aria-describedby={id} onClick={handleClick}>
            {/* Icon */}
            <ListItemIcon>
              <FastfoodIcon />
            </ListItemIcon>
            {/* Actual comment */}
            <ListItemText primary={comment.user} secondary={comment.text} />
            <Divider />
          </ListItem>
          {/* User information */}
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            PaperProps={{
              style: {
                width: "40%",
              },
            }}
          >
            <UserInfo username={comment.user} />
          </Popover>
        </div>
      ))}
    </div>
  );
}
