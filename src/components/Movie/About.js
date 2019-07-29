import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import StarRate from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 8,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 16,
    paddingRight: 16
  },
  plot: {
    borderBottom: "1px solid lightgrey",
    paddingBottom: 8
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
    padding: 24,
  },

}));

const About = ({ plot, rated, actors, director, released, title }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <div className={classes.plot}>
        <Typography variant="body2"> {plot} </Typography>
      </div>
      <div className={classes.infoWrapper}>
        <div className={classes.info}>
          <Typography variant="body2">Title: </Typography>
          <Typography variant="body2">Released: </Typography>
          <Typography variant="body2">Actors: </Typography>
          <Typography variant="body2">Rated: </Typography>
          <Typography variant="body2">Director: </Typography>
        </div>
        <div className={classes.info}>
          <Typography variant="body2">{title} </Typography>
          <Typography variant="body2">{released} </Typography>
          <Typography variant="body2">{actors} </Typography>
          <Typography variant="body2">{rated} </Typography>
          <Typography variant="body2">{director} </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default About;
