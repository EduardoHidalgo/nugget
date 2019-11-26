import React from "react";
import PropTypes from "prop-types";
import { Theme, makeStyles } from "@material-ui/core/styles";
import DrawerBase from "../../base/DrawerBase";
import { DrawerBaseProps } from "../../base/DrawerBaseProps";

const useStyles = makeStyles<Theme, PermanentDrawerProps>(() => ({
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

interface PermanentDrawerProps extends DrawerBaseProps {
  drawerWidth: number;
}

export default function PermanentDrawer(props: PermanentDrawerProps) {
  const classes = useStyles(props);

  return <DrawerBase classes={classes} type={"permanent"} {...props} />;
}

PermanentDrawer.defaultProps = {
  drawerWidth: 240
};

PermanentDrawer.propTypes = {
  drawerWidth: PropTypes.number,

  classes: PropTypes.object,
  styles: PropTypes.string,

  type: PropTypes.oneOf(["permanent", "persistent", "temporary", "mobile"]),
  anchor: PropTypes.oneOf(["left", "top", "right", "bottom"]),

  openDrawer: PropTypes.bool,
  handleOpenDrawer: PropTypes.func,
  handleCloseDrawer: PropTypes.func,
  handleModule: PropTypes.func.isRequired,

  keys: PropTypes.array.isRequired,
  titles: PropTypes.array.isRequired,
  icons: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
