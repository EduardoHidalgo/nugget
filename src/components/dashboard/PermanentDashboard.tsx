import React from "react";
import PropTypes, { string } from "prop-types";
import { Theme, makeStyles } from "@material-ui/core/styles";
import PermanentAppBar from "../appBar/PermanentAppBar";
import PermanentDrawer from "../drawer/PermanentDrawer";
import { PermanentDashboardProps } from "../../types/PermanentDashboardProps";

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    display: "flex"
  }
}));

/** Variante de Dashboard: Este dashboard incluye el PermanentDrawer y
 * el PermanentAppBar.
 *
 * @param props PermanentDashboardProps
 * @returns JSX.Element
 */
export default function PermanentDashboard(props: PermanentDashboardProps) {
  const {
    title,
    indexes,
    titles,
    icons,
    handleModule,
    enableElevation,
    enableHide,
    children
  } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <PermanentAppBar
        title={title}
        drawerWidth={240}
        enableHide={enableHide}
        enableElevation={enableElevation}
      />
      <PermanentDrawer
        drawerWidth={240}
        indexes={indexes}
        titles={titles}
        icons={icons}
        openDrawer={false}
        handleOpenDrawer={() => {}}
        handleCloseDrawer={() => {}}
        handleModule={handleModule}
      />
      {children}
    </div>
  );
}

PermanentDashboard.defaultProps = {
  title: "Permanent Dashboard"
};

PermanentDashboard.propTypes = {
  title: PropTypes.string,

  handleModule: PropTypes.func.isRequired,
  enableElevation: PropTypes.bool,
  enableHide: PropTypes.bool,

  indexes: PropTypes.arrayOf(string).isRequired,
  titles: PropTypes.arrayOf(string).isRequired,
  icons: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
