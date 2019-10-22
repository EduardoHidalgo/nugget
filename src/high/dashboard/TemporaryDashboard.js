import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TemporaryAppBar from "../../low/appbar/TemporaryAppBar";
import TemporaryDrawer from "../../low/drawer/TemporaryDrawer";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  }
}));

export default function TemporaryDashboard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TemporaryAppBar
        openDrawer={props.openDrawer}
        handleOpenDrawer={props.handleOpenDrawer}
        drawerWidth={240}
        title={props.title}
        enableHide={props.enableHide}
        enableElevation={props.enableElevation}
      />
      <TemporaryDrawer
        openDrawer={props.openDrawer}
        handleOpenDrawer={props.handleOpenDrawer}
        drawerWidth={240}
        keys={props.keys}
        titles={props.titles}
        icons={props.icons}
        handleModule={props.handleModule}
        handleCloseDrawer={props.handleCloseDrawer}
      />
      {props.children}
    </div>
  );
}

TemporaryDashboard.defaultProps = {
  title: "Temporary Dashboard"
};

TemporaryDashboard.propTypes = {
  title: PropTypes.string,
  handleModule: PropTypes.func.isRequired,
  openDrawer: PropTypes.bool.isRequired,
  handleOpenDrawer: PropTypes.func.isRequired,
  enableElevation: PropTypes.bool,
  enableHide: PropTypes.bool,
  keys: PropTypes.arrayOf(String).isRequired,
  titles: PropTypes.arrayOf(String).isRequired,
  icons: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
