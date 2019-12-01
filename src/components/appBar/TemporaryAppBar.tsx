import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBarBase from "./AppBarBase";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { TemporaryAppBarProps } from "../../types/TemporaryAppBarProps";
import { DashboardTheme } from "../../types/DashboardTheme";

const useStyles = makeStyles<DashboardTheme, TemporaryAppBarProps>(
  (theme: DashboardTheme) => ({
    root: {
      ...theme.appBar
    },
    appBar: {
      marginLeft: props => +props.drawerWidth
    },
    appBarTitle: {
      ...theme.appBarTitle
    },
    menuButton: {
      marginRight: theme.spacing(1)
    }
  })
);

/** Variante de AppBar: El AppBar luce similar a PermanentAppBar pero incluye
 * un botón que comunica con el drawer para hacerlo aparecer.
 *
 * @see https://material-ui.com/components/drawers/#temporary-drawer
 *
 * @param props TemporaryAppBarProps
 * @returns JSX.Element
 */
export default function TemporaryAppBar(props: TemporaryAppBarProps) {
  const { title, enableElevation, enableHide, handleOpenDrawer } = props;
  const classes = useStyles(props);

  return (
    <AppBarBase
      classes={classes}
      position={"fixed"}
      title={title}
      enableHide={enableHide}
      enableElevation={enableElevation}
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleOpenDrawer}
        edge="start"
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
    </AppBarBase>
  );
}

TemporaryAppBar.defaultProps = {
  title: "TemporaryAppBar Title",
  drawerWidth: 240
};

TemporaryAppBar.propTypes = {
  classes: PropTypes.object,
  drawerWidth: PropTypes.number,

  title: PropTypes.string.isRequired,
  enableElevation: PropTypes.bool,
  enableHide: PropTypes.bool,

  handleOpenDrawer: PropTypes.func.isRequired
};
