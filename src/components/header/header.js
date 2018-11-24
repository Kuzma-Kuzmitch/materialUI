import React, { Fragment } from 'react'
import { AppBar, Toolbar, Button, Grid, Drawer } from '@material-ui/core'
import MyModal from '../Modal';
import { SideList } from '../sidelist'

export default class Header extends React.Component {
  state = {
    right: false,
    modalOpen: false,
  }

  toggleDrawer(side, open) {
    this.setState({
      [side]: open,
    });
  };

  toggleModal() {
    console.log('click registered')
    this.setState({ modalOpen: !this.state.modalOpen });
  };

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

            <Grid >logo</Grid>
            <div>
            <Button
            style={{position : "absolute" , right : 0 , marginTop : -20}}
            onClick={() => this.toggleDrawer('right',true)}
            variant="contained" color="primary"
            >
            add material-ui/icons for button
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
            toggleModal={() => this.toggleModal() }
          />
          </div>
          <MyModal
            modalType="header"
            modalOpen={this.state.modalOpen}
            toggleModal={() => this.toggleModal() }
          />
        </Drawer>
      </Fragment>
    );
  }
}
