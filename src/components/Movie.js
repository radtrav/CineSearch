import React from "react";
import { connect } from "react-redux";

const Movie = ({ movie }) => {
  console.log(movie);

  return <div>{JSON.stringify(movie)}</div>;
};

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(mapStateToProps)(Movie);
