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
  const classes = useStyles(props);

  const {
    icon,
    disabled,
    disableFocusRipple,
    disableRipple,
    edge,
    size,
    onClick
  } = props;

  return (
    <IconButton
      className={clsx(props.classes, classes.iconButton)}
      disabled={disabled}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
      edge={edge}
      size={size}
      onClick={onClick}
    >
      {icon}
    </IconButton>
  );
}

IconButtonBase.defaultProps = {
  size: "medium"
};

IconButtonBase.propTypes = {
  icon: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  disableFocusRipple: PropTypes.bool,
  disableRipple: PropTypes.bool,
  edge: PropTypes.oneOf(["start", "end", false]),
  size: PropTypes.string,
  onClick: PropTypes.func.isRequired
};
