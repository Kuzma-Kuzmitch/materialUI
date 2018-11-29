import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export const Contact = ({ styles, modalOpen, toggleModal }) =>
<div id="Contact">
  <div id="Sky">
      <Paper elevation={1} style={{marginBottom: 0, marginTop: 50, padding: 400, backgroundColor: "#faebd7", maxWidth: 300, marginLeft: "auto", marginRight: "auto", opacity: .9}}>
        <Typography variant="h1" component="h3" align="center" gutterBottom="true">
          Contact.
        </Typography>
        <Typography component="p" align="center">
        <a href="https://github.com/rahulk-gh" target="_blank">Rahul K</a> || RahulK@gmail.com
        <br />
        <a href="https://github.com/AngelusQQ" target="_blank">William Ma</a> || WilliamMa@gmail.com
        <br />
        <a href="https://github.com/jrussell1" target="_blank">Jordan Russell</a> || JordanRussell@gmail.com
        <br />
        <a href="https://github.com/bshierk1996" target="_blank">Brent Shierk</a> || BShierk1996@gmail.com
        <br />
        <a href="https://github.com/Kuzma-Kuzmitch" target="_blank">Evan Kuzma</a> || EvanKuzma@gmail.com
        </Typography>
      </Paper>
    </div>
  </div>
