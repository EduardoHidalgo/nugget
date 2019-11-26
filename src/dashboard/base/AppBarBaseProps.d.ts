import { MaterialBase } from "src/MaterialBase";
import { Children } from "src/Children";
import { HideOnScrollProps } from "./HideOnScrollProps";

export interface AppBarBaseProps extends HideOnScrollProps, MaterialBase {
  classes: { appBar: any; root: any; appBarTitle: any };
  title: string;
  position?: "static" | "absolute" | "fixed" | "relative" | "sticky";
  enableElevation: boolean;
  enableHide: boolean;
}
