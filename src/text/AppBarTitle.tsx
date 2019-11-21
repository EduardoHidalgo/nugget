import React from "react";
import PropTypes from "prop-types";
import TextBase from "../common/TextBase";
import { MaterialBase } from "src/MaterialBase";

interface Props extends MaterialBase {
  children?: JSX.Element[] | JSX.Element | string;
}

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
