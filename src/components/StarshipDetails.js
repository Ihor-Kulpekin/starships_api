import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CircularProgress from "@material-ui/core/CircularProgress";


const StarshipDetails = (props) => {
  const {starshipDetails, id} = props;

  console.log(starshipDetails[id]);
  return (
    <div className="card-body border">
      {starshipDetails !== undefined && (
        starshipDetails[id] ?
          <div>
            <p>
              Name:{starshipDetails[id].name}
            </p>
            <p>
              Model:{starshipDetails[id].model}
            </p>
            <p>
              Manufacturer:{starshipDetails[id].manufacturer}
            </p>
            <p>
              Cost_in_credits:{starshipDetails[id].cost_in_credits}
            </p>
            <p>
              Length:{starshipDetails[id].length}
            </p>
            <p>
              Max Atmosphering_Speed:{starshipDetails[id].max_atmosphering_speed}
            </p>
            <p>
              Crew:{starshipDetails[id].crew}
            </p>
            <p>
              Passengers:{starshipDetails[id].passengers}
            </p>
            <p>
              Cargo Capacity:{starshipDetails[id].cargo_capacity}
            </p>
            <p>
              Consumables:{starshipDetails[id].consumables}
            </p>
            <p>
              Hyperdrive rating:{starshipDetails[id].hyperdrive_rating}
            </p>
            <p>
              MGLT:{starshipDetails[id].MGLT}
            </p>
            <p>
              Starship Class:{starshipDetails[id].starship_class}
            </p>
            <p>
              Pilots:{starshipDetails[id].pilots}
            </p>
            <p>
              Created:{starshipDetails[id].created}
            </p>
            <p>
              Edited:{starshipDetails[id].edited}
            </p>
          </div>
          : <CircularProgress/>
      )}
    </div>
  )
};

export default StarshipDetails;