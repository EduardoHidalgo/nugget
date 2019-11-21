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

export default function MobileModule(props: Props) {
  const classes = useStyles(props);

  return (
    <main className={classes.content}>
      {props.children}
      <div className={classes.toolbar} />
    </main>
  );
}

MobileModule.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
