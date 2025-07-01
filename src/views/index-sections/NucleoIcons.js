import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function NucleoIcons() {
  return (
    <>
      <div className="section section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">SIAC</h2>
              <h5 className="description">
                Desarollo de aplicaciones solidas, mejoramos la visibilidad y alcance de tú organizacion
                ,asesoría en Seguridad Informática y Contable 
                "SIAC" tiene la SOLUCIÓN.
            
              </h5>
              <Button
                className="btn-round mr-1"
                color="info"
                href="/"
                size="lg"
                target="_top"
              >
                COTIZACIONES
              </Button>
              <Button
                className="btn-round"
                color="info"
                href="/"
                outline
                size="lg"
                target="_top"
              >
                PARTNERS
              </Button>
            </Col>            
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NucleoIcons;
