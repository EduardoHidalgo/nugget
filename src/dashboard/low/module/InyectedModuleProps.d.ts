import { Children } from "src/Children";

/** Esta interfaz define las propiedades que debe recibir
 * el componente "Module" después de recibir la inyección de
 * props por el componente DashboardBase.
 */
export interface InyectedModuleProps {
  moduleType?: "permanent" | "persistent" | "temporary" | "mobile";
  drawerWidth: number;
  openDrawer: boolean;
  children: Children;
}
