import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { AppBar, Toolbar } from "@material-ui/core";
import AppBarTitle from "../text/AppBarTitle";
import { ElevationScroll } from "./ElevationScroll";
import { HideOnScroll } from "./HideOnScroll";
import { AppBarBaseProps } from "../../types/AppBarBaseProps";

/** Componente base que implementa el componente AppBar nativo de material-ui.
 *
 * @see https://material-ui.com/components/app-bar/
 *
 * @param props AppBarBaseProps
 * @returns JSX.Element
 */
export default function AppBarBase(props: AppBarBaseProps) {
  const { classes, title, position, styles, children } = props;
  const [enableElevation] = useState(props.enableElevation);
  const [enableHide, setEnableHide] = useState(props.enableHide);

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
          position={position}
          className={clsx(classes.appBar, styles)}
          classes={{ root: classes.root }}
        >
          <Toolbar>
            {children}
            {title ? (
              <AppBarTitle styles={classes.appBarTitle}>{title}</AppBarTitle>
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
  styles: PropTypes.string,
  classes: PropTypes.object,

  enableElevation: PropTypes.bool,
  enableHide: PropTypes.bool,

  title: PropTypes.string,
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
