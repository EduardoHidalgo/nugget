import { Children } from "./Children";

/** Interfaz que define las propiedades que debe
 * tener el componente "ToogleAppBar".
 */
export interface PersistentModuleProps extends Children {
  /** Number que define el ancho del drawer. */
  drawerWidth: number;

  /** State que establece si el Drawer se encuentra abierto o cerrado. */
  openDrawer: boolean;
}
