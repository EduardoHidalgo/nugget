import React from "react";
import PropTypes from "prop-types";
import TextBase from "../common/TextBase";
import { MaterialBase } from "src/MaterialBase";

export default function AppBarTitle(props: MaterialBase) {
  const { styles, children } = props;

  return (
    <TextBase variant="h6" noWrap styles={styles}>
      {children}
    </TextBase>
  );
}

AppBarTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
