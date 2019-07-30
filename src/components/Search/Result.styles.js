import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    borderBottom: "0.5px solid lightgrey",
    "&:hover": {
      background: "#f5f7f7"
    }
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

export default useStyles;
