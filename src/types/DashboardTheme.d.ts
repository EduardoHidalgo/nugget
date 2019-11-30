import { Theme } from "@material-ui/core";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface DashboardThemeProps extends Theme {
    appBar?: {
      color: string;
    };
    appBarTitle: {
      color: string;
    };
  }
}

export interface DashboardTheme extends Theme {
  appBar?: {
    color: string;
  };
  appBarTitle: {
    color: string;
  };
}
