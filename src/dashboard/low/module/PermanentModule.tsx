import React from "react";
import PropTypes from "prop-types";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { Children } from "src/Children";

interface Props {
  children: Children;
}

const useStyles = makeStyles<Theme, Props>((theme: Theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1)
  },
  toolbar: theme.mixins.toolbar
}));

export default function PermanentModule(props: Props) {
  const classes = useStyles(props);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {props.children}
    </main>
  );
}

PermanentModule.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
