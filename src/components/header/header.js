import React, {Component, Fragment} from 'react'
import { AppBar, Toolbar, Button, Grid, Drawer, Typography } from '@material-ui/core'
import { SideList } from '../sidelist'

export default class Header extends React.Component {
  state = {
    right: false
  }

  toggleDrawer(side, open) {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const styles = {
      list: {
        width: 8000,
      },
      root: {
        flexGrow: 1,
      },
    };
    return (
      <Fragment>
        <AppBar className={styles.root}>
          <Toolbar>
             <Button
              onClick={ () => this.toggleDrawer('right', true) }
              variant="contained" color="secondary"
              style={{ margin: 'auto' }}>
              Navigate
            </Button>
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
            onClick={ () => this.toggleDrawer('right', false) }
            onKeyDown={ () => this.toggleDrawer('right', false) }
          >
          <SideList styles={styles} />
          </div>
        </Drawer>
      </Fragment>
    );
  }
}
