import React from "react";
import TextBase from "../../base/TextBase";

export default function Paragraph(props) {
  return <TextBase component="p">{props.children}</TextBase>;
}
