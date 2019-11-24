import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { Drawer, SwipeableDrawer } from "@material-ui/core";
import DrawerMenuBase from "./DrawerMenuBase";
import { Children } from "src/Children";
import { MaterialBase } from "src/MaterialBase";

const useStyles = makeStyles<Theme, Props>((theme: Theme) => ({
  root: {},
  drawer: {},
  drawerPaper: {
    /* Fix de separación innecesaria en drawer. mantener. */
    borderRight: "none !important"
  },
  drawerHeader: {},
  privateSwippeableArea: {
    zIndex: 1099
  },
  paperAnchorDockedLeft: {
    borderRight: "none !important"
  }
}));

const useDefaultStyles = makeStyles<Theme, Props>((theme: Theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerPaper: {
    width: 240,
    backgroundColor: "gray"
  }
}));

interface Props extends MaterialBase, Children {
  type: "permanent" | "persistent" | "temporary" | "mobile";
  anchor: "left" | "top" | "right" | "bottom";
  openDrawer?: boolean;
  handleCloseDrawer?: () => void;
  handleOpenDrawer?: () => void;
  handleModule: (key?: string) => void;
  keys: Array<string>;
  titles: Array<string>;
  icons: Array<React.ReactElement>;
}

export default function DrawerBase(props: Props) {
  const classes =
    props.type == null ? useDefaultStyles(props) : useStyles(props);

  const [type, setType] = useState(props.type);
  const [anchor, setAnchor] = useState(props.anchor);

  useEffect(() => {
    switch (type) {
      case "permanent":
        setType("permanent");
        break;
      case "persistent":
        setType("persistent");
        break;
      case "temporary":
        setType("temporary");
        break;
      case "mobile":
        setType("mobile");
        break;
      default:
        setType("permanent");
        break;
    }
  }, []);

  const drawerContent = (
    <Fragment>
      {props.children}
      <DrawerMenuBase
        type={type}
        keys={props.keys}
        titles={props.titles}
        icons={props.icons}
        handleModule={props.handleModule}
      />
    </Fragment>
  );

  const drawer = (
    <Drawer
      className={classes.drawer}
      variant={type == "mobile" ? undefined : type}
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
      {drawerContent}
    </Drawer>
  );

  /* el if ternario es un fix. Evita que se haga render del "swippeableDrawer"
  cuando se está en versiones desktop (dado que en esa versión no se entrega el prop
  "handleCloseDrawer"). */
  const swipeableDrawer =
    type == "mobile" ? (
      <SwipeableDrawer
        className={classes.drawer}
        SwipeAreaProps={{ className: classes.privateSwippeableArea }}
        open={props.openDrawer == undefined ? false : props.openDrawer}
        onClose={
          props.handleCloseDrawer == undefined
            ? () => {}
            : props.handleCloseDrawer
        }
        onOpen={
          props.handleOpenDrawer == undefined
            ? () => {}
            : props.handleOpenDrawer
        }
        onKeyDown={props.handleCloseDrawer}
        onClick={props.handleCloseDrawer}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        swipeAreaWidth={200}
        transitionDuration={400}
        disableDiscovery
      >
        {drawerContent}
      </SwipeableDrawer>
    ) : null;

  return type != "mobile" ? drawer : swipeableDrawer;
}

DrawerBase.defaultProps = {
  anchor: "left"
};

DrawerBase.propTypes = {
  /* DrawerBase props */
  type: PropTypes.oneOf(["permanent", "persistent", "temporary", "mobile"]),
  openDrawer: PropTypes.bool,
  handleCloseDrawer: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),

  /* Material-UI props */
  classes: PropTypes.object,
  anchor: PropTypes.oneOf(["left"]),

  /* Deep props */
  keys: PropTypes.array.isRequired,
  titles: PropTypes.array.isRequired,
  icons: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  handleModule: PropTypes.func.isRequired
};
