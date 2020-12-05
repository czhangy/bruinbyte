import React from "react";

// @material-ui
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import classNames from "classnames";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

// Custom Components
import TopBar from "../../components/TopBar/TopBar.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";

// Images
import bg from "../../assets/img/landing-bg.jpg";
import logo from "../../assets/img/logo.png";

const useStyles = makeStyles(styles);
const customStyles = {
  bgImage: {
    backgroundImage: "url(" + bg + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "100%",
  },
  bigText: {
    fontSize: "90px",
    fontWeight: "bold",
    color: "#ffd100",
    textShadow: "2px 2px #000000",
    textAlign: "right",
  },
  smallText: {
    fontSize: "25px",
    fontWeight: "150",
    color: "#FFB81C",
    textShadow: "1px 1px #000000",
    textAlign: "right",
  },
  buttonStyle: {
    backgroundColor: "#ffd100",
    color: "#2774ae",
    fontWeight: "bold",
    boxShadow: "2px 2px #000000",
    float: "right",
  },
  logoStyle: {
    marginTop: "-6vw",
    marginLeft: "-10px",
    width: "85%",
  },
};

export default function LandingPage() {
  const classes = useStyles();
  return (
    <div>
      <TopBar />
      <div style={customStyles.bgImage}>
        <div className={classes.container}>
          <GridContainer direction="row" justify="center" alignItems="center">
            <GridItem xs={6} sm={6} md={6}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <h1 style={customStyles.bigText}>BruinByte</h1>
              <h4 style={customStyles.smallText}>A taste of Westwood</h4>
              <br />
              <Button
                variant="contained"
                size="lg"
                href="/search"
                rel="noopener noreferrer"
                style={customStyles.buttonStyle}
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
            <GridItem xs={6} sm={6} md={6}>
              <img src={logo} style={customStyles.logoStyle} />
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
