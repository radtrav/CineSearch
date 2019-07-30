import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Result from "./Result";
import useStyles from "./Results.styles";

const Results = ({ results = [], onClick, close }) => {
  const classes = useStyles();
  return (
    results.length > 0 && (
      <Paper className={classes.root}>
        <Container maxWidth="sm">
          <Typography className={classes.title} variant="subtitle1" gutterBottom>
            Movies Found: {results.length}
          </Typography>
          {results.map(result => (
            <Result
              key={result.imdbID}
              onClick={onClick}
              result={result}
              close={close}
              imdbID={result.imdbID}
            />
          ))}
        </Container>
      </Paper>
    )
  );
};

export default Results;
