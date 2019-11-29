export interface ToogleAppBarProps {
  handleOpenDrawer: () => void;
  enableHide?: boolean;
  enableElevation?: boolean;
  title?: string;
  drawerWidth: number;
  openDrawer: boolean;
}
