import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBarBase from "./AppBarBase";
import { DashboardThemeProps } from "src/components/dashboard/DashboardThemeProps";
import { ToogleAppBarProps } from "../../types/ToogleAppBarProps";

const useStyles = makeStyles<DashboardThemeProps, ToogleAppBarProps>(
  (theme: DashboardThemeProps) => ({
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

export default function ToogleAppBar(props: ToogleAppBarProps) {
  const classes = useStyles(props);

  return (
    <AppBarBase
      classes={classes}
      styles={clsx(classes.appBar, {
        [classes.appBarShift]: props.openDrawer
      })}
      position={"fixed"}
      {...props}
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={props.handleOpenDrawer}
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
  drawerWidth: PropTypes.number,
  openDrawer: PropTypes.bool.isRequired,
  handleOpenDrawer: PropTypes.func.isRequired,

  enableHide: PropTypes.bool,
  enableElevation: PropTypes.bool,

  title: PropTypes.string
};
