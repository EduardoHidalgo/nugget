/** Interfaz que define las propiedades que debe
 * tener el componente "FabButtonBase".
 *
 * @see https://material-ui.com/api/fab/
 */
export interface FabButtonBaseProps {
  /** En caso de entregase este prop, convierte el Fab a su variante "extended"
   * y muestra un texto junto con el ícono. */
  label?: string;

  /** Recibe un elemento como ícono. */
  icon: React.ReactNode;

  /** Si es true, desactiva el elemento. */
  disabled?: boolean;

  /** Boolean que desactiva el efecto "ripple" cuando se
   * hace foco con el teclado. */
  disableFocusRipple?: boolean;

  /** Boolean que desactiva el efecto "ripple". */
  disableRipple?: boolean;

  /** Url que usa como link al hacer click. Si es definido, el elemento raíz se volverá
   * un tag "a". */
  href?: string;

  /** Tamaño del botón. "small" es equivalente a los estilos de un "dense button". */
  size?: "small" | "medium" | "large";

  /** Función que recibe el componente que se ejecutará al hacer click. */
  onClick: () => void;
}
