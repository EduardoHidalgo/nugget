import { MaterialBase } from "./MaterialBase";
import { ButtonBaseProps } from "./ButtonGroupBaseProps";
import { ButtonBaseProps } from "./ButtonBaseProps";

/** Interfaz que define las propiedades que debe
 * tener el componente "ButtonBaseGroup".
 *
 * @see https://material-ui.com/api/button-group/
 */
export interface ButtonGroupBaseProps extends MaterialBase {
  /** Nombre del grupo de botones. Su función es para diferenciar los botones
   * a nivel "render" (vía el prop "key").
   */
  groupName: string;

  /** Array de datos para renderear los botones del GroupButtonBase */
  buttons: Array<ButtonBaseProps>;

  disabled?: boolean;

  /** Boolean que desactiva el efecto "ripple" cuando se
   * hace foco con el teclado. */
  disableFocusRipple?: boolean;

  /** Boolean que desactiva el efecto "ripple". */
  disableRipple?: boolean;

  /** Tamaño del botón. "small" es equivalente a los estilos de un "dense button". */
  size?: "small" | "medium" | "large";

  /** Variante de estilos nativos en material-ui para el grupo entero. */
  variant?: "text" | "outlined" | "contained";
}
