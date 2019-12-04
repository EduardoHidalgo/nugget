/** Esta interfaz define las propiedades nativas del
 * componente Drawer de material-ui.
 */
export interface DrawerBaseNativeProps {
  /** Lado del que aparece el Drawer al aparecer. */
  anchor?: "left" | "top" | "right" | "bottom";

  /** Establece la altura del drawer (concepto de material design). Limitado
   * a valores enteros entre 0 y 16. */
  elevation?: number;

  /** Establece el tiempo en milisegundos que tarda el drawer en animar su entrada
   * o salida. El valor se aplica por cada animación, no entre ambas. */
  transitionDuration?: number;
}
