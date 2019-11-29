import { MaterialBase } from "src/types/MaterialBase";
import { Children } from "src/types/Children";
import { HideOnScrollProps } from "../drawer/HideOnScrollProps";

export interface AppBarBaseProps extends Children, MaterialBase {
  classes: Record<string, string>;
  title?: string;
  position?: "static" | "absolute" | "fixed" | "relative" | "sticky";
  enableHide?: boolean;
  elevation?: number;
  enableElevation?: boolean;
}
