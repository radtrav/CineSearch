import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import Billboard from "./Billboard";
import About from "./About";

const Movie = ({ movie = {} }) => {
  return (
    <div>
      <Billboard
        title={movie.Title}
        genre={movie.Genre}
        rating={movie.imdbRating}
        poster={movie.poster}
        imdbID={movie.imdbID}
       
      />
      <About 
        plot={movie.Plot}
        title={movie.Title}
        actors={movie.Actors}
        director={movie.Director}
        released={movie.Released}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(mapStateToProps)(Movie);
