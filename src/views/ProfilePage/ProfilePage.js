import React from "react";

// @material-ui
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import classNames from "classnames";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Typography from "@material-ui/core/Typography";

// Custom Components
import TopBar from "components/TopBar/TopBar.js";
import { UserForm } from "components/UserForm/UserForm.js";
import BioSection from "./Sections/BioSection.js";
import NameSection from "./Sections/NameSection.js";
import ReviewSection from "./Sections/ReviewSection.js";

// Images
import bg from "assets/img/landing-bg.jpg";

// Auth0
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

// Firebase
import { createAccount } from "database/firestore.js";

// Make CSS styles
const useStyles = makeStyles(styles);

function ProfilePage() {
  // Get CSS styles
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const customStyles = {
    bgImage: {
      backgroundImage: "url(" + bg + ")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      height: "100%",
    },
    dangerZone: {
      backgroundColor: "#ffcccb",
      borderRadius: "5%",
      border: "3px solid #ff0000",
    },
    dangerText: {
      color: "#ff0000",
      fontSize: "1.5vw",
    },
    headerText: {
      fontSize: "1.5vw",
      textAlign: "center",
      textDecoration: "underline",
    },
  };

  // Get Auth0 objects
  const { user } = useAuth0();
  const { picture, name } = user;

  // Stringify user object for prop passing
  const curUser = JSON.stringify(name).substring(
    1,
    JSON.stringify(name).length - 1
  );

  // Create account if necessary
  createAccount(curUser);

  return (
    <div>
      <TopBar />
      <div style={customStyles.bgImage}>
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
        <br />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              {/* User's profile picture and display name */}
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={picture} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>
                        <NameSection name={curUser} />
                      </h3>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              {/* User's bio */}
              <div className={classes.description}>
                <BioSection name={curUser} />
                <br />
                <br />
              </div>
              <GridContainer
                direction="column"
                justify="center"
                alignItems="center"
              >
                {/* User's past reviews */}
                <GridItem xs={6}>
                  <Typography
                    className={classes.title}
                    style={customStyles.headerText}
                  >
                    My Reviews:
                  </Typography>
                  <br />
                </GridItem>
                <GridItem xs={6}>
                  <ReviewSection name={curUser} />
                  <br />
                  <br />
                  <br />
                  <br />
                </GridItem>
              </GridContainer>
              {/* Danger Zone */}
              <fieldset style={customStyles.dangerZone}>
                <legend style={customStyles.dangerText}> Danger Zone </legend>
                <br />
                <br />
                <UserForm type="username" name={name} />
                <UserForm type="bio" name={name} />
                <br />
                <br />
              </fieldset>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Enforce user authentication
export default withAuthenticationRequired(ProfilePage, {
  returnTo: "/profile",
});
