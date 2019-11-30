import React from "react";
import PropTypes from "prop-types";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { MobileModuleProps } from "../../types/MobileModule";

const useStyles = makeStyles<Theme, MobileModuleProps>((theme: Theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1)
  },
  toolbar: theme.mixins.toolbar
}));

/** Variante de Module: variante especial para MobileDashboard
 * que incluye un toolbar de espaciado en la parte inferior de
 * la vista (por el AppBarBottom).
 *
 * @param props Children
 * @returns JSX.Element
 */
export default function MobileModule(props: MobileModuleProps) {
  const { children } = props;
  const classes = useStyles(props);

  return (
    <main className={classes.content}>
      {children}
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
