import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import StarRate from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { getPosterUrl } from "../../api";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: 8,
    padding: 16,
  },
  genre: {
    marginTop: 24,
    color: "lightgrey",
    marginBottom: 24
  },
  paper: {
    flexDirection: "column",
    display: "flex",
    alignItems: "left",
    textAlign: "left",
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 16,
    paddingRight: 16,
    color: "black"
  },
  ratingsBox: {
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    padding: 8,
    border: " 1px solid #e0e0e0",
    backgroundColor: "#EEEEEE",
    maxWidth: 60,
    maxHeight: 100
  },
  star: {
    color: "coral"
  },
  poster: {
    marginTop: 8,
    backgroundColor: "lightgrey",
    maxWidth: 280,
    height: 417,
    objectFit: "cover"
  }
});

const RatingsBox = ({ rating, imdbID }) => {
  const classes = useStyles();
  return (
    <div className={classes.ratingsBox}>
      <Typography variant="subtitle1">{rating}</Typography>
      <StarRate className={classes.star} />
    </div>
  );
};

const Billboard = ({ title, genre, imdbID, rating, actors }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item xs={8}>
          <div className={classes.paper}>
            <Typography variant="h3" gutterBottom>
              {title}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              {genre}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              {actors}
            </Typography>
            <RatingsBox rating={rating} />
            <div />
          </div>
        </Grid>
        <Grid item xs={4}>
          <div>
            <img
              src={getPosterUrl(imdbID)}
              className={classes.poster}
              alt="Poster"
            />
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Billboard;
