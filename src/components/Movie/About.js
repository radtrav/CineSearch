import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import useStyles  from './About.styles';

const About = ({ info, plot }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Plot
      </Typography>
      <div className={classes.plot}>
        <Typography variant="body2"> {plot} </Typography>
      </div>
      <Typography className={classes.infoTitle} variant="h5" gutterBottom>
          Info
        </Typography>
      <div className={classes.infoWrapper}>
        <div className={classes.info}>
          {Object.keys(info).map(key => (
            <Typography variant="body2"> {key} </Typography>
          ))}
        </div>
        <div className={classes.info}>
          {Object.values(info).map(value => (
            <Typography variant="body2"> {value} </Typography>
          ))}
        </div>
      </div>
    </Paper>
  );
};

export default About;
