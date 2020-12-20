/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

// @material-ui
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Core Components
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// Custom Components
import AddReviewCard from "assets/jss/material-kit-react/components/addReviewCard.js";
import CommentList from "assets/jss/material-kit-react/components/commentList.js";
import RatingsView from "assets/jss/material-kit-react/components/ratingsView.js";
import DeliveryServices from "assets/jss/material-kit-react/components/deliveryServices.js";

// Get CSS styles
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100",
    },
  },
  media: {
    height: 5,
    paddingTop: "40%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  backgroundColor: red,
  avatar: {
    backgroundColor: red[500],
  },
  dividerColor: {
    background: "#ffd100",
    height: "5px",
  },
}));
const customStyles = {
  titleText: {
    fontWeight: "bold",
    fontSize: "5vw",
    color: "#ffd100",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: "3vw",
    color: "#ffd100",
  },
  infoText: {
    fontWeight: "bold",
    fontSize: "2vw",
    color: "#ffd100",
  },
  cardStyle: { backgroundColor: "#003b5c", border: "5px solid #ffb81c" },
};

// Import Google Maps screenshot
const mapFile = require.context("../../assets/img/maps/", true, /.png$/);

// Vars
let name = "";
let address = "";
let phoneNum = "";
let uberEats = true;
let grubhub = true;
let postmates = true;
let doordash = true;

function setInfo(nm, addy, phone, ue, gh, pm, dd) {
  name = nm;
  address = addy;
  phoneNum = phone;
  uberEats = ue;
  grubhub = gh;
  postmates = pm;
  doordash = dd;
}

export default function RestaurantCard(props) {
  const classes = useStyles();
  const mapImg = mapFile(`./${props.restaurant}-map.png`);

  // Set restaurant information based on props
  switch (props.restaurant) {
    case "in-n-out":
      setInfo(
        "In-N-Out",
        "922 Gayley Ave, Los Angeles, CA 90024",
        "(800) 786-1000",
        false,
        false,
        false,
        false
      );
      break;
    case "cava":
      setInfo(
        "CAVA",
        "1073 Broxton Ave, Los Angeles, CA 90024",
        "(310) 860-6288",
        true,
        false,
        false,
        false
      );
      break;
    case "mr-rice":
      setInfo(
        "Mr. Rice",
        "1010 Broxton Ave, Los Angeles, CA 90024",
        "(424) 317-0103",
        true,
        false,
        true,
        false
      );
      break;
    case "taco-bell":
      setInfo(
        "Taco Bell",
        "10937 Weyburn Ave, Los Angeles, CA 90024",
        "No phone number available",
        false,
        true,
        true,
        true
      );
      break;
    case "tlt":
      setInfo(
        "TLT",
        "1116 Westwood Blvd, Los Angeles, CA 90024",
        "(310) 443-4433",
        true,
        false,
        true,
        false
      );
      break;
    case "california-pizza-kitchen":
      setInfo(
        "CPK",
        "1001 Broxton Ave, Los Angeles, CA 90024",
        "(310) 209-9197",
        false,
        true,
        true,
        true
      );
      break;
    case "corner-bakery":
      setInfo(
        "Corner Bakery",
        "1019 S Westwood Blvd, Los Angeles, CA 90024",
        "(310) 824-1314",
        true,
        true,
        true,
        true
      );
      break;
    case "fat-sals":
      setInfo(
        "Fat Sal's",
        "972 Gayley Ave, Los Angeles, CA 90024",
        "(855) 682-4373",
        false,
        false,
        true,
        false
      );
      break;
    case "hangry-moons":
      setInfo(
        "Hangry Moon's",
        "970 Gayley Ave, Los Angeles, CA 90024",
        "(310) 824-1122",
        false,
        false,
        true,
        false
      );
      break;
    case "house-of-meatballs":
      setInfo(
        "House of Meatballs",
        "1076 Gayley Ave, Los Angeles, CA 90024",
        "(310) 208-5117",
        true,
        true,
        true,
        true
      );
      break;
    case "gushi":
      setInfo(
        "Gushi",
        "978 Gayley Ave, Los Angeles, CA 90024",
        "(310) 208-4038",
        false,
        false,
        true,
        false
      );
      break;
    case "fellow":
      setInfo(
        "Fellow",
        "1071 Glendon Ave, Los Angeles, CA 90024",
        "(310) 208-1071",
        false,
        false,
        true,
        true
      );
      break;
    case "enzos":
      setInfo(
        "Enzo's Pizzeria",
        "10940 Weyburn Ave, Los Angeles, CA 90024",
        "(310) 208-3696",
        true,
        true,
        true,
        true
      );
      break;
    case "tender-greens":
      setInfo(
        "Tender Greens",
        "1109 Glendon Ave, Los Angeles, CA 90024",
        "(213) 335-5359",
        true,
        true,
        true,
        true
      );
      break;
    case "chick-fil-a":
      setInfo(
        "Chick-fil-A",
        "922 Gayley Ave, Los Angeles, CA 90024",
        "(800) 786-1000",
        true,
        true,
        true,
        false
      );
      break;
  }
  return (
    <Card className={classes.root} style={customStyles.cardStyle} raised="true">
      {/* Restaurant title + restuarant rating */}
      <CardContent>
        <GridContainer
          direction="row"
          justify="space-evenly"
          alignItems="center">
          <GridItem xs={6}>
            <Typography align="center" style={customStyles.titleText}>
              {name}:
            </Typography>
          </GridItem>
          <GridItem xs={6}>
            <RatingsView restaurant={props.restaurant} />
          </GridItem>
        </GridContainer>
      </CardContent>
      {/* Restaurant information */}
      <Divider className={classes.dividerColor} />
      <br />
      <GridContainer direction="row" justify="space-around" alignItems="center">
        <GridItem xs={6}>
          <GridContainer direction="column">
            <GridItem xs={12}>
              <Typography style={customStyles.infoText}>{address}</Typography>
            </GridItem>
            <GridItem xs={12}>
              <Typography style={customStyles.infoText}>{phoneNum}</Typography>
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={4}>
          <DeliveryServices
            doordash={doordash}
            ubereats={uberEats}
            grubhub={grubhub}
            postmates={postmates}
          />
        </GridItem>
      </GridContainer>
      <br />
      {/* Restaurant map location */}
      <CardMedia className={classes.media} image={mapImg.default} />
      <br />
      {/* Restaurant reviews */}
      <CardContent>
        <Typography style={customStyles.headerText}>Reviews:</Typography>
      </CardContent>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <CardContent>
          <CommentList establishment={props.restaurant} />
        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
        {/* Add review button */}
        <GridContainer direction="row" justify="center" alignItems="center">
          <GridItem xs={12}>
            <AddReviewCard restaurant = {props.restaurant}/>
          </GridItem>
        </GridContainer>
      </CardActions>
    </Card>
  );
}

// Define props
RestaurantCard.propTypes = {
  restaurant: PropTypes.oneOf([
    "california-pizza-kitchen",
    "cava",
    "chick-fil-a",
    "corner-bakery",
    "enzos",
    "fat-sals",
    "fellow",
    "gushi",
    "hangry-moons",
    "house-of-meatballs",
    "in-n-out",
    "mr-rice",
    "taco-bell",
    "tender-greens",
    "tlt",
  ]).isRequired,
};
