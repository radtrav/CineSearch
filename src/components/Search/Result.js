import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Result.styles";
import { getPosterUrl } from "../../api";

const Result = ({ result, onClick, close, imdbID }) => {
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
            <Typography component="h5" variant="subtitle1">
              {result.Title}
            </Typography>
          </CardContent>
        </div>
        <img src={getPosterUrl(imdbID)} className={classes.img} alt="Poster" />
      </div>
    </div>
  );
};

export default Result;
