import { BottomAppBarProps } from "./BottomAppBarProps";
import { Children } from "./Children";

/** Interfaz que define las propiedades que debe
 * tener el componente "MobileDashboard".
 */
export interface MobileDashboardProps extends Children, BottomAppBarProps {
  /** Arreglo de indexes de los módulos. */
  indexes: Array<string>;

  /** Arreglo de textos a mostrar de los módulos. */
  titles: Array<string>;

  /** Arreglo de los íconos a mostrar de los módulos. */
  icons: Array<React.ReactElement>;

  /** State que establece si el Drawer se encuentra abierto o cerrado. */
  openDrawer: boolean;

  /** Función que devuelve el index del módulo clickeado
   * en el DrawerMenu. */
  handleModule: (index: string) => void;

  /** Función que ejecuta el cierre del Drawer. */
  handleCloseDrawer: () => void;
}
