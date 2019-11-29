import { MaterialBase } from "src/MaterialBase";
import { Children } from "src/Children";
import { HideOnScrollProps } from "./HideOnScrollProps";

export interface AppBarBaseProps extends Children, MaterialBase {
  classes: Record<string, string>;
  title?: string;
  position?: "static" | "absolute" | "fixed" | "relative" | "sticky";
  enableHide?: boolean;
  elevation?: number;
  enableElevation?: boolean;
}
