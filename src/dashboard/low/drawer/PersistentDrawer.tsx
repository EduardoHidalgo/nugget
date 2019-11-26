import React from "react";
import PropTypes from "prop-types";
import { Theme, makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DrawerBase from "../../base/DrawerBase";
import { DrawerBaseProps } from "../../base/DrawerBaseProps";

const useStyles = makeStyles<Theme, PersistentDrawerProps>((theme: Theme) => ({
  drawer: {
    width: props => +props.drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: props => +props.drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
}));

interface PersistentDrawerProps extends DrawerBaseProps {
  drawerWidth: number;
}

export default function PersistentDrawer(props: PersistentDrawerProps) {
  const classes = useStyles(props);

  return (
    <DrawerBase classes={classes} type={"persistent"} {...props}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={props.handleOpenDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
    </DrawerBase>
  );
}

PersistentDrawer.defaultProps = {
  drawerWidth: 240
};

PersistentDrawer.propTypes = {
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
