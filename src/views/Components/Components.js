import React from "react";

//card
import CommentCard from "components/Commentbox/CommentCard";
import SearchBar from "components/Commentbox/SearchBar";

import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
//import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <SearchBar />
      <Header
        //  brand="BruinByte"
        //rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        // changeColorOnScroll={{
        //   height: 40,
        //   color: "white",
        // }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg4.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>BruinByte.</h1>
                <h3 className={classes.subtitle}>
                  Like Yelp but better and Bruin
                </h3>
                <h4 className={classes.subtitle}>gettin egged today</h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <CommentCard />
      <Footer />
    </div>
  );
}
