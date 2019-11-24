import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Theme, makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@material-ui/core";

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  toolbar: theme.mixins.toolbar
}));

interface Props {
  type: "permanent" | "persistent" | "temporary" | "mobile";
  keys: Array<string>;
  titles: Array<string>;
  icons: Array<React.ReactElement>;
  handleModule: (key?: string) => void;
}

export default function DrawerMenuBase(props: Props) {
  const classes = useStyles();

  const titles = props.titles;
  const icons = props.icons;
  const keys = props.keys;

  /* Manda la variable "key" para indicar que módulo fué seleccionado */
  const HandleClick = (key?: string) => props.handleModule(key);

  return (
    <Fragment>
      {/* Añade un toolbar spacing en el caso de que sea tipo "persistent" */}
      {props.type != "persistent" ? <div className={classes.toolbar} /> : null}
      <Divider />
      <List dense disablePadding>
        {/* Mapea los módulos recibidos en el drawer */}
        {titles.map((text, index) => (
          <ListItem
            button
            key={keys[index]}
            onClick={() => HandleClick(keys[index])}
          >
            <ListItemIcon>{icons[index]}</ListItemIcon>
            <ListItemText disableTypography>{text}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
}

DrawerMenuBase.propTypes = {
  type: PropTypes.string,
  keys: PropTypes.array.isRequired,
  titles: PropTypes.array.isRequired,
  icons: PropTypes.arrayOf(PropTypes.element).isRequired,
  handleModule: PropTypes.func.isRequired
};
