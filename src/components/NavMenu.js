// remove and fix styling


import React from 'react';
import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Toolbar from 'material-ui/Toolbar';
import Logo from './Logo';

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