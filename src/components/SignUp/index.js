import React from 'react';
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core"

export class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
    };
}

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      signUpOpen,
      toggleSignUp,
    } = this.props;
    return (
      <div>
        <Dialog
          open={signUpOpen}
          onClose={toggleSignUp}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" style={{textDecorationLine: 'underline'}}>Sign Up</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter your information below:
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="First Name"
              type="name"
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Last Name"
              type="name"
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
            <TextField
              margin="dense"
              id="outlined-password-input"
              label="Password"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.toggleSignUp} color="inherit">
              Close
            </Button>
            <Button onClick={this.toggleSignUp} color="inherit">
              Sign Up
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
