import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    borderBottom: "0.5px solid lightgrey",
    '&:hover': {
      background: "#f5f7f7",
   },
  },
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    width: "100%",
    cursor: "pointer",
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  }
});

const Result = ({ result, onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} onClick={() => onClick(result)}>
      <div className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="subtitle1">
              {result.Title}
            </Typography>
          </CardContent>
          <div className={classes.controls} />
        </div>
        <CardMedia image='https://via.placeholder.com/90' title="Movie Poster" />
      </div>
    </div>
  );
};

export default Result;
