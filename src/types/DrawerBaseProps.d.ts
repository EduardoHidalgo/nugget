import { MaterialBase } from "src/types/MaterialBase";
import { Children } from "src/types/Children";
import { DrawerMenuBaseProps } from "./DrawerMenuBaseProps";

/** Esta interfaz define las propiedades que debe recibir
 * el componente "DrawerBase". */
export interface DrawerBaseProps
  extends DrawerMenuBaseProps,
    MaterialBase,
    Children {
  /** Lado del que aparece el Drawer al aparecer. */
  anchor?: "left" | "top" | "right" | "bottom";

  /** State que establece si el Drawer se encuentra abierto o cerrado. */
  openDrawer: boolean;

  /** Función que ejecuta el cierre del Drawer. */
  handleCloseDrawer: () => void;

  /** Función que comunica el dashboard con el componente. Hace trigger del
  estado "openDrawer" del drawer. */
  handleOpenDrawer: () => void;
}
