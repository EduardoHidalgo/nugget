import React, { useState, cloneElement, useEffect } from "react";
import PropTypes from "prop-types";
import {
  useTheme,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PersistentDashboard from "../high/dashboard/PersistentDashboard";
import PermanentDashboard from "../high/dashboard/PermanentDashboard";
import TemporaryDashboard from "../high/dashboard/TemporaryDashboard";
import MobileDashboard from "../high/dashboard/MobileDashboard";
import { Hidden } from "@material-ui/core";
import { ModuleProps } from "../low/module/ModuleProps";
import { InyectedModuleProps } from "../low/module/InyectedModuleProps";

interface Props {
  theme: object;
  type?: "permanent" | "persistent" | "temporary" | "mobile";
  title: string;
  enableHide: boolean;
  enableElevation: boolean;
  children: React.ReactElement<ModuleProps>[];
}

export default function DashboardBase(props: Props) {
  /* Provee la capa de estilos en caso que se pasen via props */
  let theme;
  if (props.theme) theme = createMuiTheme(props.theme);
  else theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [type, setType] = useState(isMobile ? "mobile" : props.type);
  const [openDrawer, setOpenDrawer] = useState(false);

  let keys: Array<string> = [];
  let titles: Array<string> = [];
  let icons: Array<React.ReactElement> = [];

  useEffect(() => {
    if (isMobile) setType("mobile");
    else setType(props.type);
  }, [isMobile]);

  ExtractModulesProps(props.children);
  let modules = InyectModules();
  const [moduleIndex, setModuleIndex] = useState<number>(0);

  /* Maneja el estado del botón del drawer para abrirlo y cerrarlo */
  const HandleOpenDrawer = () => setOpenDrawer(!openDrawer);

  /* Cierra directamente el Drawer */
  const HandleCloseDrawer = () => setOpenDrawer(false);

  /* Obtiene la key del módulo cuando sufre click dentro del drawer
  y renderea el módulo correcto a partir de esa key. */
  const HandleModule = (key?: string) => {
    let index: number = 0;

    (modules: React.ReactElement<InyectedModuleProps>[]) =>
      React.Children.map(modules, (m, i) => {
        if (m.props.key == key) {
          index = i;

          if (index != null) setModuleIndex(index);
        }
      });

    if (index == null)
      console.error("moduleIndex was null and module was not found.");
  };

  function ExtractModulesProps(children: React.ReactElement<ModuleProps>[]) {
    children.forEach(m => {
      keys.push(m.props.key as string);
      titles.push(m.props.title as string);
      icons.push(m.props.icon as React.ReactElement);
    });
  }

  /* Mapea cada módulo del dashboard y le inyecta props específicos
  según el tipo de dashboard rendereado */
  function InyectModules() {
    return (children: Array<React.ReactElement<ModuleProps>>) =>
      React.Children.map(children, m => {
        switch (type) {
          case "permanent":
            return cloneElement(m as React.ReactElement<InyectedModuleProps>, {
              moduleType: "permanent"
            });
          case "persistent":
            return cloneElement(m as React.ReactElement<InyectedModuleProps>, {
              moduleType: "persistent",
              openDrawer: openDrawer,
              drawerWidth: 240
            });
          case "temporary":
            return cloneElement(m as React.ReactElement<InyectedModuleProps>, {
              moduleType: "temporary",
              openDrawer: openDrawer,
              drawerWidth: 240
            });
          case "mobile":
            return cloneElement(m as React.ReactElement<InyectedModuleProps>, {
              moduleType: "mobile"
            });
          default:
            return cloneElement(m as React.ReactElement<InyectedModuleProps>, {
              moduleType: "permanent"
            });
        }
      });
  }

  const permanentDashboard = (
    <PermanentDashboard
      title={props.title}
      keys={keys}
      titles={titles}
      icons={icons}
      handleModule={HandleModule}
      enableHide={props.enableHide}
      enableElevation={props.enableElevation}
    >
      {modules != null
        ? (modules: React.ReactElement<InyectedModuleProps>[]) => {
            modules[moduleIndex];
          }
        : null}
    </PermanentDashboard>
  );

  const persistentDashboard = (
    <PersistentDashboard
      title={props.title}
      openDrawer={openDrawer}
      handleOpenDrawer={HandleOpenDrawer}
      keys={keys}
      titles={titles}
      icons={icons}
      handleModule={HandleModule}
      enableHide={props.enableHide}
      enableElevation={props.enableElevation}
    >
      {modules != null
        ? (modules: React.ReactElement<InyectedModuleProps>[]) => {
            modules[moduleIndex];
          }
        : null}
    </PersistentDashboard>
  );

  const temporaryDashboard = (
    <TemporaryDashboard
      title={props.title}
      openDrawer={openDrawer}
      handleOpenDrawer={HandleOpenDrawer}
      handleCloseDrawer={HandleCloseDrawer}
      keys={keys}
      titles={titles}
      icons={icons}
      handleModule={HandleModule}
      enableHide={props.enableHide}
      enableElevation={props.enableElevation}
    >
      {modules != null
        ? (modules: React.ReactElement<InyectedModuleProps>[]) => {
            modules[moduleIndex];
          }
        : null}
    </TemporaryDashboard>
  );

  const mobileDashboard = (
    <MobileDashboard
      openDrawer={openDrawer}
      handleOpenDrawer={HandleOpenDrawer}
      handleCloseDrawer={HandleCloseDrawer}
      keys={keys}
      titles={titles}
      icons={icons}
      handleModule={HandleModule}
    >
      {modules != null
        ? (modules: React.ReactElement<InyectedModuleProps>[]) => {
            modules[moduleIndex];
          }
        : null}
    </MobileDashboard>
  );

  const GetDashboard = () => {
    switch (type) {
      case "permanent":
        return permanentDashboard;
      case "persistent":
        return persistentDashboard;
      case "temporary":
        return temporaryDashboard;
      case "mobile":
        return mobileDashboard;
      default:
        return permanentDashboard;
    }
  };

  /* Los hidden ayudan al primer render en mobile. Después del primer render
  el hook "useMediaQuery" se encarga de calcular el breakpoint */
  return (
    <ThemeProvider theme={theme}>
      <Hidden smDown>{GetDashboard()}</Hidden>
      <Hidden mdUp>{mobileDashboard}</Hidden>
    </ThemeProvider>
  );
}

DashboardBase.propTypes = {
  theme: PropTypes.shape({
    appBar: PropTypes.object,
    appBarTitle: PropTypes.object
  }),
  type: PropTypes.oneOf(["permanent", "persistent", "temporary", "mobile"]),
  enableElevation: PropTypes.bool,
  enableHide: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
