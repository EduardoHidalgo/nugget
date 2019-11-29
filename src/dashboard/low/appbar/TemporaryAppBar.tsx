import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBarBase from "../../base/AppBarBase";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { DashboardThemeProps } from "src/dashboard/base/DashboardThemeProps";
import { TemporaryAppBarProps } from "./TemporaryAppBarProps";

const useStyles = makeStyles<DashboardThemeProps, TemporaryAppBarProps>(
  (theme: DashboardThemeProps) => ({
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

export default function TemporaryAppBar(props: TemporaryAppBarProps) {
  const classes = useStyles(props);

  return (
    <AppBarBase
      classes={classes}
      position={"fixed"}
      title={props.title}
      enableHide={props.enableHide}
      enableElevation={props.enableElevation}
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={props.handleOpenDrawer}
        edge="start"
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
    </AppBarBase>
  );
}

TemporaryAppBar.propTypes = {
  drawerWidth: PropTypes.number,
  enableElevation: PropTypes.bool,
  enableHide: PropTypes.bool,

  handleOpenDrawer: PropTypes.func.isRequired,

  title: PropTypes.string.isRequired
};
