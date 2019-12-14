import React from "react";
import PropTypes from "prop-types";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { ExpansionPanelBaseProps } from "../../types/ExpansionPanelBaseProps";
import ExpansionPanelContent from "./ExpansionPanelContent";

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%"
  }
}));

/** Componente base que implementa el componente ExpansionPanel
 * nativo de material-ui.
 *
 * @see https://material-ui.com/components/expansion-panels/
 *
 * @param props ExpansionPanelBaseProps
 * @returns JSX.Element
 */
export default function ExpansionPanelBase(props: ExpansionPanelBaseProps) {
  const classes = useStyles(props);
  const { elements, divider, enableAccordion } = props;

  /** Estado que define que panel está activo dentro del efecto acordeón. */
  const [open, setOpen] = React.useState<string | false>(false);

  /** Controla el efecto "acordeón". */
  const handleChange = (index: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setOpen(isExpanded ? index : false);
  };

  return (
    <div className={classes.root}>
      {/* Recibe un array de elementos y renderea los panels a partir
        de dicho array. */}
      {elements.map((e, i) => (
        <ExpansionPanelContent
          key={`panel${i}`}
          index={`panel${i}`}
          title={e.title}
          divider={divider}
          defaultExpanded={e.defaultExpanded}
          disabled={e.disabled}
          expanded={e.expanded}
          enableAccordion={enableAccordion}
          open={open}
          onChange={handleChange}
        >
          {e.content}
        </ExpansionPanelContent>
      ))}
    </div>
  );
}

ExpansionPanelBase.propTypes = {
  divider: PropTypes.bool,
  enableAccordion: PropTypes.bool,
  elements: PropTypes.arrayOf(PropTypes.object).isRequired
};
