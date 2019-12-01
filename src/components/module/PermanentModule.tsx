import React from "react";
import PropTypes from "prop-types";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { PermanentModuleProps } from "../../types/PermanentModuleProps";

const useStyles = makeStyles<Theme, PermanentModuleProps>((theme: Theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1)
  },
  toolbar: theme.mixins.toolbar
}));

/** Variante de Module: Renderea un módulo con estilos apropiados
 * para el PermanentDashboard.
 *
 * @param props PermanentModuleProps
 * @returns JSX.Element
 */
export default function PermanentModule(props: PermanentModuleProps) {
  const { children } = props;
  const classes = useStyles(props);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {children}
    </main>
  );
}

PermanentModule.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
