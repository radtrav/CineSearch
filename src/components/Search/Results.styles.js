import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 10,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('md')]: {
      width: 520,
      marginLeft: -50,
    },
    width: 370,
    flexDirection: "column",
    zIndex: 999,
    position: 'absolute',
    marginLeft: -36,
    marginTop: 44,
    overflowY: 'auto',
    maxHeight: 380,
  },
  input: {
    padding: 10,
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  },
  title: {
    fontWeight: 500,
    color: '#3f51b5',
    marginLeft: 18,
  },
}));

export default useStyles;