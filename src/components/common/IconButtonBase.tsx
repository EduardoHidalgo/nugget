import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Theme, IconButton } from "@material-ui/core";
import { IconButtonBaseProps } from "../../types/IconButtonBaseProps";

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  iconButton: {
    margin: theme.spacing(1)
  }
}));

/** Componente base que implementa el componente IconButton
 * nativo de material-ui.
 *
 * @param props IconButtonBaseProps
 * @returns JSX.Element
 */
export default function IconButtonBase(props: IconButtonBaseProps) {
  const {
    disabled,
    disableFocusRipple,
    disableRipple,
    edge,
    size,
    children
  } = props;

  const classes = useStyles(props);

  return (
    <IconButton
      className={clsx(props.classes, classes.iconButton)}
      disabled={disabled}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
      edge={edge}
      size={size}
    >
      {children}
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

  children: PropTypes.node
};
