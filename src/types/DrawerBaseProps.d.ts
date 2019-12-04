import { DrawerMenuBaseProps } from "./DrawerMenuBaseProps";
import { MaterialBase } from "./MaterialBase";
import { Children } from "./Children";
import { DrawerBaseNativeProps } from "./DrawerBaseNativeProps";

/** Esta interfaz define las propiedades que debe recibir
 * el componente "DrawerBase". */
export interface DrawerBaseProps
  extends DrawerBaseNativeProps,
    DrawerMenuBaseProps,
    MaterialBase,
    Children {
  /** State que establece si el Drawer se encuentra abierto o cerrado. */
  openDrawer: boolean;

  /** Función que ejecuta el cierre del Drawer. */
  handleCloseDrawer: () => void;

  /** Función que comunica el dashboard con el componente. Hace trigger del
  estado "openDrawer" del drawer. */
  handleOpenDrawer: () => void;
}
