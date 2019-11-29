import React from "react";
import PropTypes, { string } from "prop-types";
import { Theme, makeStyles } from "@material-ui/core/styles";
import BottomAppBar from "../../low/appbar/BottomAppBar";
import TemporaryDrawer from "../../low/drawer/TemporaryDrawer";
import { Children } from "src/Children";
import { BottomAppBarProps } from "src/dashboard/low/appbar/BottomAppBarProps";

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    display: "flex"
  }
}));

interface Props extends Children, BottomAppBarProps {
  title: string;
  enableHide: boolean;
  enableElevation: boolean;
  keys: Array<string>;
  titles: Array<string>;
  icons: Array<React.ReactElement>;
  handleModule: (key?: string) => void;
  openDrawer: boolean;
  handleCloseDrawer: () => void;
}

export default function MobileDashboard(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BottomAppBar handleOpenDrawer={props.handleOpenDrawer} />
      <TemporaryDrawer
        openDrawer={props.openDrawer}
        handleOpenDrawer={props.handleOpenDrawer}
        drawerWidth={240}
        keys={props.keys}
        titles={props.titles}
        icons={props.icons}
        handleModule={props.handleModule}
        handleCloseDrawer={props.handleCloseDrawer}
        swippeable
      />
      {props.children}
    </div>
  );
}

MobileDashboard.propTypes = {
  handleModule: PropTypes.func.isRequired,
  openDrawer: PropTypes.bool.isRequired,
  handleOpenDrawer: PropTypes.func.isRequired,
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
