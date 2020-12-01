import React from "react";

// @material-ui
import { makeStyles } from "@material-ui/core/styles";

// Core Components
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function FuncList(value) {
  const classes = useStyles();
  const boom =value; 
  return (
    <div className={classes.root}>
      <ListItem button>
        <ListItemIcon>
          <FastfoodIcon />
        </ListItemIcon>
        <ListItemText primary= "yes" secondary="boom" />
        {/* start comp */}
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <FastfoodIcon />
        </ListItemIcon>
        <ListItemText
          primary="eggert"
          secondary="the food was bad but this webiste is rly good"
        />
        {/* end comp */}
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <FastfoodIcon />
        </ListItemIcon>
        <ListItemText
          primary="Vicky Delk"
          secondary="I had been here before, about 5 years earlier. That said, I loved it then and I love it today. Clearly others do as well as restaurants can close up shop just as quickly as they open. Hopefully this one is around for the foreseeable future.

                  First, you need to know this is an outdoor space regardless of Covid. It's a lovely garden vibe on a parking lot asphalt floor, but that's part of the experience I suppose. It's mixed with great service and the lights of an intimate garden by nightfall. They have umbrellas for shade and heat lamps
                  for warmth.
                  
                  Second, consider one of their cocktails. I always go right for anything with Tequila, but the beer I hear is great also. They serve a popcorn of the day while you wait for your beverage to arrive. Prepare to have your eyes roll back like a shark. It's that good! Tonight's was bacon fat, scallion and fresh black pepper."
        />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Return home or some shit idk (or maybe the add comment button)" />
      </ListItem>
    </div>
  );
}

