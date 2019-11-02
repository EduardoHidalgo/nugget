import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

/** TextBase. It serve as base of all texts. Provide and expose the Material-UI
 * Typography component to build Low components derivated from.
 *
 * @param {object} [classes] Override or extend the styles applied to the component.
 * @param {string} [align] Set the text-align on the component.
 * @param {string} [component] The component used for the root node.
 * @param {string} [display] Controls the display type.
 * @param {bool} [gutterBottom] If true, the text will have a bottom margin.
 * @param {bool} [noWrap] If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
 * @param {bool} [paragraph] If true, the text will have a bottom margin.
 * @param {string} [variant] Applies the theme typography styles.
 * @param {element|element[]} children elements rendered inside TwxtBase.
 */
export default function TextBase(props) {
  return (
    <Typography
      classes={props.classes}
      align={props.align}
      component={props.component}
      display={props.display}
      gutterBottom={props.gutterBottom}
      noWrap={props.noWrap}
      paragraph={props.paragraph}
      variant={props.variant}
    >
      {props.children}
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
  ]).isRequired
};
