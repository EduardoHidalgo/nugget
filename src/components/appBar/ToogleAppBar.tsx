import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBarBase from "./AppBarBase";
import { DashboardTheme } from "src/types/DashboardTheme";
import { ToogleAppBarProps } from "../../types/ToogleAppBarProps";

const useStyles = makeStyles<DashboardTheme, ToogleAppBarProps>(
  (theme: DashboardTheme) => ({
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      ...theme.appBar
    },
    appBarShift: {
      width: props => `calc(100% - ${props.drawerWidth}px)`,
      marginLeft: props => +props.drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    appBarTitle: {
      ...theme.appBarTitle
    },
    menuButton: {
      marginRight: theme.spacing(1)
    },
    hide: {
      display: "none"
    }
  })
);

/** Variante de AppBar: El AppBar cambia su width debido a que el drawer
 * empuja el contenido de la vista para aparecer.
 *
 * @see https://material-ui.com/components/drawers/#persistent-drawer
 *
 * @param props TemporaryAppBarProps
 * @returns JSX.Element
 */
export default function ToogleAppBar(props: ToogleAppBarProps) {
  const { title, handleOpenDrawer, openDrawer } = props;
  const classes = useStyles(props);

  return (
    <AppBarBase
      classes={classes}
      /* dependiendo del boolean "openDrawer" renderea ciertos estilos */
      styles={clsx(classes.appBar, {
        [classes.appBarShift]: openDrawer
      })}
      position={"fixed"}
      {...props}
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleOpenDrawer}
        edge="start"
        className={clsx(classes.menuButton, props.openDrawer && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
    </AppBarBase>
  );
}

ToogleAppBar.defaultProps = {
  title: "ToogleAppBar Title",
  drawerWidth: 240
};

ToogleAppBar.propTypes = {
  classes: PropTypes.object,
  drawerWidth: PropTypes.number,

  title: PropTypes.string,

  enableHide: PropTypes.bool,
  enableElevation: PropTypes.bool,

  openDrawer: PropTypes.bool.isRequired,
  handleOpenDrawer: PropTypes.func.isRequired
};
