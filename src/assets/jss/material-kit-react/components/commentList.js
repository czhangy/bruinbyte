/* eslint-disable */
import React from "react";
import { useState, useEffect } from "react";

// // @material-ui
import { makeStyles } from "@material-ui/core/styles";

// // @material-ui icons
import FastfoodIcon from "@material-ui/icons/Fastfood";
// import HomeIcon from "@material-ui/icons/Home";

// // Core Components
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

// IMPORT FUNCTION FROM FIRESTORE.JS
import { getArrayOfReviews } from "database/firestore.js";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    //maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function CommentList(props) {
  const classes = useStyles();
  // use cava as an example for now!!!!! (IMPORTANT TO CHANGE HERE)
  // var arrayOfReviews = [];

  let arrayOfReviewsPromise = getArrayOfReviews(props.establishment);
  const [comments, setComments] = useState([]);

  //promise handling -> only rerenders when comments is updated
  useEffect(() => {
    arrayOfReviewsPromise.then((array) => {
      setComments(array);
    });
  }, comments);

  return (
    <div className={classes.root}>
      {comments.map((comment) => (
        <ListItem>
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
