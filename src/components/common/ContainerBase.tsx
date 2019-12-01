import React from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import { ContainerBaseProps } from "../../types/ContainerBaseProps";

/** Componente base que implementa el componente Container
 * nativo de material-ui.
 *
 * @see https://material-ui.com/components/container/
 *
 * @param props ContainerBaseProps
 * @returns JSX.Element
 */
export default function ContainerBase(props: ContainerBaseProps) {
  const { maxWidth, fixed, classes, children } = props;

  return (
    <Container maxWidth={maxWidth} fixed={fixed} classes={classes}>
      {children}
    </Container>
  );
}

ContainerBase.defaultProps = {
  maxWidth: "xl",
  fixed: false,
  classes: null
};

ContainerBase.propTypes = {
  maxWidth: PropTypes.string,
  fixed: PropTypes.bool,
  classes: PropTypes.object,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
