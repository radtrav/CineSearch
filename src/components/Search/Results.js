import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Result from "./Result";
import useStyles from "./Results.styles";

const Results = ({ results = [], onClick, close }) => {
  const classes = useStyles();
  return (
    results.length > 0 && (
      <Paper className={classes.root}>
        <Container maxWidth="sm">
          {results.map(result => (
            <Result
              key={result.imdbID}
              onClick={onClick}
              result={result}
              close={close}
            />
          ))}
        </Container>
      </Paper>
    )
  );
};

export default Results;
