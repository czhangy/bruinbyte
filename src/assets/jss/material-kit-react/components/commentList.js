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

// IMPORT FUNCTION FROM FIRESTORE.JS
import { getArrayOfReviews } from "database/firestore.js";

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
  const classes = useStyles();

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
        <ListItem button>
          <ListItemIcon>
            <FastfoodIcon />
          </ListItemIcon>
          <ListItemText primary={comment.user} secondary={comment.text} />
          <Divider />
        </ListItem>
      ))}
    </div>
  );
}
