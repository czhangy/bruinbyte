import React from "react";

// @material-ui
import { makeStyles } from "@material-ui/core/styles";

// @material-ui icons
import FastfoodIcon from "@material-ui/icons/Fastfood";

// Core Components
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ListItem>
        <ListItemIcon>
          <FastfoodIcon />
        </ListItemIcon>
        <ListItemText primary="name" secondary="boom" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <FastfoodIcon />
        </ListItemIcon>
        <ListItemText
          primary="vicky delk"
          secondary="I had been here before, about 5 years earlier. That said, I loved it then and I love it today. Clearly others do as well as restaurants can close up shop just as quickly as they open. Hopefully this one is around for the foreseeable future.

                  First, you need to know this is an outdoor space regardless of Covid. It's a lovely garden vibe on a parking lot asphalt floor, but that's part of the experience I suppose. It's mixed with great service and the lights of an intimate garden by nightfall. They have umbrellas for shade and heat lamps
                  for warmth.
                  
                  Second, consider one of their cocktails. I always go right for anything with Tequila, but the beer I hear is great also. They serve a popcorn of the day while you wait for your beverage to arrive. Prepare to have your eyes roll back like a shark. It's that good! Tonight's was bacon fat, scallion and fresh black pepper."
        />
      </ListItem>
      <Divider />
    </div>
  );
}
