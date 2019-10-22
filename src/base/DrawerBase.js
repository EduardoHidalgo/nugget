import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer } from "@material-ui/core";
import DrawerMenuBase from "./DrawerMenuBase";

const useStyles = makeStyles(theme => ({
  root: {},
  drawer: {},
  drawerPaper: {},
  drawerHeader: {}
}));

const useDefaultStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerPaper: {
    width: 240,
    backgroundColor: "gray"
  }
}));

export default function DrawerBase(props) {
  const classes =
    props.type == null ? useDefaultStyles(props) : useStyles(props);

  const [variant, setVariant] = useState(props.variant);
  const [anchor, setAnchor] = useState(props.anchor);

  useEffect(() => {
    switch (props.type) {
      case "permanent":
        setVariant("permanent");
        break;
      case "persistent":
        setVariant("persistent");
        break;
      case "temporary":
        setVariant("temporary");
        break;
      default:
        setVariant("permanent");
        break;
    }
  }, []);

  return (
    <Drawer
      className={classes.drawer}
      variant={variant}
      classes={{
        paper: classes.drawerPaper
      }}
      anchor={anchor}
      open={props.openDrawer}
      ModalProps={{
        keepMounted: true // Better open performance on mobile.
      }}
      onKeyDown={props.handleCloseDrawer}
      onClick={props.handleCloseDrawer}
    >
      {props.children}
      <DrawerMenuBase
        type={props.type}
        keys={props.keys}
        titles={props.titles}
        icons={props.icons}
        handleModule={props.handleModule ? props.handleModule : null}
      />
    </Drawer>
  );
}

DrawerBase.defaultProps = {
  anchor: "left"
};

DrawerBase.propTypes = {
  /* DrawerBase props */
  type: PropTypes.oneOf(["permanent", "persistent", "temporary"]),
  variant: PropTypes.oneOf(["permanent", "persistent", "temporary"]),
  anchor: PropTypes.oneOf(["left"]),
  openDrawer: PropTypes.bool,
  handleCloseDrawer: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),

  /* Material-UI props */
  classes: PropTypes.object,
  variant: PropTypes.oneOf(["permanent", "persistent", "temporary"]),
  anchor: PropTypes.oneOf(["left"]),

  /* Deep props */
  keys: PropTypes.array.isRequired,
  titles: PropTypes.array.isRequired,
  icons: PropTypes.array.isRequired,
  handleModule: PropTypes.func.isRequired
};
