import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import Billboard from "./Billboard";
import About from "./About";

const Movie = ({ movie = {} }) => {
  const {
    Ratings: ratings,
    Plot: plot,
    Poster: poster,
    Response: response,
    ...info
  } = movie;

  return (
    <Container style={{ maxWidth: 950 }}>
      <Billboard
        title={movie.Title}
        genre={movie.Genre}
        rating={movie.imdbRating}
        poster={movie.poster}
        imdbID={movie.imdbID}
        actors={movie.Actors}
      />
      <About plot={plot} info={info} />
    </Container>
  );
};

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(mapStateToProps)(Movie);
