import React, { useState, cloneElement } from "react";
import PropTypes from "prop-types";
import PersistentDashboard from "../high/dashboard/PersistentDashboard";
import PermanentDashboard from "../high/dashboard/PermanentDashboard";
import TemporaryDashboard from "../high/dashboard/TemporaryDashboard";
import MobileDashboard from "../high/dashboard/MobileDashboard";

export default function DashboardBase(props) {
  const type = props.type;
  const [openDrawer, setOpenDrawer] = useState(false);

  const titles = props.children.map(m => m.props.title);
  const icons = props.children.map(m => m.props.icon);
  const keys = props.children.map(m => m.key);

  let modules = InyectModules();
  const [moduleIndex, setModuleIndex] = useState(0);

  /* Maneja el estado del botón del drawer para abrirlo y cerrarlo */
  const HandleOpenDrawer = () => setOpenDrawer(!openDrawer);

  /* Cierra directamente el Drawer */
  const HandleCloseDrawer = () => setOpenDrawer(false);

  /* Obtiene la key del módulo cuando sufre click dentro del drawer
  y renderea el módulo correcto a partir de esa key. */
  const HandleModule = key => {
    let index = null;

    modules.map((m, i) => {
      if (m.key == key) {
        index = i;

        if (index != null) setModuleIndex(index);
      }
    });

    if (index == null)
      console.error("moduleIndex was null and module was not found.");
  };

  /* Mapea cada módulo del dashboard y le inyecta props específicos
  según el tipo de dashboard rendereado */
  function InyectModules() {
    return props.children.map(m => {
      switch (type) {
        case "permanent":
          return cloneElement(m, {
            moduleType: "permanent"
          });
        case "persistent":
          return cloneElement(m, {
            moduleType: "persistent",
            openDrawer: openDrawer,
            drawerWidth: 240
          });
        case "temporary":
          return cloneElement(m, {
            moduleType: "temporary",
            openDrawer: openDrawer,
            drawerWidth: 240
          });
        case "mobile":
          return cloneElement(m, {
            moduleType: "mobile"
          });
        default:
          return cloneElement(m, {
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
      {modules != null ? modules[moduleIndex] : null}
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
      {modules != null ? modules[moduleIndex] : null}
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
      {modules != null ? modules[moduleIndex] : null}
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
      {modules != null ? modules[moduleIndex] : null}
    </MobileDashboard>
  );

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
}

DashboardBase.propTypes = {
  type: PropTypes.oneOf(["permanent", "persistent", "temporary", "mobile"]),
  enableElevation: PropTypes.bool,
  enableHide: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
