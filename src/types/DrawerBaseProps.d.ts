import { MaterialBase } from "src/types/MaterialBase";
import { Children } from "src/types/Children";
import { DrawerType } from "./DrawerType";

/** Esta interfaz define las propiedades que debe recibir
 * el componente "DrawerBase". */
export interface DrawerBaseProps extends DrawerType, MaterialBase, Children {
  /** Lado del que aparece el Drawer al aparecer. */
  anchor?: "left" | "top" | "right" | "bottom";

  /** State que establece si el Drawer se encuentra abierto o cerrado. */
  openDrawer?: boolean;

  /** Función que ejecuta el cierre del Drawer. */
  handleCloseDrawer?: () => void;

  /** Función que ejecuta la apertura del Drawer. */
  handleOpenDrawer?: () => void;
}
