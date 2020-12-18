/* eslint-disable */
import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// @material-ui
import { makeStyles } from "@material-ui/core/styles";

// @material-ui icons
import FastfoodIcon from "@material-ui/icons/Fastfood";

// Core Components
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

// Firebase
import { getArrayOfReviewsFromUser } from "database/firestore.js";

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

export default function ReviewSection(props) {
  // Get CSS styles
  const classes = useStyles();

  // Setup for promise handling
  let arrayOfReviewsPromise = getArrayOfReviewsFromUser(props.name);
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
        <ListItem>
          {/* Icon */}
          <ListItemIcon>
            <FastfoodIcon />
          </ListItemIcon>
          {/* Actual comment */}
          <ListItemText primary={comment.establishment} secondary={comment.text} />
          <Divider />
        </ListItem>
      ))}
    </div>
  );
}

// Define props
ReviewSection.propTypes = {
  name: PropTypes.string.isRequired,
};
