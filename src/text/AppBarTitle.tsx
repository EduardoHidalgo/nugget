import React from "react";
import PropTypes from "prop-types";
import TextBase from "../common/TextBase";
import { MaterialBase } from "src/MaterialBase";
import { Children } from "src/Children";

interface Props extends MaterialBase {
  children?: string;
}

export default function AppBarTitle(props: Props) {
  const { styles, children } = props;

  return (
    <TextBase variant="h6" noWrap styles={styles}>
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
