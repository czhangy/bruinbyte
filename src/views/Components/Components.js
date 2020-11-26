import React from "react";

////card shit
//import { makeStyles } from "@material-ui/core/styles";
//import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
//import AddIcon from "@material-ui/icons/Add";
//import Icon from "@material-ui/core/Icon";
import MoreVertIcon from "@material-ui/icons/MoreVert";
/////
/////
////end card shit

//////
////
/////list stuff
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import HomeIcon from "@material-ui/icons/Home";
/// end list stuff

//popover stuff
import SimplePopover from "components/Commentbox/popover.js";

import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

//import styles from "assets/jss/material-kit-react/views/components.js";

//const useStyles = makeStyles(styles);
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

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 40,
          color: "white",
        }}
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

      <Card className={classes.root}>
        <CardHeader
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
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            comment stuff is gonna go here/ look like this once the data is all
            set up im thinking resturant pick/menu/map idrk go above
            {/* // coments are on a card and are made of a list */}
          </Typography>
        </CardContent>
        <Typography component="p">ResturantName?</Typography>
        <CardActions disableSpacing>
          <Typography variant="srOnly">Create a user</Typography>

          <SimplePopover />
        </CardActions>
        <Collapse in={true} timeout="auto" unmountOnExit>
          <CardContent>
            {/* <Typography paragraph>ResturantName?</Typography> */}

            <div className={classes.root}>
              <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                  <ListItemIcon>
                    <FastfoodIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Name"
                    secondary="this is where the actual comment goes"
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <FastfoodIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Vicky Delk"
                    secondary="I had been here before, about 5 years earlier. That said, I loved it then and I love it today. Clearly others do as well as restaurants can close up shop just as quickly as they open. Hopefully this one is around for the foreseeable future.

                  First, you need to know this is an outdoor space regardless of Covid. It's a lovely garden vibe on a paring lot asphalt floor, but that's part of the experience I suppose. It's mixed with great service and the lights of an intimate garden by nightfall. They have umbrellas for shade and heat lamps
                  for warmth.
                  
                  Second, consider one of their cocktails. I always go right for anything with Tequila, but the beer I hear is great also. They serve a popcorn of the day while you wait for your beverage to arrive. Prepare to have your eyes roll back like a shark. It's that good! Tonight's was bacon fat, scallion and fresh black pepper."
                  />
                </ListItem>
              </List>
              <Divider />
              <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Return home or some shit idk (or maybe the add comment button)" />
                </ListItem>
              </List>{" "}
            </div>
          </CardContent>
        </Collapse>
      </Card>

      <Footer />
    </div>
  );
}
