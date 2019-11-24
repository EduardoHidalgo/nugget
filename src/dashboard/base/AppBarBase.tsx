import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useScrollTrigger, Slide, AppBar, Toolbar } from "@material-ui/core";
import AppBarTitle from "../../text/AppBarTitle";
import { Children } from "src/Children";
import { MaterialBase } from "../../MaterialBase";

interface ElevationScrollProps {
  window?: any;
  enableElevation: boolean;
  children: React.ReactElement;
}

/* Componente para la animación de Elevación en AppBar */
function ElevationScroll(props: ElevationScrollProps) {
  const { children, window, enableElevation } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  //ReactElement<{ enableElevation: boolean; elevation: number; }
  return React.cloneElement(children as React.ReactElement<any>, {
    enableElevation: enableElevation,
    elevation: trigger ? 4 : 0
  });
}

interface HideOnScrollProps {
  window?: any;
  enableElevation?: boolean;
  enableHide: boolean;
  elevation?: number;
  children: React.ReactElement;
}

/* Componente para la animación de HideOnScroll en AppBar */
function HideOnScroll(props: HideOnScrollProps) {
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

interface Props extends MaterialBase {
  classes: { appBar: any; root: any; appBarTitle: any };
  title: string;
  position?: "static" | "absolute" | "fixed" | "relative" | "sticky";
  enableElevation: boolean;
  enableHide: boolean;
  elevation: number;
  children: Children;
}

export default function AppBarBase(props: Props) {
  const { classes } = props;
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
        <AppBar
          position={props.position}
          className={clsx(classes.appBar, props.styles)}
          classes={{ root: classes.root }}
        >
          <Toolbar>
            {props.children}
            {title ? (
              <AppBarTitle styles={classes.appBarTitle}>
                {props.title}
              </AppBarTitle>
            ) : null}
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
  classes: PropTypes.object,
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
