import React from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import { MaterialBase } from "src/types/MaterialBase";
import { Children } from "src/types/Children";

interface Props extends MaterialBase {
  maxWidth?: false | "xs" | "sm" | "md" | "lg" | "xl";
  fixed?: boolean;
  children?: Children;
}

export default function ContainerBase(props: Props) {
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
