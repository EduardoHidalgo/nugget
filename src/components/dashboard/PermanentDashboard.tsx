import React from "react";
import PropTypes, { string } from "prop-types";
import { Theme, makeStyles } from "@material-ui/core/styles";
import PermanentAppBar from "../appBar/PermanentAppBar";
import PermanentDrawer from "../drawer/PermanentDrawer";
import { Children } from "src/types/Children";

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
}

export default function PermanentDashboard(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PermanentAppBar
        title={props.title}
        drawerWidth={240}
        enableHide={props.enableHide}
        enableElevation={props.enableElevation}
      />
      <PermanentDrawer
        keys={props.keys}
        titles={props.titles}
        icons={props.icons}
        handleModule={props.handleModule}
        handleOpenDrawer={() => {}}
        openDrawer={false}
        drawerWidth={240}
      />
      {props.children}
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
  keys: PropTypes.arrayOf(string).isRequired,
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
