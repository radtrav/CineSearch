import React from "react";
import { connect } from 'react-redux';
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import SearchBarV2 from "./components/SearchBarV2";
import Movie from "./components/Movie";
import { changeView, setMovie } from './actions';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

function App({view, viewMovie}) {
  const classes = useStyles();

  if(view === 'movie') {
    return <Movie />
  }

  return (
    <div className={classes.root}>
      <SearchBarV2 onClick={viewMovie} />
    </div>
  );

}

const mapStateToProps = state => ({
  view: state.view,
})

const mapDispatchToProps = dispatch => ({
  viewMovie: movie => {
    dispatch(changeView('movie'));
    dispatch(setMovie(movie));
  }, 
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
