import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBarBase from "../../base/AppBarBase";

const useStyles = makeStyles(theme => ({
  appBar: {
    width: props => `calc(100% - ${props.drawerWidth}px)`,
    marginLeft: props => props.drawerWidth,
    ...theme.appBar
  },
  appBarTitle: {
    ...theme.appBarTitle
  }
}));

export default function PermanentAppBar(props) {
  const classes = useStyles(props);

  return (
    <AppBarBase
      classes={classes}
      position={"fixed"}
      drawerWidth={props.drawerWidth}
      title={props.title}
      enableHide={props.enableHide}
      enableElevation={props.enableElevation}
    />
  );
}

PermanentAppBar.propTypes = {
  /* AppBarBase props */
  title: PropTypes.string.isRequired,
  enableElevation: PropTypes.bool,
  enableHide: PropTypes.bool,

  /* Material-UI props */
  classes: PropTypes.object,
  drawerWidth: PropTypes.number
};
