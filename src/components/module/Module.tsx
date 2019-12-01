import React from "react";
import PropTypes from "prop-types";
import PermanentModule from "./PermanentModule";
import PersistentModule from "./PersistentModule";
import MobileModule from "./MobileModule";
import ContainerBase from "../common/ContainerBase";
import { InyectedModuleProps } from "../../types/InyectedModuleProps";

export default function Module(props: InyectedModuleProps) {
  const { moduleType, drawerWidth, openDrawer, children } = props;

  /* Dependiendo de que tipo de dashboard se haga render, el componente "module"
  se renderea con estilos especiales para dicho dashboard.  */
  switch (moduleType) {
    case "permanent":
      return <PermanentModule>{children}</PermanentModule>;
    case "persistent":
      return (
        <PersistentModule drawerWidth={drawerWidth} openDrawer={openDrawer}>
          {children}
        </PersistentModule>
      );
    case "temporary":
      return <PermanentModule>{children}</PermanentModule>;
    case "mobile":
      return <MobileModule>{children}</MobileModule>;
    default:
      return <ContainerBase>{children}</ContainerBase>;
  }
}

Module.propTypes = {
  moduleType: PropTypes.oneOf([
    "permanent",
    "persistent",
    "temporary",
    "mobile"
  ]),
  drawerWidth: PropTypes.number,
  openDrawer: PropTypes.bool
};
