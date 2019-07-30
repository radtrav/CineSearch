import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    ratingsBox: {
      borderRadius: 4,
      display: "flex",
      alignItems: "center",
      padding: 8,
      border: " 1px solid #e0e0e0",
      backgroundColor: "#EEEEEE",
      maxWidth: 60,
      maxHeight: 100
    },
    star: {
      color: "coral"
    },
  });

  export default useStyles;