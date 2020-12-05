import React from "react";

// @material-ui
import { makeStyles } from "@material-ui/core/styles";

// Core Components
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

// Custom Components
import RestPopover from "assets/jss/material-kit-react/components/restPopover.js";

// Images
import pic from "../../assets/img/restaurants/cpkpic.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 200,
  },
});

export default function CPK() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={pic} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            California Pizza Kitchen
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Hand-tossed pizzas with seasonally-inspired ingredients
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <RestPopover restaurant="california-pizza-kitchen" />
      </CardActions>
    </Card>
  );
}
