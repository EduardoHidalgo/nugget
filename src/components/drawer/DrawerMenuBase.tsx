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
import { DrawerMenuBaseProps } from "../../types/DrawerMenuBaseProps";

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  toolbar: theme.mixins.toolbar
}));

/** Componente base que implementa el componente DrawerMenu nativo de material-ui.
 *
 * @see https://material-ui.com/components/drawers/
 * @see https://material-ui.com/api/list/
 * @see https://material-ui.com/api/list-item/
 *
 * @param props DrawerMenuBaseProps
 * @returns JSX.Element
 */
export default function DrawerMenuBase(props: DrawerMenuBaseProps) {
  const classes = useStyles(props);

  const { type, disableToolbar, titles, icons, indexes, handleModule } = props;

  /* Manda la variable "index" para indicar que módulo fué seleccionado */
  const HandleClick = (index: string) => handleModule(index);

  return (
    <Fragment>
      {/* Añade un toolbar spacing en el caso de que no sea tipo "persistent",
      o lo desactiva en caso de que el boolean disableToolbar aparezca. */}
      {type != "persistent" && !disableToolbar ? (
        <div className={classes.toolbar} />
      ) : null}
      <Divider />
      <List dense disablePadding>
        {/* Mapea los módulos recibidos en el drawer */}
        {titles.map((title: string, i: number) => (
          <ListItem
            button
            key={indexes[i]}
            onClick={() => HandleClick(indexes[i])}
          >
            <ListItemIcon>{icons[i]}</ListItemIcon>
            <ListItemText disableTypography>{title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
}

DrawerMenuBase.propTypes = {
  type: PropTypes.string.isRequired,
  disableToolbar: PropTypes.bool,
  indexes: PropTypes.array.isRequired,
  titles: PropTypes.array.isRequired,
  icons: PropTypes.arrayOf(PropTypes.element).isRequired,
  handleModule: PropTypes.func.isRequired
};
