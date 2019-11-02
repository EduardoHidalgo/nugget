import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import PermanentAppBar from "../../low/appbar/PermanentAppBar";
import PermanentDrawer from "../../low/drawer/PermanentDrawer";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  }
}));

export default function PermanentDashboard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PermanentAppBar
        title={props.title}
        drawerWidth={240}
        enableHide={props.enableHide}
        enableElevation={props.enableElevation}
      />
      <PermanentDrawer
        keys={props.keys}
        titles={props.titles}
        icons={props.icons}
        handleModule={props.handleModule}
        drawerWidth={240}
      />
      {props.children}
    </div>
  );
}

PermanentDashboard.defaultProps = {
  title: "Permanent Dashboard"
};

PermanentDashboard.propTypes = {
  title: PropTypes.string,
  handleModule: PropTypes.func.isRequired,
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
  ]).isRequired
};
