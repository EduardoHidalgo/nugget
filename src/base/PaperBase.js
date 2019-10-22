import React from "react";
import { Paper } from "@material-ui/core";

export default function PaperBase(props) {
  return <Paper>{props.children}</Paper>;
}
