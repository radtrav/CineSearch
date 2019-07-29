import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import StarRate from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 8,
  },
  genre: {
    color: "lightgrey"
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
    alignItems: 'center',
    padding: 8,
    border: " 1px solid #e0e0e0",
    backgroundColor: "#EEEEEE",
    maxWidth: 42,
    maxHeight: 100,
  },
  star: {
    color: 'coral',
  },
  poster: {
    backgroundColor: 'lightgrey',
    maxWidth: '100%',
    height: 300,
    width: '100%',
    objectFit: 'cover',
  },
}));


const RatingsBox = ({ rating }) => {
  const classes = useStyles();
  return (
    <div className={classes.ratingsBox}>
      <Typography variant="subtitle1">
        {rating}
      </Typography>
      <StarRate className={classes.star}/>
    </div>
  );
};


const Billboard = ({ title, genre, poster, rating }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item xs={4}>
          <div className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              {genre}
            </Typography>
            <RatingsBox rating={rating} />
            <div />
          </div>
        </Grid>
        <Grid item xs={8}>
          <div >
          <img src="http://img.omdbapi.com/?i=tt3896198&h=600&apikey=297cef65" className={classes.poster} alt="Smiley face"/>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Billboard;
