import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import pic from "./innout.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 200,
  },
});

export default function Restaurants() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={pic}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            In-N-Out
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Burger
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" position="centered">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
