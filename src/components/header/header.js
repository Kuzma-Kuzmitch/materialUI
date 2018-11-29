import React, { Fragment } from 'react'
import { AppBar, Toolbar, Button, Grid, Drawer } from '@material-ui/core';
import LocationCity from '@material-ui/icons/LocationCity'
import Login from '../Login';
import { SideList } from '../sidelist';
import { SignUp } from '../SignUp';

export default class Header extends React.Component {
  state = {
    right: false,
    loginOpen: false,
    signUpOpen: false,
  }

  toggleDrawer(side, open) {
    this.setState({
      [side]: open,
    });
  };

  toggleLogin() {
    this.setState({ loginOpen: !this.state.loginOpen });
  };

  toggleSignUp() {
    this.setState({ signUpOpen: !this.state.signUpOpen })
  }

  //Make login modal a separate component

  render() {
    const styles = {
      list: {
        maxwidth: 10000,
      },
      root: {
        flexGrow: 1,
      },
      toolbar:{
        maxwidth : 1170
      }

    };
    return (
      <Fragment>
        <AppBar className={styles.root}>
          <Toolbar>
            <Grid >
            <LocationCity />
            </Grid>
            <Grid
            style={{marginLeft: 855, fontSize: 32, fontWeight: 'lighter'}}
            >
            Citizen
            </Grid>
            <div>
            <Button
            style={{position : "absolute" , right : 0 , marginTop : -20, marginRight: 20}}
            onClick={() => this.toggleDrawer('right',true)}
            variant="contained" color="primary"
            >
            Navigation
            </Button>
            </div>
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={ () => this.toggleDrawer('right', false) }
          className={styles.list}>
          <div
            tabIndex={0}
            role="button"
            // onClick={ () => this.toggleDrawer('right', false) }
            onKeyDown={ () => this.toggleDrawer('right', false) }
          >
          <SideList
            styles={styles}
            toggleLogin={ () => this.toggleLogin() }
            toggleSignUp={ () => this.toggleSignUp() }
          />
          </div>
          <Login
            loginOpen={this.state.loginOpen}
            toggleLogin={ () => this.toggleLogin() }
          />
          <SignUp
            signUpOpen={this.state.signUpOpen}
            toggleSignUp={ () => this.toggleSignUp() }
          />
        </Drawer>
      </Fragment>
    );
  }
}
