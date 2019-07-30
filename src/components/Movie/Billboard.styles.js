import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      marginTop: 8,
      padding: 16,
    },
    genre: {
      marginTop: 24,
      color: "lightgrey",
      marginBottom: 24
    },
    paper: {
      flexDirection: "column",
      display: "flex",
      alignItems: "left",
      textAlign: "left",
      paddingTop: 30,
      paddingBottom: 30,
      paddingLeft: 16,
      paddingRight: 16,
      color: "black"
    },
    ratingsBox: {
      borderRadius: 4,
      display: "flex",
      alignItems: "center",
      padding: 8,
      border: " 1px solid #e0e0e0",
      maxWidth: 60,
      maxHeight: 100
    },
    star: {
      color: "coral"
    },
    poster: {
      marginTop: 8,
      backgroundColor: "lightgrey",
      maxWidth: 280,
      height: 417,
      objectFit: "cover"
    },
    title: {
      marginBottom: 32,
    },
  });

  export default useStyles;