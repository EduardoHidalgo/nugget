import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  iconButton: {
    margin: theme.spacing(1)
  }
}));

export default function IconButtonBase() {
  const classes = useStyles();

  return (
    <IconButton
      className={clsx(props.classes, classes.iconButton)}
      disabled={props.disabled}
      disableFocusRipple={props.disableFocusRipple}
      disableRipple={props.disableRipple}
      edge={props.edge}
      size={props.size}
    >
      {props.children}
    </IconButton>
  );
}

IconButtonBase.defaultProps = {
  classes: {},
  disabled: false,
  disableFocusRipple: false,
  disableRipple: false,
  edge: false,
  size: "medium",
  children: "Text Example"
};

IconButtonBase.propTypes = {
  classes: PropTypes.object,
  disabled: PropTypes.bool,
  disableFocusRipple: PropTypes.bool,
  disableRipple: PropTypes.bool,
  edge: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  size: PropTypes.string,

  children: PropTypes.node.isRequired
};
