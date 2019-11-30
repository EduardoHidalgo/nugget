import { MaterialBase } from "./MaterialBase";
import { Children } from "./Children";

/** Interfaz que define las propiedades que debe
 * tener el componente "TextBase".
 *
 * @see https://material-ui.com/api/typography/
 */
export interface TextBaseProps extends MaterialBase, Children {
  /** Establece la alineación del texto en el componente. */
  align?: "inherit" | "left" | "center" | "right" | "justify";

  /** Componente utilizado para la raíz del nodo. */
  component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;

  /** Controla el tipo de display. */
  display?: "inline" | "initial" | "block";

  /** Boolean que añade un bottom margin al texto */
  gutterBottom?: boolean;

  /** Boolean que produce que el texto se trunque elipticamente
   * en vez de hacer "wrap".
   */
  noWrap?: boolean;

  /** Boolean que añade un bottom margin al texto */
  paragraph?: boolean;

  /** Aplica el estilo de tipografía del theme de material-ui. */
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "srOnly"
    | "inherit";
}
