import React from "react";

// @material-ui
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

// Core Components
import Divider from "@material-ui/core/Divider";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

const useStyles = makeStyles(styles);

const customStyles = {
  smallText: {
    fontWeight: "bold",
    fontSize: "1.5vw",
    color: "#000000",
  },
  bigText: { fontWeight: "bold", fontSize: "2.5vw", color: "#000000" },
};

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>About BruinByte</h2>
          <h5 className={classes.description}>
            So, let{"'"}s imagine Yelp and Bruinwalk had a secret love child,
            and they went on to take over the world. That{"'"}s right, welcome
            to BruinByte. Look 5 years into the future, what do you see? FAANG
            is gone. No more Facebook. No more Amazon. No more Google.
          </h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h5 style={customStyles.smallText}>BruinByte is all there is.</h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h5 style={customStyles.bigText}>BruinByte is all.</h5>
        </GridItem>
      </GridContainer>
      <br />
      <br />
      <br />
      <br />
      <Divider />
    </div>
  );
}
