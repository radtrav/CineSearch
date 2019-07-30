import React from "react";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { setMovie } from "../../actions/movie.actions";
import { searchMovies } from "../../api";
import SearchBar from "../Search/SearchBar";
import useStyles from "./TopBar.styles";

const TopBar = ({ view, viewMovie }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Cine Search
          </Typography>
          <SearchBar
            onQuery={searchMovies}
            onClick={viewMovie}
            placeholder="Search Movies"
          />
          <div>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
            <Menu>
              <MenuItem>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
            </Menu>
          </div>
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
