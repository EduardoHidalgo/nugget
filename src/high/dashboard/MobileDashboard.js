import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import BottomAppBar from "../../low/appbar/BottomAppBar";
import TemporaryDrawer from "../../low/drawer/TemporaryDrawer";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  }
}));

export default function MobileDashboard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BottomAppBar
        openDrawer={props.openDrawer}
        handleOpenDrawer={props.handleOpenDrawer}
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
        swippeable
      />
      {props.children}
    </div>
  );
}

MobileDashboard.propTypes = {
  handleModule: PropTypes.func.isRequired,
  openDrawer: PropTypes.bool.isRequired,
  handleOpenDrawer: PropTypes.func.isRequired,
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
