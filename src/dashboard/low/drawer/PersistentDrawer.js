import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DrawerBase from "../../base/DrawerBase";

const useStyles = makeStyles(theme => ({
  drawer: {
    width: props => +props.drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: props => +props.drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
}));

export default function PersistentDrawer(props) {
  const classes = useStyles(props);

  return (
    <DrawerBase classes={classes} type={"persistent"} {...props}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={props.handleOpenDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
    </DrawerBase>
  );
}

PersistentDrawer.defaultProps = {
  drawerWidth: 240
};

PersistentDrawer.propTypes = {
  /* PersistentDrawer props */
  drawerWidth: PropTypes.number,
  openDrawer: PropTypes.bool.isRequired,
  handleOpenDrawer: PropTypes.func.isRequired,

  /* Deep props */
  keys: PropTypes.array.isRequired,
  titles: PropTypes.array.isRequired,
  icons: PropTypes.array.isRequired,
  handleModule: PropTypes.func.isRequired
};
