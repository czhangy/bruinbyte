import React from "react";

// @material-ui
import { makeStyles } from "@material-ui/core/styles";

// Core Components
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";

// Custom Components
import SimplePopover from "assets/jss/material-kit-react/components/simplePopover.js";
import CommentList from "assets/jss/material-kit-react/components/commentList.js";
import Ratings from "components/Ratings/Ratings.js";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100",
    },
  },
  media: {
    height: 5,
    paddingTop: "40%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  backgroundColor: red,
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CommentCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="this is comments layout ish? idrk i cant do anything until i have database connection"
        subheader="September 14, 2016 --> data???"
      />
      <CardMedia className={classes.media} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          comment stuff is gonna go here/ look like this once the data is all
          set up im thinking resturant pick/menu/map idrk go above
        </Typography>
      </CardContent>
      <Typography component="p">Resturant Name?</Typography>
      <Ratings />
      <CardActions disableSpacing>
        <Typography variant="srOnly">Create a user</Typography>

        <SimplePopover />
      </CardActions>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <CardContent>
          <CommentList />
        </CardContent>
      </Collapse>
    </Card>
  );
}
