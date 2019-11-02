import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useScrollTrigger, Slide, AppBar, Toolbar } from "@material-ui/core";
import AppBarTitle from "../../text/AppBarTitle";

/* Componente para la animación de Elevación en AppBar */
function ElevationScroll(props) {
  const { children, window, enableElevation } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    enableElevation: enableElevation,
    elevation: trigger ? 4 : 0
  });
}

/* Componente para la animación de HideOnScroll en AppBar */
function HideOnScroll(props) {
  const { children, window, enableHide, enableElevation, elevation } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  });

  const originalComponent = children;

  const elevationComponent = React.cloneElement(children, {
    elevation: elevation
  });

  const hideComponent = (
    <Slide appear={false} direction={"down"} in={enableHide ? !trigger : true}>
      {React.cloneElement(children, {
        elevation: elevation
      })}
    </Slide>
  );

  /* Recibe el prop "elevation" del componente ElevationScroll y lo propaga al
  AppBar que es quien requiere dicho prop. Si "enableElevation" es true, hace el render
  únicamente de children (dado que Slide estaría apagado y no habría AppBar). Si ambos
  son false entonces devuelve el children sin efectos. */
  return enableElevation
    ? elevationComponent
    : enableHide
    ? hideComponent
    : originalComponent;
}

export default function AppBarBase(props) {
  const [enableElevation] = useState(props.enableElevation);
  const [enableHide, setEnableHide] = useState(props.enableHide);
  const title = props.title;

  /* Previene el uso de ambos efectos para el AppBar. El ElevationScroll tiene mayor peso
  en jerarquía que HideOnScroll dado que requiere el prop "elevation". */
  useEffect(() => {
    if (enableElevation && enableHide) {
      console.warn(
        "enableElevation and enableHide was both true but only one should be enabled. Turning off enableHide."
      );

      setEnableHide(false);
    }
  }, []);

  return (
    <ElevationScroll enableElevation={enableElevation}>
      <HideOnScroll enableHide={enableHide}>
        <AppBar position={props.position} className={props.styles}>
          <Toolbar>
            {props.children}
            {title ? <AppBarTitle>{props.title}</AppBarTitle> : null}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </ElevationScroll>
  );
}

AppBarBase.defaultProps = {
  enableElevation: false,
  enableHide: false,
  position: "static"
};

AppBarBase.propTypes = {
  enableElevation: PropTypes.bool,
  enableHide: PropTypes.bool,

  /* AppBarBase props */
  title: PropTypes.string,
  styles: PropTypes.string,
  position: PropTypes.oneOf([
    "absolute",
    "fixed",
    "relative",
    "static",
    "sticky"
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
