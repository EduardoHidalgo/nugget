import { ModuleProps } from "./ModuleProps";
import { DashboardTheme } from "./DashboardTheme";
import { DrawerBaseNativeProps } from "./DrawerBaseNativeProps";

/** Interfaz que define las propiedades que debe
 * tener el componente "AppBarBase".
 */
export interface DashboardBaseProps {
  /** Propiedad que implementa estilos globales para el dashboard
   * de la forma "out-of-the-box".
   */
  theme: DashboardTheme;

  /** Recibe los props nativos de drawer desde Dashboard */
  drawerProps: DrawerBaseNativeProps;

  /** Específica el tipo de dashboard a renderear. */
  type?: "permanent" | "persistent" | "temporary" | "mobile";

  /** String que recibe el título a mostrar en el AppBar */
  title?: string;

  /** Boolean que define si la animación de hide en AppBar está activa. */
  enableHide: boolean;

  /** Boolean que indica si la animación de elevación en AppBar está activa. */
  enableElevation: boolean;

  /** Espera específicamente que se le entregue via children
   * un conjunto de elementos de react de tipo "ModuleProps".
   */
  children: React.ReactElement<ModuleProps>[];
}
