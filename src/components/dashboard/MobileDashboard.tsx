import React from "react";
import PropTypes, { string } from "prop-types";
import { Theme, makeStyles } from "@material-ui/core/styles";
import BottomAppBar from "../appBar/BottomAppBar";
import TemporaryDrawer from "../drawer/TemporaryDrawer";
import { MobileDashboardProps } from "../../types/MobileDashboardProps";

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    display: "flex"
  }
}));

/** Variante de Dashboard: Renderea un dashboard adaptado para dispositivos
 * mobile, con un appbar en la parte inferior de la ventana y un Drawer temporal
 * swippeable.
 *
 * @param props MobileDashboardProps
 * @returns JSX.Element
 */
export default function MobileDashboard(props: MobileDashboardProps) {
  const {
    drawerProps,
    indexes,
    titles,
    icons,
    openDrawer,
    handleOpenDrawer,
    handleCloseDrawer,
    handleModule,
    children
  } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <BottomAppBar handleOpenDrawer={handleOpenDrawer} />
      <TemporaryDrawer
        type={"mobile"}
        {...drawerProps}
        drawerWidth={240}
        indexes={indexes}
        titles={titles}
        icons={icons}
        openDrawer={openDrawer}
        handleOpenDrawer={handleOpenDrawer}
        handleCloseDrawer={handleCloseDrawer}
        handleModule={handleModule}
        swippeable
      />
      {children}
    </div>
  );
}

MobileDashboard.propTypes = {
  indexes: PropTypes.arrayOf(string).isRequired,
  titles: PropTypes.arrayOf(string).isRequired,
  icons: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,

  openDrawer: PropTypes.bool.isRequired,
  handleModule: PropTypes.func.isRequired,
  handleOpenDrawer: PropTypes.func.isRequired,
  handleCloseDrawer: PropTypes.func.isRequired,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
