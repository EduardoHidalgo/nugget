import React from "react";
import PropTypes from "prop-types";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { ButtonBaseProps } from "../../types/ButtonBaseProps";

const useStyles = makeStyles<Theme, ButtonBaseProps>((theme: Theme) => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

/** Componente base que implementa el componente Button
 * nativo de material-ui.
 *
 * @see https://material-ui.com/components/buttons
 *
 * @param props ButtonGroupBaseProps
 * @returns JSX.Element
 */
export default function ButtonBase(props: ButtonBaseProps) {
  const classes = useStyles(props);

  const {
    variant,
    label,
    disabled,
    disableFocusRipple,
    disableRipple,
    endIcon,
    startIcon,
    fullWidth,
    href,
    size,
    onClick
  } = props;

  return (
    <Button
      className={classes.button}
      variant={variant}
      disabled={disabled}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
      endIcon={endIcon}
      startIcon={startIcon}
      fullWidth={fullWidth}
      href={href}
      size={size}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

ButtonBase.defaultProps = {
  size: "medium",
  variant: "contained"
};

ButtonBase.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  disableFocusRipple: PropTypes.bool,
  disableRipple: PropTypes.bool,
  endIcon: PropTypes.node,
  startIcon: PropTypes.node,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  onClick: PropTypes.func.isRequired
};
