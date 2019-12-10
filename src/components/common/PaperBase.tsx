import React from "react";
import { Paper } from "@material-ui/core";
import { PaperBaseProps } from "../../types/PaperBaseProps";

/** Componente base que implementa el componente Paper
 * nativo de material-ui.
 *
 * @param props PaperBaseProps
 * @returns JSX.Element
 */
export default function PaperBase(props: PaperBaseProps) {
  const { square, elevation, component, children } = props;

  return (
    <Paper square={square} elevation={elevation} component={component}>
      {children}
    </Paper>
  );
}
