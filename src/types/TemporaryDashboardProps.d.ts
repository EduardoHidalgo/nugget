import { Children } from "./Children";

/** Interfaz que define las propiedades que debe
 * tener el componente "TemporaryDashboard".
 */
export interface TemporaryDashboardProps extends Children {
  /** String que recibe el título a mostrar en el AppBar */
  title?: string;

  /** Arreglo de keys de los módulos. */
  keys: Array<string>;

  /** Arreglo de textos a mostrar de los módulos. */
  titles: Array<string>;

  /** Arreglo de los íconos a mostrar de los módulos. */
  icons: Array<React.ReactElement>;

  /** Boolean que define si la animación de hide en AppBar está activa. */
  enableHide: boolean;

  /** Boolean que indica si la animación de elevación en AppBar está activa. */
  enableElevation: boolean;

  /** State que establece si el Drawer se encuentra abierto o cerrado. */
  openDrawer: boolean;

  /** Función que comunica el dashboard con el componente. Hace trigger del
  estado "openDrawer" del drawer. */
  handleOpenDrawer: () => void;

  /** Función que ejecuta el cierre del Drawer. */
  handleCloseDrawer: () => void;

  /** Función que devuelve la key del módulo clickeado
   * en el DrawerMenu. */
  handleModule: (key: string) => void;
}
