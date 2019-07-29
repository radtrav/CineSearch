import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "./components/SearchBar";
import Movie from "./components/Movie/Movie";
import { changeView } from "./actions/view.actions";
import { setMovie } from "./actions/movie.actions";
import { searchMovies } from './api';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#eeeeee',
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

function App({ view, viewMovie }) {
  const classes = useStyles();

  if (view === "movie") {
    return <Movie />;
  }

  return (
    <div className={classes.root}>
      <SearchBar
        onQuery={searchMovies} 
        onClick={viewMovie} 
        placeholder="Search Movies"
        />
    </div>
  );
}

const mapStateToProps = state => ({
  view: state.view
});

const mapDispatchToProps = dispatch => ({
  viewMovie: movie => {
    dispatch(changeView("movie"));
    dispatch(setMovie(movie));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
