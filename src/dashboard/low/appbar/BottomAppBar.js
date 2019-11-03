import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBarBase from "../../base/AppBarBase";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  appBar: {
    top: "auto",
    bottom: 0,
    ...theme.appBar
  }
}));

export default function BottomAppBar(props) {
  const classes = useStyles(props);

  return (
    <AppBarBase
      classes={classes}
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
