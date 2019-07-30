import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      width: 300,

    },
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    padding: 2,
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10, 
    fontSize: 'xx-large',
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  },
  results: {

  }
}));

export default useStyles;