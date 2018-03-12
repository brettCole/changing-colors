// remove and fix styling

// Components
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import Toolbar from 'material-ui/Toolbar';
// Images
import Logo from './Logo';
// Icons
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const navIcon = {
    marginLeft: 'auto',
};

const noBorder = {
  'box-shadow': 'none'
}

class NavMenu extends React.Component {
  state = {
    open: false,
    anchor: 'right'
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () =>{
    this.setState({ open: false });
  };

  render() {
    const drawer = (
      <Drawer
        variant = 'persistent' // type of drawer
        anchor = { anchor } // side drawer will appear from
        open = { open } // drawer open if true
      >
        <div>
          <IconButton onClick = { this.handleDrawerClose }>
            { theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon /> }
          </IconButton>
        </div>
        <Divider />
          <List>Repairs</List>
        <Divider />
      </Drawer>
    )

    return (
      <Grid container spacing={24}>
        <AppBar color = 'default' style = { noBorder }>
          <Toolbar>
            <Grid item xs={9} sm={6}>
              <Logo></Logo>
            </Grid>
            <IconButton style = { navIcon }>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Grid>
    )
  }
}

export default NavMenu;