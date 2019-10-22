import React from "react";
import PropTypes from "prop-types";
import TextBase from "../../base/TextBase";

export default function AppBarTitle(props) {
  return (
    <TextBase variant="h6" noWrap>
      {props.children}
    </TextBase>
  );
}

AppBarTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
