import React from "react";
import PropTypes from "prop-types";
import PermanentModule from "./PermanentModule";
import PersistentModule from "./PersistentModule";
import MobileModule from "./MobileModule";
import ContainerBase from "../../base/ContainerBase";

export default function Module(props) {
  const { moduleType, drawerWidth, openDrawer, children } = props;

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

PersistentModule.propTypes = {
  moduleType: PropTypes.oneOf([
    "permanent",
    "persistent",
    "temporary",
    "mobile"
  ]),
  drawerWidth: PropTypes.number.isRequired,
  openDrawer: PropTypes.bool.isRequired
};
