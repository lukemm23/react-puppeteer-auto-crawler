import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//material UI
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './LandingPage.css';

class LandingPage extends Component {
  componentDidMount() {
    // react Component method
    this.props.dispatch({
      type: 'GET_CL_DATA'
    });
    this.props.dispatch({
      type: 'GET_FB_DATA'
    });
  }

  render() {
    const CLArr = this.props.store.CLdata.map((item, index) => {
      return (
        <TableBody>
          <TableRow key={index} hover>
            <TableCell>
              <img
                alt='images'
                src={item.image}
                style={{ width: '100px', height: '70px' }}
              ></img>
            </TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>
              <IconButton aria-label='info' size='small'>
                <a href={item.sourceLink}>
                  <InfoIcon style={{ color: '#57648C' }} />
                </a>
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      );
    });
    const FBArr = this.props.store.FBdata.map((item, index) => {
      return (
        <TableBody>
          <TableRow key={index} hover>
            <TableCell>
              <img
                alt='images'
                src={item.image}
                style={{ width: '100px', height: '70px' }}
              ></img>
            </TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>
              <IconButton aria-label='info' size='small'>
                <a href={item.sourceLink}>
                  <InfoIcon style={{ color: '#57648C' }} />
                </a>
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      );
    });
    return (
      <div className='container'>
        <Card
          style={{
            margin: '10px',
            marginTop: '20px',
            backgroundColor: ' #C2B4D6',
            color: '#1a262a'
          }}
        >
          <CardContent>
            <h3 style={{ textAlign: 'center' }}>Craigslist Updates</h3>
          </CardContent>
          <CardContent>
            <TableContainer component={Paper}>
              <Table>
                <TableHead
                  style={{ backgroundColor: '#934A5F', color: '#E5E5E5' }}
                >
                  <TableRow>
                    <TableCell>
                      <strong>Image</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Title</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Price</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Source</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                {CLArr}
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
        <Card
          style={{
            margin: '10px',
            marginTop: '20px',
            backgroundColor: ' #C2B4D6',
            color: '#1a262a'
          }}
        >
          <CardContent>
            <h3 style={{ textAlign: 'center' }}>Facebook Updates</h3>
          </CardContent>
          <CardContent>
            <TableContainer component={Paper}>
              <Table>
                <TableHead
                  style={{ backgroundColor: '#934A5F', color: '#E5E5E5' }}
                >
                  <TableRow>
                    <TableCell>
                      <strong>Image</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Title</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Price</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Source</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                {FBArr}
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
