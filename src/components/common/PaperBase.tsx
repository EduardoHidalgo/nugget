import React from "react";
import { Paper } from "@material-ui/core";
import { Children } from "../../types/Children";

interface PaperBaseProps extends Children {}

/** Componente base que implementa el componente Paper
 * nativo de material-ui.
 *
 * @param props IconButtonBaseProps
 * @returns JSX.Element
 */
export default function PaperBase(props: PaperBaseProps) {
  const { children } = props;
  return <Paper>{children}</Paper>;
}
