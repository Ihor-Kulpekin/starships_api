import React from 'react';
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBRow} from 'mdbreact';

const Home = ()=>{
  return (
    <MDBContainer>
      <MDBRow center>
        <MDBCol size="12" xs="12" lg="10">
          <MDBCard style={{ width: "100%" }}>
            <MDBCardImage className="img-fluid" src="https://vignette.wikia.nocookie.net/starwars/images/d/da/Executorbridge.jpg/revision/latest/scale-to-width-down/1000?cb=20120110005354" waves />
            <MDBCardBody>
              <MDBCardTitle>Мощь имперского флота несокрушима</MDBCardTitle>
              <MDBCardText>
                Соединение сил привело к необходимому сочетанию воздушной и космической сферы как смежных областей, для более удобного контроля за ними. Создание данных сил обусловлено ситуацией на мировой арене, изменениями при перевооружении других государств, увеличением значимости космического сектора для военно-экономического и социального прогресса.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
};

export default Home;