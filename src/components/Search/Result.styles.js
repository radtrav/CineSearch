import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    borderBottom: "0.5px solid lightgrey",
    "&:hover": {
      background: "#f5f7f7"
    }
  },
  card: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-between',
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
  img: {
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: 150,
  },
  container: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  }
}));

export default useStyles;
