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
import { DashboardBaseProps } from "../../types/DashboardBaseProps";

/** Componente base que renderea un dashboard a partir de sub-componentes
 * como Drawer, AppBar y Module.
 *
 * @param props DashboardBaseProps
 * @returns JSX.Element
 */
export default function DashboardBase(props: DashboardBaseProps) {
  const { drawerProps, title, enableElevation, enableHide } = props;

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
  let indexes: Array<string> = [];
  let titles: Array<string> = [];
  let icons: Array<React.ReactElement> = [];

  /* En caso de que el prop drawerProps.anchor = right, manda un boolean */
  const isRight: boolean =
    drawerProps != undefined
      ? drawerProps.anchor == "right"
        ? true
        : false
      : false;

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

  /* Obtiene el index del módulo cuando sufre click dentro del drawer
  y renderea el módulo correcto a partir de ese index. */
  const HandleModule = (index: string) => {
    let k: number = 0;

    /* Obtiene el valor "index" de cada módulo y compara cual
    es igual al módulo que recibió un click. Esto devuelve el index
    de la opción en el menú y establece el módulo que tenga el mismo
    index. */
    React.Children.map(modules, (m, i) => {
      if (m.props.index == index) {
        k = i;

        if (index != null) setModuleIndex(k);
      }
    });

    /* Si el módulo no es rendereado por algún motivo, arroja un error
      en consola. */
    if (k == null)
      console.error("moduleIndex was null and module was not found.");
  };

  /* Obtiene todos los valores index, title y props dentro de cada module que
  se entregó via props.children. */
  function ExtractModulesProps(children: React.ReactElement<ModuleProps>[]) {
    children.forEach(m => {
      indexes.push(m.props.index as string);
      titles.push(m.props.title as string);
      icons.push(m.props.icon as React.ReactElement);
    });
  }

  /* Mapea cada módulo del dashboard y le inyecta props específicos
  según el tipo de dashboard rendereado */
  function InyectModules() {
    return React.Children.map(props.children, m =>
      cloneElement(m as React.ReactElement<InyectedModuleProps>, {
        moduleType: type,
        openDrawer: openDrawer,
        drawerWidth: 240,
        isRight: isRight
      })
    );
  }

  const permanentDashboard = (
    <PermanentDashboard
      title={title}
      drawerProps={drawerProps}
      isRight={isRight}
      indexes={indexes}
      titles={titles}
      icons={icons}
      handleModule={HandleModule}
      enableHide={enableHide}
      enableElevation={enableElevation}
    >
      {/* {modules != null
        ? (modules: React.ReactElement<InyectedModuleProps>[]) => {
            modules[moduleIndex];
          }
        : null} */}
      {modules[moduleIndex]}
    </PermanentDashboard>
  );

  const persistentDashboard = (
    <PersistentDashboard
      title={title}
      drawerProps={drawerProps}
      isRight={isRight}
      openDrawer={openDrawer}
      handleOpenDrawer={HandleOpenDrawer}
      indexes={indexes}
      titles={titles}
      icons={icons}
      handleModule={HandleModule}
      enableHide={enableHide}
      enableElevation={enableElevation}
    >
      {modules[moduleIndex]}
    </PersistentDashboard>
  );

  const temporaryDashboard = (
    <TemporaryDashboard
      title={title}
      drawerProps={drawerProps}
      openDrawer={openDrawer}
      handleOpenDrawer={HandleOpenDrawer}
      handleCloseDrawer={HandleCloseDrawer}
      indexes={indexes}
      titles={titles}
      icons={icons}
      handleModule={HandleModule}
      enableHide={enableHide}
      enableElevation={enableElevation}
    >
      {modules[moduleIndex]}
    </TemporaryDashboard>
  );

  const mobileDashboard = (
    <MobileDashboard
      openDrawer={openDrawer}
      drawerProps={drawerProps}
      handleOpenDrawer={HandleOpenDrawer}
      handleCloseDrawer={HandleCloseDrawer}
      indexes={indexes}
      titles={titles}
      icons={icons}
      handleModule={HandleModule}
    >
      {modules[moduleIndex]}
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
