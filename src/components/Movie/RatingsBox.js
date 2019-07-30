import React from "react";
import StarRate from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import useStyles from './RatingsBox.styles';

const RatingsBox = ({ rating }) => {
  const classes = useStyles();
  return (
    <div className={classes.ratingsBox}>
      <Typography variant="subtitle1">{rating}</Typography>
      <StarRate className={classes.star} />
    </div>
  );
};

export default RatingsBox;