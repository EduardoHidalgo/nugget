import React from "react";
import PropTypes, { string, ReactNodeArray } from "prop-types";
import { Theme, makeStyles } from "@material-ui/core/styles";
import DrawerBase from "../../base/DrawerBase";
import { Children } from "src/Children";

interface Props {
  drawerWidth: number;
  openDrawer: boolean;
  handleModule: () => void;
  handleCloseDrawer: () => void;
  handleOpenDrawer: () => void;
  swippeable?: boolean;
  keys: Array<string>;
  titles: Array<string>;
  icons: Array<React.ReactElement>;
  children: Children;
}

const useStyles = makeStyles<Theme, Props>((theme: Theme) => ({
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

export default function TemporaryDrawer(props: Props) {
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
  swippleable: false
};

TemporaryDrawer.propTypes = {
  /* TemporaryDrawer props */
  drawerWidth: PropTypes.number,
  openDrawer: PropTypes.bool.isRequired,
  handleModule: PropTypes.func.isRequired,
  handleCloseDrawer: PropTypes.func.isRequired,
  swippleable: PropTypes.bool,

  /* Deep props */
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
