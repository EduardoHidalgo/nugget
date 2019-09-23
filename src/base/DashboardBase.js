import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DummyMedium from "../dummy/DummyMedium";
import DrawerBase from "./DrawerBase";
import AppBarBase from "./AppBarBase";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  }
}));

export default function DashboardBase() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBarBase />
      <DrawerBase />
      <DummyMedium />
    </div>
  );
}
