import React from "react";
import PropTypes from "prop-types";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import {
  Divider,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanel
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Paragraph from "../text/Paragraph";
import { ExpansionPanelContentProps } from "../../types/ExpansionPanelContentProps";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    }
  })
);

/** Componente que renderea un elemento dentro del ExpansionPanel.
 *
 * @see https://material-ui.com/api/expansion-panel-summary/
 * @see https://material-ui.com/api/expansion-panel-details/
 *
 * @param props ExpansionPanelContentProps
 * @returns JSX.Element
 */
export default function ExpansionPanelContent(
  props: ExpansionPanelContentProps
) {
  const classes = useStyles(props);

  const {
    index,
    title,
    divider,
    defaultExpanded,
    disabled,
    expanded,
    enableAccordion,
    open,
    onChange,
    children
  } = props;

  return (
    <ExpansionPanel
      defaultExpanded={defaultExpanded}
      disabled={disabled}
      expanded={enableAccordion ? open === index : expanded}
      onChange={onChange(index)}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Paragraph styles={classes.heading}>{title}</Paragraph>
      </ExpansionPanelSummary>
      {divider ? <Divider /> : null}
      <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

ExpansionPanelContent.propTypes = {
  index: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  divider: PropTypes.bool,
  defaultExpanded: PropTypes.bool,
  disabled: PropTypes.bool,
  expanded: PropTypes.bool,
  enableAccordion: PropTypes.bool,
  open: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  onChange: PropTypes.func.isRequired
};
