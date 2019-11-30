import { MaterialBase } from "src/types/MaterialBase";
import { Children } from "src/types/Children";

/** Esta interfaz define las propiedades básicas
 * asociadas con el componente DrawerMenu. */
export interface DrawerMenuBaseProps {
  /** Tipo de Drawer a renderear. */
  type?: "permanent" | "persistent" | "temporary" | "mobile";

  /** Arreglo de keys de los módulos. */
  keys: Array<string>;

  /** Arreglo de textos a mostrar de los módulos. */
  titles: Array<string>;

  /** Arreglo de los íconos a mostrar de los módulos. */
  icons: Array<React.ReactElement>;

  /** Función que devuelve la key del módulo clickeado
   * en el DrawerMenu. */
  handleModule: (key: string) => void;
}
