import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { MaterialBase } from "src/MaterialBase";
import { Children } from "src/Children";

interface Props extends MaterialBase, Children {
  align?: "inherit" | "left" | "center" | "right" | "justify";
  component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
  display?: "inline" | "initial" | "block";
  gutterBottom?: boolean;
  noWrap?: boolean;
  paragraph?: boolean;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "srOnly"
    | "inherit";
}

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
export default function TextBase(props: Props) {
  return (
    <Typography
      className={props.styles}
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
  ])
};
