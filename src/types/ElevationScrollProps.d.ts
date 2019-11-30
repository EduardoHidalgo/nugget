import { HideOnScrollProps } from "./HideOnScrollProps";

/** Interfaz que define las propiedades que debe
 * tener el componente "ElevationScroll".
 */
export interface ElevationScrollProps {
  /** Variable de la API "window". */
  window?: () => Window;

  /** Boolean que indica si la animación de elevación en AppBar está activa. */
  enableElevation?: boolean;

  /** Number que define la altura */
  elevation?: number;
}

/** Interfaz que define el tipado del elemento children que espera.
 */
export interface ElevationScrollChildren {
  /** Requiere como children un elemento React de tipo <HideOnScroll />. */
  children: React.ReactElement<HideOnScrollProps>;
}
