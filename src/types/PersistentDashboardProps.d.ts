import { Children } from "./Children";
import { DrawerBaseNativeProps } from "./DrawerBaseNativeProps";

/** Interfaz que define las propiedades que debe
 * tener el componente "PersistenDashboard".
 */
export interface PersistentDashboardProps extends Children {
  /** String que recibe el título a mostrar en el AppBar */
  title?: string;

  /** Recibe los props nativos de drawer desde Dashboard */
  drawerProps: DrawerBaseNativeProps;

  /** Lado del que aparece el Drawer al aparecer. */
  isRight: boolean;

  /** Arreglo de indexes de los módulos. */
  indexes: Array<string>;

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

  /** Función que devuelve el index del módulo clickeado
   * en el DrawerMenu. */
  handleModule: (index: string) => void;
}
