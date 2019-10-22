import React from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";

export default function ContainerBase(props) {
  return (
    <Container
      maxWidth={props.maxWidth}
      fixed={props.fixed}
      classes={props.classes}
    >
      {props.children}
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
