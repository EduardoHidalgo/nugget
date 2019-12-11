import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PaperBase from "../../components/common/PaperBase";
import ExpansionPanelBase from "../../components/expansionPanel/ExpansionPanelBase";
import { Typography } from "@material-ui/core";
import DummyMedium from "./DummyMedium";

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));

export default function DummyExpansionPanels() {
  const classes = useStyles();

  const content = (
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  );

  let elements = [
    { title: "Panel Expansivo 1", content },
    { title: "Panel Expansivo 2", content },
    { title: "Panel Expansivo 3", content: <DummyMedium /> }
  ];

  return (
    <PaperBase>
      <main>
        <ExpansionPanelBase elements={elements} />
      </main>
    </PaperBase>
  );
}
