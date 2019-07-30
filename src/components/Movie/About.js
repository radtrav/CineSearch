import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import StarRate from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 24,
    padding: 24,
  },
  plot: {
    borderBottom: "1px solid lightgrey",
    paddingBottom: 24,
  },
  poster: {
    backgroundColor: "lightgrey",
    maxWidth: "100%",
    height: 300,
    width: "100%",
    objectFit: "cover"
  },
  infoWrapper: {
    display: "flex"
  },
  info: {
    padding: 24
  },
  infoTitle: {
    paddingTop: 16,
  }
}));

const About = ({ info, plot }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Plot
      </Typography>
      <div className={classes.plot}>
        <Typography variant="body2"> {plot} </Typography>
      </div>
      <Typography className={classes.infoTitle} variant="h5" gutterBottom>
          Info
        </Typography>
      <div className={classes.infoWrapper}>

        <div className={classes.info}>
          {Object.keys(info).map(key => (
            <Typography variant="body2"> {key} </Typography>
          ))}
        </div>
        <div className={classes.info}>
          {Object.values(info).map(value => (
            <Typography variant="body2"> {value} </Typography>
          ))}
        </div>
      </div>
    </Paper>
  );
};

export default About;
