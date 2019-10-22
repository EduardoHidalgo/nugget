import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import DrawerBase from "../../base/DrawerBase";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    width: props => +props.drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: props => +props.drawerWidth
  }
}));

export default function TemporaryDrawer(props) {
  const classes = useStyles(props);

  return <DrawerBase classes={classes} type={"temporary"} {...props} />;
}

TemporaryDrawer.defaultProps = {
  drawerWidth: 240
};

TemporaryDrawer.propTypes = {
  /* TemporaryDrawer props */
  drawerWidth: PropTypes.number,
  openDrawer: PropTypes.bool.isRequired,
  handleModule: PropTypes.func.isRequired,
  handleCloseDrawer: PropTypes.func.isRequired,

  /* Deep props */
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
