import React from "react";
import PropTypes from "prop-types";
import { Theme, makeStyles } from "@material-ui/core/styles";
import DrawerBase from "../../base/DrawerBase";
import { DrawerBaseProps } from "../../base/DrawerBaseProps";

const useStyles = makeStyles<Theme, TemporaryDrawerProps>(() => ({
  root: {
    display: "flex"
  },
  drawer: {
    width: props => +props.drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: props => +props.drawerWidth
  }
}));

interface TemporaryDrawerProps extends DrawerBaseProps {
  drawerWidth: number;
  swippeable?: boolean;
}

export default function TemporaryDrawer(props: TemporaryDrawerProps) {
  const classes = useStyles(props);

  return (
    <DrawerBase
      classes={classes}
      type={props.swippeable ? "mobile" : "temporary"}
      {...props}
    />
  );
}

TemporaryDrawer.defaultProps = {
  drawerWidth: 240,
  swippeable: false
};

TemporaryDrawer.propTypes = {
  drawerWidth: PropTypes.number,
  swippeable: PropTypes.bool,

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
