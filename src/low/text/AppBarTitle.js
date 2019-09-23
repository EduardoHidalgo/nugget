import React from "react";
import TextBase from "../../base/TextBase";

export default function AppBarTitle(props) {
  return (
    <TextBase variant="h6" noWrap>
      {props.children}
    </TextBase>
  );
}
