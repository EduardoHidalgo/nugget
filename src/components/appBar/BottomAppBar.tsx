import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBarBase from "./AppBarBase";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { BottomAppBarProps } from "../../types/BottomAppBarProps";
import { DashboardThemeProps } from "src/components/dashboard/DashboardThemeProps";

const useStyles = makeStyles<DashboardThemeProps, BottomAppBarProps>(
  (theme: DashboardThemeProps) => ({
    appBar: {
      top: "auto",
      bottom: 0,
      ...theme.appBar
    }
  })
);

export default function BottomAppBar(props: BottomAppBarProps) {
  const classes = useStyles(props);

  return (
    <AppBarBase classes={classes} styles={classes.appBar} position={"fixed"}>
      <IconButton edge="start" color="inherit" onClick={props.handleOpenDrawer}>
        <MenuIcon />
      </IconButton>
    </AppBarBase>
  );
}

BottomAppBar.propTypes = {
  handleOpenDrawer: PropTypes.func.isRequired
};
