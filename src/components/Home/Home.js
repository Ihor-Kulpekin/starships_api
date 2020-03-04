import React from 'react';

import {MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBRow} from 'mdbreact';

const Home = () => {
  return (
    <MDBContainer>
      <MDBRow center>
        <MDBCol size="12" xs="12" lg="10">
          <MDBCard style={{width: "100%"}}>
            <MDBCardImage className="img-fluid"
                          src="https://vignette.wikia.nocookie.net/starwars/images/d/da/Executorbridge.jpg/revision/latest/scale-to-width-down/1000?cb=20120110005354"
                          waves/>
            <MDBCardBody>
              <MDBCardTitle>Starships</MDBCardTitle>
              <MDBCardText>
                What would Star Wars be without the many cool space ships that populate its universe? From starfighters
                to military cruisers and worn hunks of junk that separate Star Wars from the chrome aesthetic of
                countless other sci-fi stories, this vast armada is a true marvel of cinema and the science fiction
                genre.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
};

export default Home;