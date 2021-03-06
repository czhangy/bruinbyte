/* eslint-disable */
import React from "react";

// @material-ui
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import classNames from "classnames";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardFooter from "components/Card/CardFooter.js";

// Images
import base from "assets/img/faces/joeBruin.jpg";
import cZhang from "assets/img/faces/charlesZhang.JPG";
import kAfzali from "assets/img/faces/kiaAfzali.png";
import vDelk from "assets/img/faces/vickyDelk.PNG";
import bRoysar from "assets/img/faces/brianRoysar.jpg";
import dChoi from "assets/img/faces/dannyChoi.png";

// Make CSS styles
const useStyles = makeStyles(styles);

export default function TeamSection() {
  // Get CSS styles
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    // Title
    <div className={classes.section}>
      <h2 className={classes.title} style={{ textDecoration: "underline" }}>
        Our team
      </h2>
      <br />
      <div>
        <GridContainer>
          {/* Vicky Card */}
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={vDelk} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Victoria Delk
                <br />
                <small className={classes.smallTitle}>
                  Front-End Developer
                </small>
              </h4>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.instagram.com/vickydelk/"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.linkedin.com/in/victoriadelk/"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          {/* Charles Card */}
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={cZhang} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Charles Zhang
                <br />
                <small className={classes.smallTitle}>
                  Front-End Developer
                </small>
              </h4>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  target="_blank"
                  href="https://www.instagram.com/c.zhangg/"
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.linkedin.com/in/charles-zhang-14746519b/"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://github.com/czhangy"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          {/* Kia Card */}
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={kAfzali} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Kia Afzali
                <br />
                <small className={classes.smallTitle}>
                  Front-End Developer
                </small>
              </h4>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  target="_blank"
                  href="https://www.instagram.com/kia.afzali/"
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.linkedin.com/in/kia-afzali-189785156/"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          {/* Danny Card */}
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={dChoi} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Danny Choi
                <br />
                <small className={classes.smallTitle}>Back-End Developer</small>
              </h4>
            </Card>
          </GridItem>
          {/* Brian Card */}
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={bRoysar} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Brian Roysar
                <br />
                <small className={classes.smallTitle}>Back-End Developer</small>
              </h4>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.linkedin.com/in/brianroysar"
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          {/* Mascot Card */}
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={base} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Joe Bruin
                <br />
                <small className={classes.smallTitle}>Spirit Animal</small>
              </h4>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://twitter.com/gojoebruinucla"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.instagram.com/uclajoebruin/"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.facebook.com/Joe.Bruin/"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
