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

  /** Establece */
  elevation?: number;

  transitionDuration?: number;

  /** State que establece si el Drawer se encuentra abierto o cerrado. */
  openDrawer: boolean;

  /** Función que ejecuta el cierre del Drawer. */
  handleCloseDrawer: () => void;

  /** Función que comunica el dashboard con el componente. Hace trigger del
  estado "openDrawer" del drawer. */
  handleOpenDrawer: () => void;
}
