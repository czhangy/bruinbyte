/* eslint-disable */
import React from "react";

// @material-ui
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/searchPage.js";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// Custom Components
import TopBar from "../../components/TopBar/TopBar.js";

// Resturants
import TacoBell from "components/Restaurants/TacoBell.js";
import InNOut from "components/Restaurants/InNOut.js";
import TLT from "components/Restaurants/TLT.js";
import Cava from "components/Restaurants/Cava.js";
import CornerBakery from "components/Restaurants/CornerBakery.js";
import CPK from "components/Restaurants/CPK.js";
import MrRice from "components/Restaurants/MrRice.js";
import FatSals from "components/Restaurants/FatSals.js";
import HangryMoons from "components/Restaurants/HangryMoons.js";
import Meatball from "components/Restaurants/Meatball.js";
import Gushi from "components/Restaurants/Gushi.js";
import Fellow from "components/Restaurants/Fellow.js";
import Enzo from "components/Restaurants/Enzo.js";
import TenderGreens from "components/Restaurants/TenderGreens.js";
import ChickfilA from "components/Restaurants/ChickfilA.js";

const useStyles = makeStyles(styles);

const customStyles = {
  restBoxes: {
    padding: "90px",
  },
};

export default function Components() {
  const classes = useStyles();
  return (
    <div>
      <TopBar />
      <div className={classes.container}></div>
      <GridContainer
        direction="row"
        justify="center"
        alignItems="center"
        spacing={12}>
        <GridItem
          xs={6}
          sm={6}
          md={4}
          align="center"
          style={customStyles.restBoxes}>
          <InNOut />
        </GridItem>
        <GridItem
          xs={6}
          sm={6}
          md={4}
          align="center"
          style={customStyles.restBoxes}>
          <TacoBell />
        </GridItem>
        <GridItem
          xs={6}
          sm={6}
          md={4}
          align="center"
          style={customStyles.restBoxes}>
          <TLT />
        </GridItem>
        <GridItem
          xs={6}
          sm={6}
          md={4}
          align="center"
          style={customStyles.restBoxes}>
          <Cava />
        </GridItem>
        <GridItem
          xs={6}
          sm={6}
          md={4}
          align="center"
          style={customStyles.restBoxes}>
          <CPK />
        </GridItem>
        <GridItem
          xs={6}
          sm={6}
          md={4}
          align="center"
          style={customStyles.restBoxes}>
          <CornerBakery />
        </GridItem>
        <GridItem
          xs={6}
          sm={6}
          md={4}
          align="center"
          style={customStyles.restBoxes}>
          <MrRice />
        </GridItem>
        <GridItem
          xs={6}
          sm={6}
          md={4}
          align="center"
          style={customStyles.restBoxes}>
          <FatSals />
        </GridItem>
        <GridItem
          xs={6}
          sm={6}
          md={4}
          align="center"
          style={customStyles.restBoxes}>
          <HangryMoons />
        </GridItem>
        <GridItem
          xs={6}
          sm={6}
          md={4}
          align="center"
          style={customStyles.restBoxes}>
          <Meatball />
        </GridItem>
        <GridItem
          xs={6}
          sm={6}
          md={4}
          align="center"
          style={customStyles.restBoxes}>
          <Gushi />
        </GridItem>
        <GridItem
          xs={6}
          sm={6}
          md={4}
          align="center"
          style={customStyles.restBoxes}>
          <Fellow />
        </GridItem>
        <GridItem
          xs={6}
          sm={6}
          md={4}
          align="center"
          style={customStyles.restBoxes}>
          <Enzo />
        </GridItem>
        <GridItem
          xs={6}
          sm={6}
          md={4}
          align="center"
          style={customStyles.restBoxes}>
          <TenderGreens />
        </GridItem>
        <GridItem
          xs={6}
          sm={6}
          md={4}
          align="center"
          style={customStyles.restBoxes}>
          <ChickfilA />
        </GridItem>
      </GridContainer>
    </div>
  );
}
