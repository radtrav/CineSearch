import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Result.styles";
import { getPosterUrl } from "../../api";

const Result = ({ result, onClick, close }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      onClick={() => {
        onClick(result);
        close();
      }}
    >
      <div className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h6" variant="subtitle1">
              {result.Title}
            </Typography>
          </CardContent>
        </div>
        <Hidden xsDown>
          <img
            src={getPosterUrl(result.imdbID)}
            className={classes.img}
            alt="Poster"
          />
        </Hidden>
      </div>
    </div>
  );
};

export default Result;
