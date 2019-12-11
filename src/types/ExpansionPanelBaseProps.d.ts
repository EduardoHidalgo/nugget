import { Children } from "./Children";
import { PaperBaseProps } from "./PaperBaseProps";
/** Interfaz que define las propiedades que debe
 * tener el componente "ExpansionPanelBase".
 */
export interface ExpansionPanelBaseProps extends Children {
  /** si es true, renderea un divider entre el PanelSummary y el PanelDetails. */
  divider?: boolean;

  /** Activa el efecto acordeón, donde abrir un panel cierra los demás. */
  enableAccordion?: boolean;

  /** Objeto que define los props que puede recibir cada elemento del ExpansionPanel. */
  elements: Array<Panel>;
}

interface Panel extends PaperBaseProps {
  /** Titulo del panel expansivo. */
  title: string;

  /** si es true, renderea un divider entre el PanelSummary y el PanelDetails. */
  content: React.ReactNode;

  /** Si es true, por default comienza el panel expandido. */
  defaultExpanded?: boolean;

  /** Desactiva el panel. */
  disabled?: boolean;

  /** Si se entrega este prop, permite controlar externamente si está abierto o cerrado. */
  expanded?: boolean;
}
