import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { Children } from "src/Children";

interface Props {
  drawerWidth: number;
  openDrawer: boolean;
  children: Children;
}

const useStyles = makeStyles<Theme, Props>((theme: Theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: props => -props.drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: "0 !important"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
}));

export default function PersistentModule(props: Props) {
  const classes = useStyles(props);

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: props.openDrawer
      })}
    >
      <div className={classes.drawerHeader} />
      {props.children}
    </main>
  );
}

PersistentModule.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
  openDrawer: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
