import React, { useState, cloneElement, useEffect } from "react";
import PropTypes from "prop-types";
import {
  useTheme,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PersistentDashboard from "./PersistentDashboard";
import PermanentDashboard from "./PermanentDashboard";
import TemporaryDashboard from "./TemporaryDashboard";
import MobileDashboard from "./MobileDashboard";
import { Hidden } from "@material-ui/core";
import { ModuleProps } from "../../types/ModuleProps";
import { InyectedModuleProps } from "../../types/InyectedModuleProps";
import { DashboardBaseProps } from "src/types/DashboardBaseProps";

/** Componente base que renderea un dashboard a partir de sub-componentes
 * como Drawer, AppBar y Module.
 *
 * @param props DashboardBaseProps
 * @returns JSX.Element
 */
export default function DashboardBase(props: DashboardBaseProps) {
  const { title, enableElevation, enableHide, children } = props;

  /* Provee la capa de estilos en caso que se pasen via props */
  let theme;
  if (props.theme) theme = createMuiTheme(props.theme);
  else theme = useTheme();

  /* Aquí se establece de manera estática (de momento) el punto
  de breakpoint para hacer switch entre el diseño mobile y desktop en
  tiempo real al redimensionar la ventana. */
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  /* Aquí se mantiene en estados el tipo del dashboard y el estado
  del drawer, los cuales se propagan al resto de componentes hacia abajo. */
  const [type, setType] = useState(isMobile ? "mobile" : props.type);
  const [openDrawer, setOpenDrawer] = useState(false);

  /* Arreglo de valores que requiere el DrawerMenu */
  let keys: Array<string> = [];
  let titles: Array<string> = [];
  let icons: Array<React.ReactElement> = [];

  /* Cambia en tiempo real el tipo de componente en caso que
  la ventana sufra un cambio en el tamaño. */
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

    /* Obtiene el valor "key" de cada módulo y compara cual
    es igual al módulo que recibió un click. Esto devuelve el index
    de la opción en el menú y establece el módulo que tenga el mismo
    index. */
    (modules: React.ReactElement<InyectedModuleProps>[]) =>
      React.Children.map(modules, (m, i) => {
        if (m.props.key == key) {
          index = i;

          if (index != null) setModuleIndex(index);
        }
      });

    /* Si el módulo no es rendereado por algún motivo, arroja un error
      en consola. */
    if (index == null)
      console.error("moduleIndex was null and module was not found.");
  };

  /* Obtiene todos los valores key, title y props dentro de cada module que
  se entregó via props.children. */
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
      title={title}
      keys={keys}
      titles={titles}
      icons={icons}
      handleModule={HandleModule}
      enableHide={enableHide}
      enableElevation={enableElevation}
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
      title={title}
      openDrawer={openDrawer}
      handleOpenDrawer={HandleOpenDrawer}
      keys={keys}
      titles={titles}
      icons={icons}
      handleModule={HandleModule}
      enableHide={enableHide}
      enableElevation={enableElevation}
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
      title={title}
      openDrawer={openDrawer}
      handleOpenDrawer={HandleOpenDrawer}
      handleCloseDrawer={HandleCloseDrawer}
      keys={keys}
      titles={titles}
      icons={icons}
      handleModule={HandleModule}
      enableHide={enableHide}
      enableElevation={enableElevation}
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
