import React from "react";
import PropTypes, { string } from "prop-types";
import { Theme, makeStyles } from "@material-ui/core/styles";
import TemporaryAppBar from "../appBar/TemporaryAppBar";
import TemporaryDrawer from "../drawer/TemporaryDrawer";
import { TemporaryDashboardProps } from "../../types/TemporaryDashboardProps";

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    display: "flex"
  }
}));

/** Variante de Dashboard: Este dashboard incluye el TemporaryDrawer y el
 * TemporaryAppBar.
 *
 * @param props TemporaryDashboardProps
 * @returns JSX.Element
 */
export default function TemporaryDashboard(props: TemporaryDashboardProps) {
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
    handleCloseDrawer,
    handleModule,
    children
  } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <TemporaryAppBar
        title={title}
        drawerWidth={240}
        enableHide={enableHide}
        enableElevation={enableElevation}
        handleOpenDrawer={handleOpenDrawer}
      />
      <TemporaryDrawer
        drawerWidth={240}
        {...drawerProps}
        indexes={indexes}
        titles={titles}
        icons={icons}
        openDrawer={openDrawer}
        handleModule={handleModule}
        handleOpenDrawer={handleOpenDrawer}
        handleCloseDrawer={handleCloseDrawer}
      />
      {children}
    </div>
  );
}

TemporaryDashboard.defaultProps = {
  title: "Temporary Dashboard"
};

TemporaryDashboard.propTypes = {
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
  handleCloseDrawer: PropTypes.func.isRequired,
  handleModule: PropTypes.func.isRequired,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
