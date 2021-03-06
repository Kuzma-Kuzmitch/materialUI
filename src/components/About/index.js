import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export const About = ({ styles, modalOpen, toggleModal }) =>
<div id="About">
  <div id="City">
      <Paper elevation={1} style={{marginBottom: 50, marginTop: 0, padding: 400, backgroundColor: "#faebd7", maxWidth: 300, marginLeft: "auto", marginRight: "auto", opacity: .9}}>
        <Typography variant="h1" component="h3" align="center" gutterBottom="true">
          About.
        </Typography>
        <Typography component="p" align="center" style={{marginTop: 50}}>
          Citizen is a localizied news network with a focus on community editing and journalism.
        </Typography>
      </Paper>
    </div>
  </div>
