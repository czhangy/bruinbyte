import React from "react";

// @material-ui
import { makeStyles } from "@material-ui/core/styles";

// Core Components
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

// Custom Components
import RestPopover from "assets/jss/material-kit-react/components/restPopover.js";

// Images
import pic from "../../assets/img/restaurants/hangrymoonspic.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 200,
  },
});

export default function HangryMoons() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={pic} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Hangry Moon{"'"}s
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Local fried chicken place with large portions
        </Typography>
      </CardContent>
      <CardActions>
        <RestPopover restaurant="hangry-moons" />
      </CardActions>
    </Card>
  );
}
