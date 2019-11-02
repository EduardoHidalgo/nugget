import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ToogleAppBar from "../../low/appbar/ToogleAppBar";
import PersistentDrawer from "../../low/drawer/PersistentDrawer";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  }
}));

export default function PersistentDashboard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ToogleAppBar
        openDrawer={props.openDrawer}
        handleOpenDrawer={props.handleOpenDrawer}
        drawerWidth={240}
        title={props.title}
        enableHide={props.enableHide}
        enableElevation={props.enableElevation}
      />
      <PersistentDrawer
        openDrawer={props.openDrawer}
        handleOpenDrawer={props.handleOpenDrawer}
        drawerWidth={240}
        keys={props.keys}
        titles={props.titles}
        icons={props.icons}
        handleModule={props.handleModule}
      />
      {props.children}
    </div>
  );
}

PersistentDashboard.defaultProps = {
  title: "Persistent Dashboard"
};

PersistentDashboard.propTypes = {
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
