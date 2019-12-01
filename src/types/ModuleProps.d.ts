/** Esta interfaz define las propiedades que debe recibir
 * el componente "Module" antes de manipularse por el dashboard
 * y ser inyectados nuevos props.
 */
export interface ModuleProps {
  title: string;
  icon: React.ReactElement;
  index: string;
}
