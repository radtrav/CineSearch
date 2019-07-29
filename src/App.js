import React from "react";
import { connect } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "./components/SearchBar";
import Movie from "./components/Movie/Movie";
import TopBar from "./components/Layout/TopBar";
import { changeView } from "./actions/view.actions";
import { setMovie } from "./actions/movie.actions";
import { searchMovies } from "./api";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#eeeeee",
    display: "flex",
    width: "100vw",
    height: "100vh",
    flexDirection: "column"
  }
}));

function App({ view, viewMovie }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar />
      <CssBaseline />
      {view === "movie" ? (
        <Movie />
      ) : (
        <SearchBar
          onQuery={searchMovies}
          onClick={viewMovie}
          placeholder="Search Movies"
        />
      )}
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
