import React from "react";
import PropTypes from "prop-types";
import TextBase from "../common/TextBase";
import { MaterialBase } from "src/types/MaterialBase";
import { Children } from "src/types/Children";

interface Props extends MaterialBase {
  children?: Children;
}

export default function Paragraph(props: Props) {
  return <TextBase component="p">{props.children}</TextBase>;
}

Paragraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
