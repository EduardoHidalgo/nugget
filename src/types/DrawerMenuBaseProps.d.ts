/** Esta interfaz define las propiedades básicas
 * asociadas con el componente DrawerMenu. */
export interface DrawerMenuBaseProps {
  /** Tipo de Drawer a renderear. */
  type?: "permanent" | "persistent" | "temporary" | "mobile";

  /** Arreglo de indexes de los módulos. */
  indexes: Array<string>;

  /** Arreglo de textos a mostrar de los módulos. */
  titles: Array<string>;

  /** Arreglo de los íconos a mostrar de los módulos. */
  icons: Array<React.ReactElement>;

  /** Función que devuelve el index del módulo clickeado
   * en el DrawerMenu. */
  handleModule: (index: string) => void;
}
