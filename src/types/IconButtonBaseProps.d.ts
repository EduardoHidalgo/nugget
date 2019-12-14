import { MaterialBase } from "./MaterialBase";
import { Children } from "./Children";

/** Interfaz que define las propiedades que debe
 * tener el componente "IconButton".
 *
 * @see https://material-ui.com/api/icon-button/
 */
export interface IconButtonBaseProps extends MaterialBase {
  /** Recibe un elemento como ícono. */
  icon: React.ReactNode;

  /** Boolean que setea estilos para desactivar el botón. */
  disabled?: boolean;

  /** Boolean que desactiva el efecto "ripple" cuando se
   * hace foco con el teclado. */
  disableFocusRipple?: boolean;

  /** Boolean que desactiva el efecto "ripple". */
  disableRipple?: boolean;

  /** Añade un margen negativo para contraactuar con el padding. */
  edge?: "start" | "end" | false;

  /** Tamaño del botón. */
  size?: "small" | "medium";

  /** Función que recibe el componente que se ejecutará al hacer click. */
  onClick: () => void;
}
