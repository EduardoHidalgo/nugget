import React from "react";
import PropTypes from "prop-types";
import { Theme, makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DrawerBase from "./DrawerBase";
import { PersistentDrawerProps } from "../../types/PersistentDrawerProps";

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

/** Variante de drawer: Permite mostrar o esconder el drawer al mismo nivel que
 * la vista, empujándola para aparecer el drawer.
 *
 * @param props PersistentDrawerProps
 * @returns JSX.Element
 */
export default function PersistentDrawer(props: PersistentDrawerProps) {
  const { handleOpenDrawer } = props;
  const classes = useStyles(props);

  return (
    <DrawerBase classes={classes} type={"persistent"} {...props}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleOpenDrawer}>
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
  elevation: PropTypes.number,
  disableToolbar: PropTypes.bool,

  openDrawer: PropTypes.bool,
  handleOpenDrawer: PropTypes.func,
  handleCloseDrawer: PropTypes.func,
  handleModule: PropTypes.func.isRequired,

  indexes: PropTypes.array.isRequired,
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
