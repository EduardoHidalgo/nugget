import React from "react";
import PropTypes from "prop-types";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";
import { FabButtonBaseProps } from "../../types/FabButtonBaseProps";

const useStyles = makeStyles<Theme, FabButtonBaseProps>((theme: Theme) => ({
  fabButton: {
    margin: theme.spacing(1)
  }
}));

/** Componente base que implementa el componente Fab
 * nativo de material-ui.
 *
 * @see https://material-ui.com/components/buttons/#floating-action-buttons
 *
 * @param props ButtonGroupBaseProps
 * @returns JSX.Element
 */
export default function FabButtonBase(props: FabButtonBaseProps) {
  const classes = useStyles(props);

  const {
    label,
    icon,
    disabled,
    disableFocusRipple,
    disableRipple,
    href,
    size,
    onClick
  } = props;

  return (
    <Fab
      className={classes.fabButton}
      disabled={disabled}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
      href={href}
      size={size}
      variant={label != undefined ? "extended" : "round"}
      onClick={onClick}
    >
      {icon}
      {label}
    </Fab>
  );
}

FabButtonBase.defaultProps = {
  size: "medium"
};

FabButtonBase.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  disableFocusRipple: PropTypes.bool,
  disableRipple: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func.isRequired
};
