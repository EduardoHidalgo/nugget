import { MaterialBase } from "./MaterialBase";

export interface PermanentAppBarProps extends MaterialBase {
  title: string;
  enableElevation: boolean;
  enableHide: boolean;
  drawerWidth: number;
}
