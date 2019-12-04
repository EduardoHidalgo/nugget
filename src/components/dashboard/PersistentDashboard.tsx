import React from "react";
import PropTypes, { string } from "prop-types";
import { Theme, makeStyles } from "@material-ui/core/styles";
import ToogleAppBar from "../appBar/ToogleAppBar";
import PersistentDrawer from "../drawer/PersistentDrawer";
import { PersistentDashboardProps } from "../../types/PersistentDashboardProps";

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    display: "flex"
  }
}));

/** Variante de Dashboard: Este dashboard incluye el PersistenDrawer y el
 * ToogleAppBar.
 *
 * @param props PersistentDashboardProps
 * @returns JSX.Element
 */
export default function PersistentDashboard(props: PersistentDashboardProps) {
  const {
    title,
    drawerProps,
    indexes,
    titles,
    icons,
    enableElevation,
    enableHide,
    openDrawer,
    handleOpenDrawer,
    handleModule,
    children
  } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <ToogleAppBar
        title={title}
        drawerWidth={240}
        enableHide={enableHide}
        enableElevation={enableElevation}
        openDrawer={openDrawer}
        handleOpenDrawer={handleOpenDrawer}
      />
      <PersistentDrawer
        drawerWidth={240}
        {...drawerProps}
        indexes={indexes}
        titles={titles}
        icons={icons}
        openDrawer={openDrawer}
        handleOpenDrawer={handleOpenDrawer}
        handleCloseDrawer={() => {}}
        handleModule={handleModule}
      />
      {children}
    </div>
  );
}

PersistentDashboard.defaultProps = {
  title: "Persistent Dashboard"
};

PersistentDashboard.propTypes = {
  title: PropTypes.string,

  enableElevation: PropTypes.bool,
  enableHide: PropTypes.bool,

  indexes: PropTypes.arrayOf(string).isRequired,
  titles: PropTypes.arrayOf(string).isRequired,
  icons: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,

  openDrawer: PropTypes.bool.isRequired,
  handleOpenDrawer: PropTypes.func.isRequired,
  handleModule: PropTypes.func.isRequired,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
