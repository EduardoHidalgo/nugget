import React from "react";
import PropTypes from "prop-types";
import TextBase from "../common/TextBase";

export default function Paragraph(props) {
  return <TextBase component="p">{props.children}</TextBase>;
}

Paragraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
