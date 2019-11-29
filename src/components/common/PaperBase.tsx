import React from "react";
import { Paper } from "@material-ui/core";
import { MaterialBase } from "src/types/MaterialBase";
import { Children } from "src/types/Children";

interface Props extends MaterialBase {
  children?: Children;
}

export default function PaperBase(props: Props) {
  return <Paper>{props.children}</Paper>;
}
