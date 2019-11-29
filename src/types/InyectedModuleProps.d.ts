import { Children } from "src/types/Children";
import { ModuleProps } from "./ModuleProps";

/** Esta interfaz define las propiedades que debe recibir
 * el componente "Module" después de recibir la inyección de
 * props por el componente DashboardBase.
 */
export interface InyectedModuleProps extends ModuleProps {
  moduleType?: "permanent" | "persistent" | "temporary" | "mobile";
  drawerWidth: number;
  openDrawer: boolean;
  children: Children;
}
