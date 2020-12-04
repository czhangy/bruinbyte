import React from "react";

// @material-ui
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import classNames from "classnames";

// @material-ui/icons

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// Custom Components
import TopBar from "../../components/TopBar/TopBar.js";
import { UserForm } from "../../components/UserForm/UserForm.js";

// Images
import bg from "../../assets/img/landing-bg.jpg";

// Auth0
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const useStyles = makeStyles(styles);

function ProfilePage() {
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
    navStyle: {
      color: "#ffd100",
      backgroundColor: "#2774ae",
    },
  };
  const { user } = useAuth0();
  const { picture, email, nickname } = user;
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
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={picture} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>{nickname} </h3>
                      <h6></h6>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p> {email} </p>
              </div>
              <UserForm type="username" content={nickname} />
              <UserForm type="bio" content={email} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuthenticationRequired(ProfilePage, {
  returnTo: "/profile",
});
