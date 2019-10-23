import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBarBase from "../../base/AppBarBase";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  appBar: {
    top: "auto",
    bottom: 0
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto"
  }
}));

export default function BottomAppBar(props) {
  const classes = useStyles(props);

  return (
    <AppBarBase
      styles={classes.appBar}
      position={"fixed"}
      openDrawer={props.openDrawer}
    >
      <IconButton edge="start" color="inherit" onClick={props.handleOpenDrawer}>
        <MenuIcon />
      </IconButton>
    </AppBarBase>
  );
}

BottomAppBar.propTypes = {
  /* BottomAppBar props */
  openDrawer: PropTypes.bool.isRequired,
  handleOpenDrawer: PropTypes.func.isRequired
};
