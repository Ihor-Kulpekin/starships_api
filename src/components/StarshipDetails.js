import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';
import {MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBDataTable, MDBRow} from 'mdbreact';

const StarshipDetails = (props) => {
  const {starshipDetails, id} = props;

  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        width: '400px'
      },
      {
        label: 'Value',
        field: 'value',
        width: 400,
      }
    ],
    rows: [
      {
        name: 'Model',
        value: starshipDetails[id] !== undefined ? starshipDetails[id].model : ''
      },
      {
        name: 'Manufacturer',
        value: starshipDetails[id] !== undefined ? starshipDetails[id].manufacturer : ''
      },
      {
        name: 'Cost',
        value: starshipDetails[id] !== undefined ? starshipDetails[id].cost_in_credits : ''
      },
      {
        name: 'Length',
        value: starshipDetails[id] !== undefined ? starshipDetails[id].length : ''
      },
      {
        name: 'Max Speed',
        value: starshipDetails[id] !== undefined ? starshipDetails[id].max_atmosphering_speed : ''
      },
      {
        name: 'Crew',
        value: starshipDetails[id] !== undefined ? starshipDetails[id].crew : ''
      },
      {
        name: 'Passengers',
        value: starshipDetails[id] !== undefined ? starshipDetails[id].passengers : ''
      },
      {
        name: 'Cargo Capacity',
        value: starshipDetails[id] !== undefined ? starshipDetails[id].crew : ''
      },
      {
        name: 'Hyperdrive rating',
        value: starshipDetails[id] !== undefined ? starshipDetails[id].hyperdrive_rating : ''
      },
      {
        name: 'MGLT',
        value: starshipDetails[id] !== undefined ? starshipDetails[id].MGLT : ''
      },
      {
        name: 'Starship Class',
        value: starshipDetails[id] !== undefined ? starshipDetails[id].starship_class : ''
      },
    ]
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          {starshipDetails !== undefined && (
            starshipDetails[id] ?
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTable responsive paging={false} data={data}/>
                </MDBCardBody>
              </MDBCard> :
              <CircularProgress/>
          )}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
};

StarshipDetails.propTypes = {
  starshipDetails: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};

export default StarshipDetails;