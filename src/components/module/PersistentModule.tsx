import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { PersistentModuleProps } from "../../types/PersistentModuleProps";

const useStyles = makeStyles<Theme, PersistentModuleProps>((theme: Theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: props => -props.drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: "0 !important"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
}));

/** Variante de Module: añade estilos adicionales para renderear el componente
 * module dentro de un Persistent Dashboard
 *
 * @param props PersistentModuleProps
 */
export default function PersistentModule(props: PersistentModuleProps) {
  const { openDrawer, children } = props;
  const classes = useStyles(props);

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: openDrawer
      })}
    >
      <div className={classes.drawerHeader} />
      {children}
    </main>
  );
}

PersistentModule.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
  openDrawer: PropTypes.bool.isRequired,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
