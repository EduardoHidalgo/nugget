import { Children } from "./Children";
/** Interfaz que define las propiedades que debe
 * tener el componente "Panel".
 */
export interface ExpansionPanelContentProps extends Children {
  /** Equivalente al prop "key". */
  index: string;

  /** Titulo del panel expansivo. */
  title: string;

  /** si es true, renderea un divider entre el PanelSummary y el PanelDetails. */
  divider?: boolean;

  /** Si es true, por default comienza el panel expandido. */
  defaultExpanded?: boolean;

  /** Desactiva el panel. */
  disabled?: boolean;

  /** Si se entrega este prop, permite controlar externamente si está abierto o cerrado. */
  expanded?: boolean;

  /** Activa el efecto acordeón, donde abrir un panel cierra los demás. */
  enableAccordion?: boolean;

  /** Establece si está expandido o no en función del método de acordeón. */
  open: string | false;

  /** Función que recibe el index del panel y hace trigger del acordeón. */
  onChange: (
    index: string
  ) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => void;
}
