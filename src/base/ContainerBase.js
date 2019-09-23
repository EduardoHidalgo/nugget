import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";

/** Container. It serve as a box of all the view to handle size and space
 *
 * @param {string} [maxWidth] Max size of the fluid spacing of Container
 * @param {bool} [fixed] Stay at fixed size provided
 * @param {object} [classes] Styles applied to Container
 * @param {element|element[]} children elements rendered inside Container
 */
export default function ContainerBase(props) {
  return (
    <Fragment>
      <Container
        maxWidth={props.maxWidth}
        fixed={props.fixed}
        classes={props.classes}
      >
        {props.children}
      </Container>
    </Fragment>
  );
}

ContainerBase.propTypes = {
  maxWidth: PropTypes.string,
  fixed: PropTypes.bool,
  classes: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

ContainerBase.defaultProps = {
  maxWidth: "xl",
  fixed: false,
  classes: null,
  children: null
};
