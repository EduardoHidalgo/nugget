import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paragraph from "../low/text/Paragraph";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));

export default function DummyLarge() {
  const classes = useStyles();

  return (
    <Fragment>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Paragraph>
          {[...new Array(40)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
              Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Paragraph>
      </main>
    </Fragment>
  );
}
