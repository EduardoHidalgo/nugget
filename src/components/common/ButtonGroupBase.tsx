import React from "react";
import PropTypes from "prop-types";
import { ButtonGroup, Button } from "@material-ui/core";
import { ButtonGroupBaseProps } from "../../types/ButtonGroupBaseProps";

/** Componente base que implementa el componente ButtonGroup
 * nativo de material-ui.
 *
 * @see https://material-ui.com/components/buttons/#grouped-buttons
 *
 * @param props ButtonGroupBaseProps
 * @returns JSX.Element
 */
export default function ButtonGroupBase(props: ButtonGroupBaseProps) {
  const { groupName, buttons, variant, disabled } = props;

  return (
    <ButtonGroup variant={variant} disabled={disabled}>
      {buttons.map((buttonProps, i) => (
        <Button key={`${groupName}-button${i}`} {...buttonProps}>
          {buttonProps.label}
        </Button>
      ))}
    </ButtonGroup>
  );
}

ButtonGroupBase.defaultProps = {
  size: "medium",
  variant: "contained"
};

ButtonGroupBase.propTypes = {
  groupName: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
  disabled: PropTypes.bool,
  disableFocusRipple: PropTypes.bool,
  disableRipple: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["text", "outlined", "contained"])
};
