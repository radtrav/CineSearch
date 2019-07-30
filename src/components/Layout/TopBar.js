import React from "react";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Hidden from "@material-ui/core/Hidden";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { setMovie } from "../../actions/movie.actions";
import { searchMovies } from "../../api";
import SearchBar from "../Search/SearchBar";
import useStyles from "./TopBar.styles";

const TopBar = ({ viewMovie }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <MenuIcon />
          </IconButton>
          <Hidden xsDown>
            <Typography variant="h6" className={classes.title}>
              Cine Search
            </Typography>
          </Hidden>
          <SearchBar
            onQuery={searchMovies}
            onClick={viewMovie}
            placeholder="Search Movies"
          />
            <Hidden xsDown>
              <IconButton color="inherit">
                <AccountCircle />
              </IconButton>
            </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => ({ view: state.view });

const mapDispatchToProps = dispatch => ({
  viewMovie: movie => {
    dispatch(setMovie(movie));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);
