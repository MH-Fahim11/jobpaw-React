import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";


function CreateProfessionnelsProfile() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    
  };
    return (
        <div className="container mt-5 mb-5">
            <div className=" mb-5">
                <h4>CVPaw apporte la solution au défi du CV</h4>
                <p>Les entreprises reconnaissent qu’un CV pro reste incontournable et est l’un des défis majeurs des candidats. CVPaw vient en aide, explique quoi mettre dans un CV, arrange les info dans un CV et génère ensuite un CVPaw Pro identique à nos modèles gratuits ci-dessus.</p>
                <p>Après avoir rempli le formulaire de 12 sections, vous aurez un CVPaw Pro, qui augmente votre possibilité de trouver un emploi et de booster votre carrière. Toutes les informations fournies sont strictement confidentielles et vous êtes l’unique personne qui en a accès. Les champs avec un astérisque (<span className=" text-danger">*</span>) sont obligatoires.</p>
            </div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <h4>Informations basiques</h4>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={6} controlId="Compagnie">
                        <Form.Label>Prénom  <span className=" text-danger">*</span>:</Form.Label>
                        <Form.Control type="text" placeholder="Prénom "  required/>
                    </Form.Group>

                    <Form.Group as={Col} xs={12} md={6} controlId="Sigle">
                        <Form.Label>Nom <span className=" text-danger">*</span>:</Form.Label>
                        <Form.Control type="text" placeholder="Nom" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={6} controlId="Compagnie">
                        <Form.Label>E-mail <span className=" text-danger">*</span>:</Form.Label>
                        <Form.Control type="email" placeholder="E-mail"  required/>
                    </Form.Group>

                    <Form.Group as={Col} xs={12} md={6} controlId="Sigle">
                        <Form.Label>Confirmer e-mail <span className=" text-danger">*</span>:</Form.Label>
                        <Form.Control type="email" placeholder="Confirmer e-mail" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={6} controlId="Compagnie">
                        <Form.Label>Mot de passe <span className=" text-danger">*</span>:</Form.Label>
                        <Form.Control type="password" placeholder="Compagnie"  required/>
                    </Form.Group>

                    <Form.Group as={Col} xs={12} md={6} controlId="Sigle">
                        <Form.Label>Confirmer mot de passe <span className=" text-danger">*</span>:</Form.Label>
                        <Form.Control type="password" placeholder="Confirmer mot de passe" />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit" >
                    SUIVANT
                </Button>

            </Form>
        </div>
    );
}

export default CreateProfessionnelsProfile;
