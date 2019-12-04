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
  horizontalDrawer: {},
  horizontalDrawerPaper: {},
  drawerHeader: {},
  privateSwippeableArea: {
    zIndex: 1099
  },
  paperAnchorDockedLeft: {
    borderRight: "none !important"
  }
}));

/** Estilos para el Drawer en caso de no pasarse ningún estilo. El
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

/** Componente base que implementa el componente Drawer nativo de material-ui.
 * Este componente es el que más props y estados maneja respecto al componente de alto
 * nivel "dashboard".
 *
 * @see https://material-ui.com/components/drawers/
 *
 * @param props DrawerBaseProps
 * @returns JSX.Element
 */
export default function DrawerBase(props: DrawerBaseProps) {
  const {
    disableToolbar,
    transitionDuration,
    indexes,
    titles,
    icons,
    handleModule,
    openDrawer,
    handleOpenDrawer,
    handleCloseDrawer,
    children
  } = props;

  /* Valor estático del ancho del aré de swipe. */
  const swipeAreaWidth: number = 200;

  /* En caso de que no se entregue un tipo de drawer, se propone un
  conjunto de estilos default dado la obligatoriedad del drawerWidth. */
  const classes =
    props.type == null ? useDefaultStyles(props) : useStyles(props);

  const [type] = useState(props.type);
  const [anchor, setAnchor] = useState(props.anchor);
  const [elevation, setElevation] = useState(
    props.elevation != undefined ? props.elevation : 8
  );
  /* Booleano interno, filtra los estilos del drawer dependiendo del anchor */
  const [horizontalDrawer, setHorizontalDrawer] = useState(
    disableToolbar != undefined ? disableToolbar : false
  );
  const [transition] = useState(
    transitionDuration != undefined ? transitionDuration : 400
  );

  /* Calcula el boolean "horizontalDrawer" cada que cambie el anchor. Es un
  Effect debido a que el anchor "podría" cambiar en tiempo de render, es por
  seguridad. */
  useEffect(() => {
    if (anchor == "top" || anchor == "bottom") setHorizontalDrawer(true);
    else setHorizontalDrawer(false);
  }, [anchor]);

  /* Effect que maneja errores de estilos entre el tipo de drawer y el anchor.
  Drawer no puede recibir anchor[top|bottom] en tipos de drawer diferentes a temporary. */
  useEffect(() => {
    if (
      type != "temporary" &&
      type != "mobile" &&
      (anchor == "top" || anchor == "bottom")
    ) {
      console.warn(
        'Drawer ha recibido el tipo "' +
          type +
          '" y anchor=[top|bottom], pero no es compatible ' +
          "dicho anchor con el tipo. Solo Drawer de tipo " +
          '"temporary" puede recibir anchor "' +
          anchor +
          '". Anchor será forzado a "left".'
      );

      setAnchor("left");
    }
  }, [type]);

  /* Previene errores por el paso de un valor incorrecto de "elevation". */
  useEffect(() => {
    if (elevation < 0 || elevation > 16) {
      console.warn(
        'Drawer ha recibido el prop elevation con valor "' +
          elevation +
          '", pero este solo puede recibir un valor númerico entero ' +
          "entre el rango 0-16. El valor será forzado a 8."
      );

      setElevation(8);
    }
  }, [elevation]);

  /* Aquí se renderea el menú del Drawer de manera dinámica y autommática. Toma
  el arreglo de titles, indexes y icons y los mapea dentro del menú. */
  const drawerContent = (
    <Fragment>
      {/* DrawerIntersection */}
      {children}
      {/* DrawerMenu */}
      <DrawerMenuBase
        type={type}
        indexes={indexes}
        titles={titles}
        icons={icons}
        handleModule={handleModule}
        /* En caso de existir disableToolbar, lo setea.
        En caso de drawer horizontal, quita el toolbar. */
        disableToolbar={
          disableToolbar != undefined
            ? disableToolbar
            : horizontalDrawer
            ? true
            : false
        }
      />
    </Fragment>
  );

  /* Aquí se renderea el drawer nativo de material-ui y recibe todos los props
  requeridos para su uso. */
  const drawer = (
    <Drawer
      className={horizontalDrawer ? classes.horizontalDrawer : classes.drawer}
      variant={type == "mobile" ? "temporary" : type}
      classes={{
        paper: horizontalDrawer
          ? classes.horizontalDrawerPaper
          : classes.drawerPaper
      }}
      anchor={anchor}
      elevation={elevation}
      transitionDuration={transition}
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
        className={horizontalDrawer ? classes.horizontalDrawer : classes.drawer}
        anchor={anchor}
        elevation={elevation}
        transitionDuration={transition}
        SwipeAreaProps={{ className: classes.privateSwippeableArea }}
        open={openDrawer}
        onClose={handleCloseDrawer}
        onOpen={handleOpenDrawer}
        onKeyDown={handleCloseDrawer}
        onClick={handleCloseDrawer}
        ModalProps={{
          keepMounted: true // Mejora de performance
        }}
        swipeAreaWidth={swipeAreaWidth}
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
  elevation: PropTypes.number,
  disableToolbar: PropTypes.bool,

  openDrawer: PropTypes.bool,
  handleOpenDrawer: PropTypes.func,
  handleCloseDrawer: PropTypes.func,
  handleModule: PropTypes.func.isRequired,

  indexes: PropTypes.array.isRequired,
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
