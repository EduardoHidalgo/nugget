import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { TextBaseProps } from "../../types/TextBaseProps";

/** TextBase. It serve as base of all texts. Provide and expose the Material-UI
 * Typography component to build Low components derivated from.
 *
 * @see https://material-ui.com/api/typography/#demos
 *
 * @props TextBaseProps
 * @returns JSX.Element
 */
export default function TextBase(props: TextBaseProps) {
  const {
    styles,
    classes,
    align,
    component,
    display,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    children
  } = props;

  return (
    <Typography
      className={styles}
      classes={classes}
      align={align}
      component={component}
      display={display}
      gutterBottom={gutterBottom}
      noWrap={noWrap}
      paragraph={paragraph}
      variant={variant}
    >
      {children}
    </Typography>
  );
}

TextBase.defaultProps = {
  classes: {},
  align: "inherit",
  component: null,
  display: "initial",
  gutterBottom: false,
  noWrap: false,
  paragraph: false,
  variant: "body1",
  children: "Text Example"
};

TextBase.propTypes = {
  classes: PropTypes.object,
  align: PropTypes.string,
  component: PropTypes.string,
  display: PropTypes.string,
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool,
  paragraph: PropTypes.bool,
  variant: PropTypes.string,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
