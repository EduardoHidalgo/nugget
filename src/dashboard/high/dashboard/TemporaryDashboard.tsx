import React from "react";
import PropTypes, { string } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TemporaryAppBar from "../../low/appbar/TemporaryAppBar";
import TemporaryDrawer from "../../low/drawer/TemporaryDrawer";
import { TemporaryAppBarProps } from "src/dashboard/low/appbar/TemporaryAppBarProps";
import { Children } from "src/Children";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  }
}));

interface Props extends Children {
  title: string;
  enableHide: boolean;
  enableElevation: boolean;
  keys: Array<string>;
  titles: Array<string>;
  icons: Array<React.ReactElement>;
  handleModule: (key?: string) => void;
  openDrawer: boolean;
  handleCloseDrawer: () => void;
  handleOpenDrawer: () => void;
}

export default function TemporaryDashboard(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TemporaryAppBar
        handleOpenDrawer={props.handleOpenDrawer}
        drawerWidth={240}
        title={props.title}
        enableHide={props.enableHide}
        enableElevation={props.enableElevation}
      />
      <TemporaryDrawer
        openDrawer={props.openDrawer}
        handleOpenDrawer={props.handleOpenDrawer}
        drawerWidth={240}
        keys={props.keys}
        titles={props.titles}
        icons={props.icons}
        handleModule={props.handleModule}
        handleCloseDrawer={props.handleCloseDrawer}
      />
      {props.children}
    </div>
  );
}

TemporaryDashboard.defaultProps = {
  title: "Temporary Dashboard"
};

TemporaryDashboard.propTypes = {
  title: PropTypes.string,
  handleModule: PropTypes.func.isRequired,
  openDrawer: PropTypes.bool.isRequired,
  handleOpenDrawer: PropTypes.func.isRequired,
  enableElevation: PropTypes.bool,
  enableHide: PropTypes.bool,
  keys: PropTypes.arrayOf(string).isRequired,
  titles: PropTypes.arrayOf(string).isRequired,
  icons: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
