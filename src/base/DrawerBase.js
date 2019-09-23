import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import DrawerMenuBase from "./DrawerMenuBase";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  }
}));

export default function DrawerBase() {
  const classes = useStyles();

  return (
    <Fragment>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <DrawerMenuBase />
      </Drawer>
    </Fragment>
  );
}
