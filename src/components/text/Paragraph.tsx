import React from "react";
import PropTypes from "prop-types";
import TextBase from "../common/TextBase";
import { MaterialBase } from "../../types/MaterialBase";
import { Children } from "../../types/Children";

interface Props extends MaterialBase, Children {}

export default function Paragraph(props: Props) {
  return (
    <TextBase component="p" {...props}>
      {props.children}
    </TextBase>
  );
}

Paragraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
