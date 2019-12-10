import { Children } from "./Children";
import { ElementType } from "react";

/** Interfaz que define las propiedades que debe
 * tener el componente "PaperBase".
 *
 * @see https://material-ui.com/api/paper/
 */
export interface PaperBaseProps extends Children {
  /** Si es true, las esquinas redondeadas se desactivan. */
  square?: boolean;

  /** Produndidad de las sombras bajo el elemento. Acepta valores entre 0 y 24. */
  elevation?: number;

  /** Componente usado en la raíz de nodo. */
  component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
}
