import React from "react";
import TextBase from "../../base/TextBase";

export default function Title(props) {
  return (
    <TextBase variant="h5" component="h3">
      {props.children}
    </TextBase>
  );
}
