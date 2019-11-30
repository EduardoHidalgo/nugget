import { MaterialBase } from "./MaterialBase";
import { Children } from "./Children";

/** Interfaz que define las propiedades que debe
 * tener el componente "ContainerBase".
 *
 * @see https://material-ui.com/api/container/
 */
export interface ContainerBaseProps extends MaterialBase, Children {
  /** Determina el tamaño máximo del container. El contenedor crece en tamaño
   * junto con la pantalla. Establece "false" para desabilitar el maxWidth.
   */
  maxWidth?: false | "xs" | "sm" | "md" | "lg" | "xl";

  /** Establece el width máximo igual al width mínimo del breakpoint actual. */
  fixed?: boolean;
}
