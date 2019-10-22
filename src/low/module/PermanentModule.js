import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1)
  },
  toolbar: theme.mixins.toolbar
}));

export default function PermanentModule(props) {
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
