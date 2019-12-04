import React from "react";
import PropTypes from "prop-types";
import { Theme, makeStyles } from "@material-ui/core/styles";
import DrawerBase from "./DrawerBase";
import { TemporaryDrawerProps } from "../../types/TemporaryDrawerProps";

const useStyles = makeStyles<Theme, TemporaryDrawerProps>(() => ({
  root: {
    display: "flex"
  },
  drawer: {
    width: props => +props.drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: props => +props.drawerWidth
  },
  /* Estilos en caso de que anchor=[top|bottom] */
  horizontalDrawer: {
    width: "auto"
  },
  horizontalDrawerPaper: {
    width: "auto"
  }
}));

/** Variante de drawer: Permite mostrar o esconder el drawer por sobre la vista,
 * agregando una capa de opacidad.
 *
 * @param props TemporaryDrawerProps
 * @returns JSX.Element
 */
export default function TemporaryDrawer(props: TemporaryDrawerProps) {
  const { swippeable } = props;
  const classes = useStyles(props);

  return (
    <DrawerBase
      classes={classes}
      /* Si swippleable = true, renderea la versión mobile del drawer
      (incluye el feature para hacer swipe al menú). */
      type={swippeable ? "mobile" : "temporary"}
      {...props}
    />
  );
}

TemporaryDrawer.defaultProps = {
  drawerWidth: 240,
  swippeable: false
};

TemporaryDrawer.propTypes = {
  drawerWidth: PropTypes.number,
  swippeable: PropTypes.bool,

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
