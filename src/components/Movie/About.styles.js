import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 24,
    padding: 24,
  },
  plot: {
    borderBottom: "1px solid lightgrey",
    paddingBottom: 24,
  },
  poster: {
    backgroundColor: "lightgrey",
    maxWidth: "100%",
    height: 300,
    width: "100%",
    objectFit: "cover"
  },
  infoWrapper: {
    display: "flex"
  },
  info: {
    padding: 24
  },
  infoTitle: {
    paddingTop: 16,
  }
}));

export default useStyles;