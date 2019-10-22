import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import DrawerBase from "../../base/DrawerBase";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    width: props => props.drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: props => props.drawerWidth
  }
}));

export default function PermanentDrawer(props) {
  const classes = useStyles(props);

  return <DrawerBase classes={classes} type={"permanent"} {...props} />;
}

PermanentDrawer.defaultProps = {
  drawerWidth: 240
};

PermanentDrawer.propTypes = {
  /* PermanentDrawer props */
  drawerWidth: PropTypes.number,

  /* Deep props */
  keys: PropTypes.array.isRequired,
  titles: PropTypes.array.isRequired,
  icons: PropTypes.array.isRequired,
  handleModule: PropTypes.func.isRequired
};
