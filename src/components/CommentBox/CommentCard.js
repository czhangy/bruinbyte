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
import Typography from "@material-ui/core/Typography";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import MoreVertIcon from "@material-ui/icons/MoreVert";
//import Avatar from "@material-ui/core/Avatar";
//import IconButton from "@material-ui/core/IconButton";
//import CardHeader from "@material-ui/core/CardHeader";

// Custom Components
import SimplePopover from "assets/jss/material-kit-react/components/simplePopover.js";
import CommentList from "assets/jss/material-kit-react/components/commentList.js";
import RatingsView from "assets/jss/material-kit-react/components/ratingsView.js";

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
};

const mapFile = require.context("../../assets/img/maps/", true, /.png$/);

export default function CommentCard(props) {
  const classes = useStyles();
  const mapImg = mapFile(`./${props.restaurant}-map.png`);
  let name = "";

  switch (props.restaurant) {
    case "in-n-out":
      name = "In-N-Out";
      break;
    case "cava":
      name = "CAVA";
      break;
    case "mr-rice":
      name = "Mr. Rice";
      break;
    case "taco-bell":
      name = "Taco Bell";
      break;
    case "tlt":
      name = "TLT";
      break;
    case "california-pizza-kitchen":
      name = "CPK";
      break;
    case "corner-bakery":
      name = "Corner Bakery";
      break;
    case "fat-sals":
      name = "Fat Sal's";
      break;
    case "hangry-moons":
      name = "Hangry Moon's";
      break;
    case "house-of-meatballs":
      name = "House of Meatballs";
      break;
    case "gushi":
      name = "Gushi";
      break;
    case "fellow":
      name = "Fellow";
      break;
    case "enzos":
      name = "Enzo's Pizzeria";
      break;
    case "tender-greens":
      name = "Tender Greens";
      break;
    case "chick-fil-a":
      name = "Chick-fil-A";
      break;
  }
  return (
    <Card
      className={classes.root}
      style={{ backgroundColor: "#003b5c", border: "5px solid #ffb81c" }}
      raised="true"
    >
      <CardContent>
        <GridContainer
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
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
      {/* <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="this is comments layout ish? idrk i cant do anything until i have database connection"
        subheader="September 14, 2016 --> data???"
      /> */}
      <CardMedia className={classes.media} image={mapImg.default} />
      <br />
      <CardContent>
        <Typography style={customStyles.headerText}>Reviews:</Typography>
      </CardContent>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <CardContent>
          <CommentList />
        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
        <GridContainer direction="row" justify="center" alignItems="center">
          <GridItem xs={12}>
            <SimplePopover />
          </GridItem>
        </GridContainer>
      </CardActions>
    </Card>
  );
}

CommentCard.propTypes = {
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
