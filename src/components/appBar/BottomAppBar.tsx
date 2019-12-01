import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBarBase from "./AppBarBase";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { BottomAppBarProps } from "../../types/BottomAppBarProps";
import { DashboardTheme } from "../../types/DashboardTheme";

const useStyles = makeStyles<DashboardTheme, BottomAppBarProps>(
  (theme: DashboardTheme) => ({
    appBar: {
      top: "auto",
      bottom: 0,
      ...theme.appBar
    }
  })
);

/** Variante de AppBar: Posiciona el AppBar en la parte inferior de la vista
 * con diseño orientado a mobile.
 *
 * @see https://material-ui.com/components/app-bar/#bottom-app-bar
 *
 * @param props BottomAppBarProps
 * @returns JSX.Element
 */
export default function BottomAppBar(props: BottomAppBarProps) {
  const { handleOpenDrawer } = props;
  const classes = useStyles(props);

  return (
    <AppBarBase classes={classes} styles={classes.appBar} position={"fixed"}>
      <IconButton edge="start" color="inherit" onClick={handleOpenDrawer}>
        <MenuIcon />
      </IconButton>
    </AppBarBase>
  );
}

BottomAppBar.propTypes = {
  classes: PropTypes.object,

  handleOpenDrawer: PropTypes.func.isRequired
};
