import React from "react";
import PropTypes, { string } from "prop-types";
import { Theme, makeStyles } from "@material-ui/core/styles";
import ToogleAppBar from "../appBar/ToogleAppBar";
import PersistentDrawer from "../drawer/PersistentDrawer";
import { Children } from "src/types/Children";
import { ToogleAppBarProps } from "src/types/ToogleAppBarProps";

const useStyles = makeStyles<Theme>((theme: Theme) => ({
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

  handleOpenDrawer: () => void;
  openDrawer: boolean;
}

export default function PersistentDashboard(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ToogleAppBar
        openDrawer={props.openDrawer}
        handleOpenDrawer={props.handleOpenDrawer}
        drawerWidth={240}
        title={props.title}
        enableHide={props.enableHide}
        enableElevation={props.enableElevation}
      />
      <PersistentDrawer
        openDrawer={props.openDrawer}
        handleOpenDrawer={props.handleOpenDrawer}
        handleCloseDrawer={() => {}}
        drawerWidth={240}
        keys={props.keys}
        titles={props.titles}
        icons={props.icons}
        handleModule={props.handleModule}
      />
      {props.children}
    </div>
  );
}

PersistentDashboard.defaultProps = {
  title: "Persistent Dashboard"
};

PersistentDashboard.propTypes = {
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
