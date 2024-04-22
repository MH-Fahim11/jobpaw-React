import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import ReactFlagsSelect from "react-flags-select";

function CreateUniversitiesPorfile() {
  const [validated, setValidated] = useState(false);
  const [selected, setSelected] = useState("");
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
                <h4>Universités et écoles professionnelles - Faire la promotion de vos formations et de vos diplômés</h4>
                <p>Ajouter ou actualiser les informations de votre établissement en vue d’attirer les bacheliers et les étudiants - S’assurer que votre établissement soit dans notre répertoire des formations techniques et universitaires en Haiti.</p>
                <p>Cette page doit être remplie uniquement par un responsable de l’établissement ou par une personne autorisée par un responsable de l’établissement</p>
                <p>Les champs avec un astérisque (<span className=" text-danger">*</span>) sont obligatoires.</p>
            </div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                {/* <h4>Informations basiques</h4> */}
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={6} controlId="Compagnie">
                        <Form.Label>Nom de l’établissement <span className=" text-danger">*</span>:</Form.Label>
                        <Form.Control type="text" placeholder="Nom de l’établissement "  required/>
                    </Form.Group>

                    <Form.Group as={Col} xs={12} md={6} controlId="Sigle">
                        <Form.Label>Sigle<span className=" text-danger">*</span>:</Form.Label>
                        <Form.Control type="text" placeholder="Sigle " />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={6} controlId="Compagnie">
                        <Form.Label>Fax:</Form.Label>
                        <Form.Control type="text" placeholder="Fax"  required/>
                    </Form.Group>

                    <Form.Group as={Col} xs={12} md={6} controlId="Sigle">
                        <Form.Label>Téléphon <span className=" text-danger">*</span>:</Form.Label>
                        <Form.Control type="text" placeholder="Téléphon" />
                    </Form.Group>
                </Row>

                <Form.Group as={Col} controlId="Sigle" className="mb-3">
                        <Form.Label>Adresse <span className=" text-danger">*</span>:</Form.Label>
                        <Form.Control  as="textarea" rows={3} placeholder="Adresse" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={3} controlId="Compagnie">
                    <Form.Label>Pays <span className=" text-danger">*</span>:</Form.Label>
                    
                    <ReactFlagsSelect
                        className="country"
                        selected={selected}
                        onSelect={(code) => setSelected(code)}
                    />
                    </Form.Group>

                    <Form.Group as={Col} xs={12} md={3} controlId="Sigle">
                        <Form.Label>Site Web:</Form.Label>
                        <Form.Control type="text" placeholder="Site Web " />
                    </Form.Group>

                    <Form.Group as={Col} xs={12} md={3} controlId="Sigle">
                        <Form.Label>Logo:</Form.Label>
                        <Form.Control type="file" placeholder="Web " />
                    </Form.Group>

                    <Form.Group as={Col} xs={12} md={3} controlId="Sigle">
                        <Form.Label>Type Formation <span className=" text-danger">*</span>:</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Choose...</option>
                            <option value="Technique">Technique</option>
                            <option value="Universitaire et Technique">Universitaire et Technique</option>
                            <option value="Universitaire">Universitaire</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={6} controlId="Compagnie">
                        <Form.Label>E-mail<span className=" text-danger">*</span>:</Form.Label>
                        <Form.Control type="email" placeholder="E-mail 1"  required/>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} controlId="Compagnie">
                        <Form.Label>Représentant<span className=" text-danger">*</span>:</Form.Label>
                        <Form.Control type="text" placeholder="Représentant 1"  required/>
                    </Form.Group>

                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={6} controlId="Compagnie">
                        <Form.Control type="email" placeholder="E-mail 2"  required/>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} controlId="Compagnie">
                        <Form.Control type="text" placeholder="Représentant 2"  required/>
                    </Form.Group>

                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={6} controlId="Compagnie">
                        <Form.Control type="email" placeholder="E-mail 3"  required/>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} controlId="Compagnie">
                        <Form.Control type="text" placeholder="Représentant 3"  required/>
                    </Form.Group>

                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={6} controlId="Compagnie">
                        <Form.Control type="email" placeholder="E-mail 4"  required/>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} controlId="Compagnie">
                        <Form.Control type="text" placeholder="Représentant 4"  required/>
                    </Form.Group>

                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={6} controlId="Compagnie">
                        <Form.Control type="email" placeholder="E-mail 5"  required/>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} controlId="Compagnie">
                        <Form.Control type="text" placeholder="Représentant 5"  required/>
                    </Form.Group>
                </Row>

                <Form.Group as={Col} controlId="Sigle" className="mb-3">
                        <Form.Label>Description<span className=" text-danger">*</span>:</Form.Label>
                        <Form.Control  as="textarea" rows={4} placeholder="70 caractères maximum incluant les espaces" />
                </Form.Group>
                
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={3} controlId="Compagnie">
                        <Form.Label>Domaine <span className=" text-danger">*</span>:</Form.Label>
                    </Form.Group>

                    <Form.Group as={Col} xs={12} md={2} controlId="Sigle">
                        <Form.Label>Spécialité<span className=" text-danger">*</span>:</Form.Label>
                    </Form.Group>

                    <Form.Group as={Col} xs={12} md={2} controlId="Sigle">
                        <Form.Label>Durée<span className=" text-danger">*</span>:</Form.Label>
                    </Form.Group>

                    <Form.Group as={Col} xs={12} md={2} controlId="Sigle">
                        <Form.Label>Diplôme<span className=" text-danger">*</span>:</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={2} controlId="Sigle">
                        <Form.Label>Diplômés<span className=" text-danger">*</span>:</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={1} controlId="Sigle">
                        <Form.Label>X<span className=" text-danger">*</span>:</Form.Label>
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit" > 
                    S’enregistrer 
                </Button>

            </Form>
        </div>
    );
}

export default CreateUniversitiesPorfile;
