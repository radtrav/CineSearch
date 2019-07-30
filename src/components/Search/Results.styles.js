import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: 10,
    display: "flex",
    alignItems: "center",
    width: 400,
    flexDirection: "column",
    zIndex: 999,
    position: 'absolute',
    marginLeft: -89,
    marginTop: 44,
    overflowY: 'auto',
    maxHeight: 500,
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
  }
});

export default useStyles;