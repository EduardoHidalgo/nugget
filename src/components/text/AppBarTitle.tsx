import React from "react";
import PropTypes from "prop-types";
import TextBase from "../common/TextBase";
import { MaterialBase } from "../../types/MaterialBase";
import { Children } from "../../types/Children";

interface Props extends MaterialBase, Children {}

export default function AppBarTitle(props: Props) {
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
