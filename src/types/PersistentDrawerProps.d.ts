import { DrawerBaseProps } from "./DrawerBaseProps";

/** Interfaz que define las propiedades que debe
 * tener el componente "PersistentDrawer".
 */
export interface PersistentDrawerProps extends DrawerBaseProps {
  /** Number que define el ancho del drawer. */
  drawerWidth: number;
}
