import React from 'react';
import ExpansionPanel, { ExpansionPanelDetails, ExpansionPanelSummary } from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Typography from 'material-ui/Typography';

class Repair extends React.Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  }

  render() {
    return (
      <div>
      <ExpansionPanel 
        expanded = { this.state.expanded === 'panel1' } 
        onChange = { this.handleChange('panel1')}
      >
        <ExpansionPanelSummary 
          expandIcon = { <ExpandMoreIcon /> }
        >
          <Typography>Brake Repair</Typography>  
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            We cover all things brakes. From Pad replacement to brake lines and master cylinders.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel 
        expanded = { this.state.expanded === 'panel2' } 
        onChange = { this.handleChange('panel2')}
      >
        <ExpansionPanelSummary 
          expandIcon = { <ExpandMoreIcon /> }
        >
          <Typography>Belts and Hoses</Typography>  
        </ExpansionPanelSummary>
      </ExpansionPanel>
      <ExpansionPanel 
        expanded = { this.state.expanded === 'panel3' } 
        onChange = { this.handleChange('panel3')}
      >
        <ExpansionPanelSummary 
          expandIcon = { <ExpandMoreIcon /> }
        >
          <Typography>Cooling System Repair</Typography>  
        </ExpansionPanelSummary>
      </ExpansionPanel>
      <ExpansionPanel 
        expanded = { this.state.expanded === 'panel4' } 
        onChange = { this.handleChange('panel4')}
      >
        <ExpansionPanelSummary 
          expandIcon = { <ExpandMoreIcon /> }
        >
          <Typography>Driveline Repair</Typography>  
        </ExpansionPanelSummary>
      </ExpansionPanel>
      </div>
    )
  }
}

export default Repair;