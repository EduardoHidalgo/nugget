import React from "react";
import { Paper } from "@material-ui/core";
import { MaterialBase } from "src/MaterialBase";

interface Props extends MaterialBase {
  children?: JSX.Element[] | JSX.Element | string;
}

export default function PaperBase(props: Props) {
  return <Paper>{props.children}</Paper>;
}
