import React from "react";
import { connect } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import Movie from "../Movie/Movie";
import TopBar from "../Layout/TopBar";
import { setMovie } from "../../actions/movie.actions";
import useStyles from './App.styles';

const App = ({ movie, movieSelected }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar />
      <CssBaseline />
      {movieSelected && <Movie movie={movie} />}
    </div>
  );
}

const mapStateToProps = state => ({
  view: state.view,
  movie: state.movie,
  movieSelected: Object.getOwnPropertyNames(state.movie).length > 0
});

const mapDispatchToProps = dispatch => ({
  viewMovie: movie => {
    dispatch(setMovie(movie));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
