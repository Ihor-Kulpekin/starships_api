import React from 'react';
import PropTypes from 'prop-types';

import {MDBContainer, MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';

const StarshipDetails = (props) => {
  const {starshipDetails, id} = props;

  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        width: '400px',
        color: '#222'
      },
      {
        label: 'Value',
        field: 'value',
        width: '400px',
        color: '#222'
      }
    ],
    rows: [
      {
        name: 'Name',
        value: starshipDetails[id] !== undefined ? starshipDetails[id].name : ''
      },
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
      <MDBTable style={{marginTop: 35, borderRadius: 5}} className="table-hover table table-dark">
        <MDBTableHead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {
            data.rows.map((row, index) => {
              return (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.value}</td>
                </tr>
              )
            })
          }
        </MDBTableBody>
      </MDBTable>
    </MDBContainer>
  )
};

StarshipDetails.propTypes = {
  starshipDetails: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};

export default StarshipDetails;