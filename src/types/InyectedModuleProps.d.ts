import { ModuleProps } from "./ModuleProps";
import { Children } from "./Children";

/** Esta interfaz define las propiedades que debe recibir
 * el componente "Module" después de recibir la inyección de
 * props por el componente DashboardBase.
 */
export interface InyectedModuleProps extends ModuleProps, Children {
  /** Especifica que tipo de estilos recibe el módulo para adecuarse
   * al tipo de dashboard rendereado.
   */
  moduleType: "permanent" | "persistent" | "temporary" | "mobile";

  /** Number que define el ancho del drawer. */
  drawerWidth: number;

  /** State que establece si el Drawer se encuentra abierto o cerrado. */
  openDrawer: boolean;
}
