import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//material UI
import Paper from '@material-ui/core/Paper';

import './LandingPage.css';

class LandingPage extends Component {
  render() {
    return (
      <div className='container'>
        {/* <div className='grid-col grid-col_8'></div>
          <div className='grid-col grid-col_4'></div> */}
        <Paper>
          <h3 style={{ textAlign: 'center' }}>Craigslist Updates</h3>
        </Paper>
        <Paper>
          <h3 style={{ textAlign: 'center' }}>Facebook Updates</h3>
        </Paper>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
