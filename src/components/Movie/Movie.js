import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { connect } from "react-redux";

import Billboard from "./Billboard";
import About from "./About";

const mockMovie = {
  Title: "Harry Potter and the Deathly Hallows: Part 2",
  Year: "2011",
  Rated: "PG-13",
  Released: "15 Jul 2011",
  Runtime: "130 min",
  Genre: "Adventure, Drama, Fantasy, Mystery",
  Director: "David Yates",
  Writer: "Steve Kloves (screenplay), J.K. Rowling (novel)",
  Actors: "Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe",
  Plot:
    "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
  Language: "English",
  Country: "USA, UK",
  Awards: "Nominated for 3 Oscars. Another 45 wins & 91 nominations.",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
  Ratings: [
    { Source: "Internet Movie Database", Value: "8.1/10" },
    { Source: "Rotten Tomatoes", Value: "96%" },
    { Source: "Metacritic", Value: "87/100" }
  ],
  Metascore: "87",
  imdbRating: "8.1",
  imdbVotes: "696,862",
  imdbID: "tt1201607",
  Type: "movie",
  DVD: "11 Nov 2011",
  BoxOffice: "$381,000,185",
  Production: "Warner Bros. Pictures",
  Website: "http://www.HarryPotter.com/",
  Response: "True"
};

const useStyles = makeStyles();

const TitleCard = () => {
  const classes = useStyles();
  return (
    <Card>
      <div> hellow </div>
    </Card>
  );
};

const Movie = ({ movie }) => {
  return (
    <div>
      <Billboard
        title={mockMovie.Title}
        genre={mockMovie.Genre}
        rating={mockMovie.imdbRating}
        poster={mockMovie.poster}
       
      />
      <About 
        plot={mockMovie.Plot}
        title={mockMovie.Title}
        actors={mockMovie.Actors}
        director={mockMovie.Director}
        released={mockMovie.Released}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(mapStateToProps)(Movie);
