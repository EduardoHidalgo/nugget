import React from "react";
import PropTypes from "prop-types";
import TextBase from "../common/TextBase";
import { MaterialBase } from "src/MaterialBase";

export default function Title(props: MaterialBase) {
  return (
    <TextBase variant="h5" component="h3">
      {props.children}
    </TextBase>
  );
}

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
