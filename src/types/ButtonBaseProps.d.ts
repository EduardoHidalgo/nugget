import { MaterialBase } from "./MaterialBase";

/** Interfaz que define las propiedades que debe
 * tener el componente "ButtonBase".
 *
 * @see https://material-ui.com/api/button/
 */
export interface ButtonBaseProps extends MaterialBase {
  /** Texto dentro del botón. */
  label: string | JSX.Element;

  /** Si es true, desactiva el elemento. */
  disabled?: boolean;

  /** Boolean que desactiva el efecto "ripple" cuando se
   * hace foco con el teclado. */
  disableFocusRipple?: boolean;

  /** Boolean que desactiva el efecto "ripple". */
  disableRipple?: boolean;

  /** Elemento colocado después del texto (en caso de desear un ícono). */
  endIcon?: React.ReactNode;

  /** Elemento colocado antes del texto (en caso de desear un ícono). */
  startIcon?: React.ReactNode;

  /** Si es true, el botón ocupará todo el ancho de su contenedor. */
  fullWidth?: boolean;

  /** Url que usa como link al hacer click. Si es definido, el elemento raíz se volverá
   * un tag "a". */
  href?: string;

  /** Tamaño del botón. "small" es equivalente a los estilos de un "dense button". */
  size?: "small" | "medium" | "large";

  /** Variante de estilos nativos en material-ui para el botón. */
  variant?: "text" | "outlined" | "contained";

  /** Función que recibe el componente que se ejecutará al hacer click. */
  onClick: () => void;
}
