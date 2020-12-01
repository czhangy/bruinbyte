import React from "react";

// @material-ui
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import classNames from "classnames";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

// Core Components
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

// Custom Components
import TopBar from "../../components/TopBar/TopBar.js";

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
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  const { user } = useAuth0();
  const { name, picture, email } = user;
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
                      <h3 className={classes.title}>{name}</h3>
                      <h6></h6>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-instagram"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-facebook"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p> {email} </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    style={customStyles.navStyle}
                    tabs={[
                      {
                        tabButton: "Favorites",
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={bg}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={bg}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={bg}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={bg}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={bg}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        ),
                      },
                    ]}
                  />
                </GridItem>
              </GridContainer>
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
