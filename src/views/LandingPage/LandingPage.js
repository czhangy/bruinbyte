import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import SearchBar from "components/CommentBox/SearchBar.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";

const useStyles = makeStyles(styles);

export default function LandingPage() {
  const classes = useStyles();
  return (
    <div>
      <SearchBar />
      <div style={{ backgroundColor: "#2774ae" }}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h1
                style={{
                  fontSize: "8vw",
                  fontWeight: "bold",
                  color: "#ffd100",
                }}
              >
                BruinByte
              </h1>
              <h4
                style={{
                  fontSize: "2vw",
                  fontWeight: "150",
                  color: "#FFB81C",
                }}
              >
                A taste of Westwood
              </h4>
              <br />
              <Button
                variant="contained"
                size="lg"
                href="/"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#ffd100",
                  color: "#2774ae",
                  fontWeight: "bold",
                  boxShadow: "2px 10px",
                }}
              >
                Find your next meal!
              </Button>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
        </div>
      </div>
    </div>
  );
}
