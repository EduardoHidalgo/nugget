import React from "react";
import PropTypes from "prop-types";
import { Theme, makeStyles } from "@material-ui/core/styles";
import DrawerBase from "../../base/DrawerBase";

const useStyles = makeStyles<Theme, Props>((theme: Theme) => ({
  root: {
    display: "flex"
  },
  drawer: {
    width: props => props.drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: props => props.drawerWidth
  }
}));

interface Props {
  drawerWidth: number;
  openDrawer: boolean;
  keys: Array<string>;
  titles: Array<string>;
  icons: Array<React.ReactElement>;
  handleOpenDrawer: () => void;
  handleModule: (key?: string) => void;
}

export default function PermanentDrawer(props: Props) {
  const classes = useStyles(props);

  return <DrawerBase classes={classes} type={"permanent"} {...props} />;
}

PermanentDrawer.defaultProps = {
  drawerWidth: 240
};

PermanentDrawer.propTypes = {
  /* PermanentDrawer props */
  drawerWidth: PropTypes.number,

  /* Deep props */
  keys: PropTypes.array.isRequired,
  titles: PropTypes.array.isRequired,
  icons: PropTypes.array.isRequired,
  handleModule: PropTypes.func.isRequired
};
