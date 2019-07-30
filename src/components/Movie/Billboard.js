import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import useStyles from './Billboard.styles';
import { getPosterUrl } from "../../api";
import RatingsBox from './RatingsBox';

const Billboard = ({ title, genre, imdbID, rating, actors }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item xs={8}>
          <div className={classes.paper}>
            <Typography  className={classes.title} variant="h3" gutterBottom>
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
