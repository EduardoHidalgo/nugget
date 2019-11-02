import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paragraph from "../../text/Paragraph";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));

export default function DummyLarge() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
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
  );
}
