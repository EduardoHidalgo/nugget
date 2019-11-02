import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBarBase from "../../base/AppBarBase";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  appBar: {
    marginLeft: props => +props.drawerWidth
  },
  menuButton: {
    marginRight: theme.spacing(1)
  }
}));

export default function TemporaryAppBar(props) {
  const classes = useStyles(props);

  return (
    <AppBarBase
      styles={classes.AppBar}
      position={"fixed"}
      title={props.title}
      openDrawer={props.openDrawer}
      drawerWidth={props.drawerWidth}
      enableHide={props.enableHide}
      enableElevation={props.enableElevation}
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={props.handleOpenDrawer}
        edge="start"
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
    </AppBarBase>
  );
}

TemporaryAppBar.propTypes = {
  drawerWidth: PropTypes.number,
  enableElevation: PropTypes.bool,
  enableHide: PropTypes.bool,

  /* ToogleAppBar props */
  openDrawer: PropTypes.bool.isRequired,
  handleOpenDrawer: PropTypes.func.isRequired,

  /* AppBarBase props */
  title: PropTypes.string.isRequired
};
