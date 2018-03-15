// remove and fix styling

// Components
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import ListItemText from 'material-ui/List/ListItemText'
import Toolbar from 'material-ui/Toolbar';
// Images
import Logo from './Logo';
// Icons
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCalendarAlt from '@fortawesome/fontawesome-free-solid/faCalendarAlt';
import faInfo from '@fortawesome/fontawesome-free-solid/faInfo';
import faWrench from '@fortawesome/fontawesome-free-solid/faWrench';
import IconButton from 'material-ui/IconButton';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import MenuIcon from 'material-ui-icons/Menu';
import RateReview from 'material-ui-icons/RateReview';

const navIcon = {
    marginLeft: 'auto',
};

const noBorder = {
  'box-shadow': 'none',
  'marginTop': '13px'
}

class NavMenu extends React.Component {
  state = {
    open: false,
    anchor: 'right'
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const drawer = (
      <Drawer
        variant = 'persistent' // type of drawer
        anchor = { this.state.anchor } // side drawer will appear from
        open = { this.state.open } // drawer open if true
      >
        <div>
          <IconButton 
            onClick = { this.handleDrawerClose }
          >
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
          <List
            component = 'nav'
          >
          {/* Repair Link */}
            <ListItem button>
              <ListItemIcon>
                <FontAwesomeIcon icon = { faWrench } />
              </ListItemIcon>
              <ListItemText primary = 'Repairs' />
            </ListItem>

          {/* Schedule Link */}
            <ListItem button>
              <ListItemIcon>
                <FontAwesomeIcon icon = { faCalendarAlt } />
              </ListItemIcon>
              <ListItemText primary = 'Schedule' />
            </ListItem>

          {/* Location Link */}
            <ListItem button>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary = 'Location' />
            </ListItem>

          {/* About Us Link */}
            <ListItem button>
              <ListItemIcon>
                <FontAwesomeIcon icon = { faInfo } />
              </ListItemIcon>
              <ListItemText primary = 'About Us' />
            </ListItem>

          {/* Testimonials Link */}
            <ListItem button>
              <ListItemIcon>
                <RateReview />
              </ListItemIcon>
              <ListItemText primary = 'Testimonials' />
            </ListItem>
          </List>
        <Divider />
      </Drawer>
    )

    return (
      <Grid container spacing={24}>
        <AppBar 
          color = 'default'
          style = { noBorder }
          position = 'sticky'
        >
          <Toolbar>
            <Grid 
              item xs = { 8 }
              sm = { 5 }
            >
              <Logo></Logo>
            </Grid>
            <IconButton
              onClick = { this.handleDrawerOpen }
              style = { navIcon }
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {drawer}
      </Grid>
    )
  }
}

export default NavMenu;