import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import PropTypes from 'prop-types';

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
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';

import './LandingPage.css';

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied'
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied'
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral'
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied'
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied'
  }
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired
};

class LandingPage extends Component {
  componentDidMount() {
    // react Component method
    this.props.dispatch({
      type: 'GET_CL_DATA'
    });

    // setup for potential other sources
    // this.props.dispatch({
    //   type: 'GET_FB_DATA'
    // });
  }

  render() {
    const CLArr = this.props.store.CLdata.map((item, index) => {
      return (
        <TableBody>
          <TableRow key={index} hover>
            <TableCell>{item.id}</TableCell>
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
            <TableCell>
              <Box component='fieldset' mb={3} borderColor='transparent'>
                <Typography component='legend'>Rate This Deal!</Typography>
                <Rating
                  name='customized-icons'
                  // defaultValue={2}
                  getLabelText={value => customIcons[value].label}
                  IconContainerComponent={IconContainer}
                />
              </Box>
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
            <h2 style={{ textAlign: 'center', display: 'inline-block' }}>
              Craigslist Updates
            </h2>
            <span style={{ float: 'right' }}>
              <Button
                variant='contained'
                color='primary'
                style={{
                  margin: '3px',
                  backgroundColor: '#57648c'
                }}
              >
                All Deals
              </Button>
              <Button
                variant='contained'
                color='primary'
                style={{ margin: '3px', backgroundColor: '#57648c' }}
              >
                Saved Deals
              </Button>
            </span>
          </CardContent>
          <CardContent>
            <TableContainer component={Paper}>
              <Table>
                <TableHead style={{ backgroundColor: '#57648c' }}>
                  <TableRow>
                    <TableCell style={{ color: '#e5e5e5' }}>ID</TableCell>
                    <TableCell style={{ color: '#e5e5e5' }}>
                      <strong>Image</strong>
                    </TableCell>
                    <TableCell style={{ color: '#e5e5e5' }}>
                      <strong>Title</strong>
                    </TableCell>
                    <TableCell style={{ color: '#e5e5e5' }}>
                      <strong>Price</strong>
                    </TableCell>
                    <TableCell style={{ color: '#e5e5e5' }}>
                      <strong>Source</strong>
                    </TableCell>
                    <TableCell style={{ color: '#e5e5e5' }}>
                      <strong>Rating</strong>
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
            backgroundColor: ' #e5e5e5',
            color: '#1a262a'
          }}
        ></Card>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
