import { HideOnScrollProps } from "./HideOnScrollProps";
import { MaterialBase } from "./MaterialBase";
import { Children } from "./Children";

/** Interfaz que define las propiedades que debe
 * tener el componente "AppBarBase".
 */
export interface AppBarBaseProps
  extends HideOnScrollProps,
    MaterialBase,
    Children {
  /** Mutación del objeto classes (viene de MaterialBase).  */
  classes: Record<string, string>;

  /** String que recibe el título a mostrar en el AppBar */
  title?: string;

  /** Enum de strings que establece una propiedad de estilos del AppBar de material-ui */
  position?: "static" | "absolute" | "fixed" | "relative" | "sticky";
}
