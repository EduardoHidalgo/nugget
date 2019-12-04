import { DrawerMenuBaseProps } from "./DrawerMenuBaseProps";
import { MaterialBase } from "./MaterialBase";
import { Children } from "./Children";

/** Esta interfaz define las propiedades que debe recibir
 * el componente "DrawerBase". */
export interface DrawerBaseProps
  extends DrawerMenuBaseProps,
    MaterialBase,
    Children {
  /** Lado del que aparece el Drawer al aparecer. */
  anchor?: "left" | "top" | "right" | "bottom";

  /** Establece la altura del drawer (concepto de material design). Limitado
   * a valores enteros entre 0 y 16.
   */
  elevation?: number;

  /** Establece el tiempo en milisegundos que tarda el drawer en animar su entrada
   * o salida. El valor se aplica por cada animación, no entre ambas.
   */
  transitionDuration?: number;

  /** State que establece si el Drawer se encuentra abierto o cerrado. */
  openDrawer: boolean;

  /** Función que ejecuta el cierre del Drawer. */
  handleCloseDrawer: () => void;

  /** Función que comunica el dashboard con el componente. Hace trigger del
  estado "openDrawer" del drawer. */
  handleOpenDrawer: () => void;
}
