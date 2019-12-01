import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBarBase from "./AppBarBase";
import { PermanentAppBarProps } from "../../types/PermanentAppBarProps";
import { DashboardTheme } from "../../types/DashboardTheme";

const useStyles = makeStyles<DashboardTheme, PermanentAppBarProps>(
  (theme: DashboardTheme) => ({
    appBar: {
      width: props => `calc(100% - ${props.drawerWidth}px)`,
      marginLeft: props => props.drawerWidth,
      ...theme.appBar
    },
    appBarTitle: {
      ...theme.appBarTitle
    }
  })
);

/** Variante de AppBar: Posiciona el AppBar en la parte inferior de la vista
 * con diseño orientado a mobile.
 *
 * @see https://material-ui.com/components/drawers/#permanent-drawer
 *
 * @param props PermanentAppBarProps
 * @returns JSX.Element
 */
export default function PermanentAppBar(props: PermanentAppBarProps) {
  const { title, enableElevation, enableHide } = props;
  const classes = useStyles(props);

  return (
    <AppBarBase
      classes={classes}
      position={"fixed"}
      title={title}
      enableHide={enableHide}
      enableElevation={enableElevation}
    />
  );
}

PermanentAppBar.defaultProps = {
  title: "PermanentAppBar Title",
  drawerWidth: 240
};

PermanentAppBar.propTypes = {
  classes: PropTypes.object,
  drawerWidth: PropTypes.number,

  title: PropTypes.string.isRequired,
  enableElevation: PropTypes.bool,
  enableHide: PropTypes.bool
};
