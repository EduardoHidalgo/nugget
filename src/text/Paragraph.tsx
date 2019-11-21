import React from "react";
import PropTypes from "prop-types";
import TextBase from "../common/TextBase";
import { MaterialBase } from "src/MaterialBase";

interface Props extends MaterialBase {
  children?: JSX.Element[] | JSX.Element | string;
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
