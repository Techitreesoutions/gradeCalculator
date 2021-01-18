import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
//import noIntnernetImg from "../assets/img/tmithumal_logo.png";
import noIntnernetImg from "../assets/images/icons/icon-192x192.png";

const NoInternet = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.noIntnernetImg}>
        <img src={noIntnernetImg} alt="No Internet" width="100px" />
      </div>
      <Typography variant="h6" className={classes.Title}>
        No Internet Connection
      </Typography>

      <Typography variant="body1" className={classes.messageText}>
        Sorry, tmithumal need access to the internet.
        <br />
        Please check your connection and try again.
      </Typography>
    </div>
  );
};

const styles = {
  container: {
    padding: 50,
  },
  noIntnernetImg: {
    margin: "50px auto 20px auto",
    textAlign: "center",
  },
  Title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  messageText: {
    fontSize: 13,
    textAlign: "center",
  },
};

export default withStyles(styles)(NoInternet);

NoInternet.propTypes = {
  classes: PropTypes.object.isRequired,
};
