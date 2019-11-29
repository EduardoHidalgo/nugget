import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, SwipeableDrawer } from "@material-ui/core";
import DrawerMenuBase from "./DrawerMenuBase";
import { DrawerBaseProps } from "../../types/DrawerBaseProps";

const useStyles = makeStyles<DrawerBaseProps>(() => ({
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

/* Estilos para el Drawer en caso de no pasarse ningún estilo. El
valor de DrawerWidth es requerido obligatoriamente. */
const useDefaultStyles = makeStyles<DrawerBaseProps>(() => ({
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerPaper: {
    width: 240,
    backgroundColor: "gray"
  }
}));

export default function DrawerBase(props: DrawerBaseProps) {
  /* En caso de que no se entregue un tipo de drawer, se propone un
  conjunto de estilos default dado la obligatoriedad del drawerWidth. */
  const classes =
    props.type == null ? useDefaultStyles(props) : useStyles(props);

  const [type, setType] = useState(props.type);
  const [anchor, setAnchor] = useState(props.anchor);

  const {
    keys,
    titles,
    icons,
    handleModule,
    openDrawer,
    handleOpenDrawer,
    handleCloseDrawer,
    children
  } = props;

  const drawerContent = (
    <Fragment>
      {/* DrawerIntersection */}
      {children}
      {/* DrawerMenu */}
      <DrawerMenuBase
        type={type}
        keys={keys}
        titles={titles}
        icons={icons}
        handleModule={handleModule}
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
      open={openDrawer}
      ModalProps={{
        keepMounted: true // Better open performance on mobile.
      }}
      onKeyDown={handleCloseDrawer}
      onClick={handleCloseDrawer}
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
        open={openDrawer == undefined ? false : openDrawer}
        onClose={handleCloseDrawer == undefined ? () => {} : handleCloseDrawer}
        onOpen={handleOpenDrawer == undefined ? () => {} : handleOpenDrawer}
        onKeyDown={handleCloseDrawer}
        onClick={handleCloseDrawer}
        ModalProps={{
          keepMounted: true // Mejora de performance
        }}
        swipeAreaWidth={200}
        transitionDuration={400}
        disableDiscovery
      >
        {drawerContent}
      </SwipeableDrawer>
    ) : null;

  /* Render del Drawer. Si el tipo es mobile de manera automática
    renderea "swipeableDrawer". */
  return type != "mobile" ? drawer : swipeableDrawer;
}

DrawerBase.defaultProps = {
  anchor: "left"
};

DrawerBase.propTypes = {
  classes: PropTypes.object,
  styles: PropTypes.string,

  type: PropTypes.oneOf(["permanent", "persistent", "temporary", "mobile"]),
  anchor: PropTypes.oneOf(["left", "top", "right", "bottom"]),

  openDrawer: PropTypes.bool,
  handleOpenDrawer: PropTypes.func,
  handleCloseDrawer: PropTypes.func,
  handleModule: PropTypes.func.isRequired,

  keys: PropTypes.array.isRequired,
  titles: PropTypes.array.isRequired,
  icons: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
