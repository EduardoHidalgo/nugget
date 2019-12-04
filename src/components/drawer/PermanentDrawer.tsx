import React from "react";
import PropTypes from "prop-types";
import { Theme, makeStyles } from "@material-ui/core/styles";
import DrawerBase from "./DrawerBase";
import { PermanentDrawerProps } from "../../types/PermanentDrawerProps";

const useStyles = makeStyles<Theme, PermanentDrawerProps>(() => ({
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

/** Variante de drawer: Muestra de forma permanente el drawer en la vista
 * sin permitir esconderlo.
 *
 * @param props PermanentDrawerProps
 * @returns JSX.Element
 */
export default function PermanentDrawer(props: PermanentDrawerProps) {
  const classes = useStyles(props);

  return <DrawerBase classes={classes} type={"permanent"} {...props} />;
}

PermanentDrawer.defaultProps = {
  drawerWidth: 240
};

PermanentDrawer.propTypes = {
  drawerWidth: PropTypes.number,

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
