import React, { Component } from 'react';
import './App.css';
import { Grid } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
// import pink from '@material-ui/core/colors/deepOrange';
import { MyCard } from './components/card';
import { Header } from './components/header';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { articles } from './Data/DummyArticles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0288d1',
    },
    secondary: {
      main: '#b3e5fc'
    },
  },
});

class App extends Component {
  state = {
    customStyles: { marginTop: 100, marginLeft: 20, marginRight: 25 },
    cardInfo: [],
    modalOpen: false,
  };

  componentDidMount() {
    // Fetch cards and put them into variable this.state.cardInfo
    this.setState({cardInfo: articles})
  }

  // const scrollPoint = document.querySelector('.my-section').offsetTop;
  // window.scrollTo({ top: scrollPoint, behavior: 'smooth' })

  toggleModal() {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  // This method iterates over and returns all cards
  renderCards() {
    // Use the Spread Operator to include entire contents of card item
    const cards = this.state.cardInfo.map((card, idx) =>
      <Grid key={idx} item sm style={this.state.customStyles}
      container spacing={6} >
        <MyCard
          toggleModal={() => this.toggleModal()}
          modalOpen={this.state.modalOpen}
          {...card}
        />
      </Grid>
    );
    return cards;
  }
  //add nav button
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Header />
        <About />
        <div className="container">
        </div>
        <Grid id="Articles" container
          direction="row"
          justify="center"
          alignItems="center">
          { this.renderCards() }
        </Grid>
        <Contact />
      </MuiThemeProvider>
    );
  }
}

export default App;
