import React from "react";

//card
//import CommentCard from "components/CommentBox/CommentCard";
import SearchBar from "components/CommentBox/SearchBar";

import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/components.js";

import TacoBell from "components/Restaurants/TacoBell.js";
import Boom from "components/Restaurants/Boom.js";
const useStyles = makeStyles(styles);

export default function Components() {
  const classes = useStyles();
  return (
    <div>
      <SearchBar />
      <div className={classes.container}>
        <GridContainer>
          <GridItem>
            <div className={classes.brand}>
              <h1 className={classes.title}>BruinByte.</h1>
            </div>
          </GridItem>
          <GridItem>
            <div className={classes.brand}>
              <h3 className={classes.subtitle}>
                Like Yelp but better and Bruin
              </h3>
              <h4 className={classes.subtitle}>gettin egged today </h4>
              <h1 className={classes.title}></h1>
            </div>
          </GridItem>
        </GridContainer>
      </div>
      <Boom />
      <TacoBell />

      {/* //<CommentCard /> */}
    </div>
  );
}
