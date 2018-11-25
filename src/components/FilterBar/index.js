import React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@material-ui/core'

export default class Filter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filters: [
        {
          name: 'Bronx',
          checked: false,
        },
        {
          name: 'Manhattan',
          checked: false,
        },
        {
          name: 'Queens',
          checked: false,
        },
        {
          name: 'Brooklyn',
          checked: false,
        },
        {
          name: 'Staten',
          checked: false,
        },
        {
          name: 'All',
          checked: false,
        },
      ]
    };
}

toggleFilter(name) {
  const selection = this.state.filters.map(boro => {
    if(boro.name === name) boro.checked = !boro.checked;
    return boro;
  });
  this.setState({ filters: selection });
};

renderFormItems() {
  const items = this.state.filters.map(filter => {
    if(filter !== undefined) {
      return (
        <FormControlLabel
          control={
            <Checkbox
              checked={filter.checked}
              onChange={() => this.toggleFilter(filter.name)}
              value={filter.checked}
            />
          }
          label={filter.name}
        />
      );
    }
  });
  return items;
}

render() {
  return (
    <FormGroup row>
      { this.renderFormItems() }
    </FormGroup>
  );
}









































}
