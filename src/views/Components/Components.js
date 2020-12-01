import React from "react";

// @material-ui
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";

// Custom Components
import TopBar from "../../components/TopBar/TopBar.js";

// Resturants
import TacoBell from "components/Restaurants/TacoBell.js";
import InNOut from "components/Restaurants/InNOut.js";
import TLT from "components/Restaurants/TLT.js";
import Cava from "components/Restaurants/Cava.js";

const useStyles = makeStyles(styles);

export default function Components() {
  const classes = useStyles();
  return (
    <div>
      <TopBar />
      <div className={classes.container}></div>
      <InNOut />
      <TacoBell />
      <TLT />
      <Cava />
    </div>
  );
}
