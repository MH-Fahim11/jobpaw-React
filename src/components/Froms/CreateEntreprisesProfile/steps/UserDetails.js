import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ReactFlagsSelect from "react-flags-select";
import { Link } from "react-router-dom";

const UserDetails = ({ values, handleChange,handleNext }) => {
  console.log(values, handleChange);
  const [selected, setSelected] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
        handleNext();
    }
    setValidated(true);
    
  };


  return (
    <div className="container mt-5 mb-5">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h4>Enter your Details</h4>
            <p>Toutes les informations fournies sont strictement confidentielles. Vous êtes l’unique personne qui en a accès. <br/>
                Les champs avec un astérisque (<span className=" text-danger">*</span>) sont obligatoires.
            </p>
            <Row className="mb-3">
                <Form.Group as={Col} xs={12} md={6} controlId="Compagnie">
                    <Form.Label>Compagnie <span className=" text-danger">*</span>:</Form.Label>
                    <Form.Control type="text" placeholder="Compagnie"  required/>
                </Form.Group>

                <Form.Group as={Col} xs={12} md={6} controlId="Sigle">
                    <Form.Label>Sigle <span className=" text-danger">*</span>:</Form.Label>
                    <Form.Control type="text" placeholder="Sigle" />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} xs={12} md={4} controlId="">
                    <Form.Label>Secteur <span className=" text-danger">*</span>:</Form.Label>
                    <Form.Select aria-label="Default select example">
                    <option>Choose...</option>
                    <option value="Informel">Informel</option>
                    <option value="ONG">ONG</option>
                    <option value="Privé">Privé</option>
                    <option value="Projet">Projet</option>
                    <option value="Public">Public</option>
                    <option value="R&D">R&D</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} xs={12} md={4} controlId="">
                    <Form.Label>Secteur d’activité<span className=" text-danger">*</span>:</Form.Label>
                    <Form.Select aria-label="Default select example">
                    <option>Choose...</option>
                    <option value="Informel">Informel</option>
                    <option value="ONG">ONG</option>
                    <option value="Privé">Privé</option>
                    <option value="Projet">Projet</option>
                    <option value="Public">Public</option>
                    <option value="R&D">R&D</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} xs={12} md={4} controlId="">
                    <Form.Label>Nombre d’employés<span className=" text-danger">*</span>:</Form.Label>
                    <Form.Control type="number" required/>
                </Form.Group>
            </Row>

             <Row className="mb-3">
                <Form.Group as={Col} xs={12} md={6} controlId="E-mail">
                <Form.Label>E-mail <span className=" text-danger">*</span>:</Form.Label>
                <Form.Control type="email" placeholder="E-mail"  required/>
                </Form.Group>

                <Form.Group as={Col} xs={12} md={6} controlId="Sigle">
                <Form.Label>Confirmer E-mail<span className=" text-danger">*</span>:</Form.Label>
                <Form.Control type="email" placeholder="Confirmer E-mail" />
                </Form.Group>
            </Row>

             <Row className="mb-3">
                <Form.Group as={Col} xs={12} md={6} controlId="Compagnie">
                <Form.Label>Téléphone <span className=" text-danger">*</span>:</Form.Label>
                <Form.Control type="text" placeholder="Téléphone"  required/>
                </Form.Group>

                <Form.Group as={Col} xs={12} md={6} controlId="Sigle">
                <Form.Label>Site Web:</Form.Label>
                <Form.Control type="text" placeholder="Site Web" />
                </Form.Group>
            </Row>   
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Pays <span className=" text-danger">*</span>:</Form.Label>
                    
                        <ReactFlagsSelect
                            className="country"
                            selected={selected}
                            onSelect={(code) => setSelected(code)}
                        />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Ville <span className=" text-danger">*</span>:</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>Undifine</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address<span className=" text-danger">*</span></Form.Label>
                <Form.Control placeholder="Address" />
            </Form.Group>

            <p  className=" text-danger">Informations sur le Représentant de la compagnie</p>

            <Row className="mb-3">
                <Form.Group as={Col} xs={12} md={6} controlId="Prénom">
                <Form.Label>Prénom <span className=" text-danger">*</span>:</Form.Label>
                <Form.Control type="text" placeholder="Prénom"  required/>
                </Form.Group>

                <Form.Group as={Col} xs={12} md={6} controlId="Sigle">
                <Form.Label>Nom <span className=" text-danger">*</span>:</Form.Label>
                <Form.Control type="text" placeholder="Nom" />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} xs={12} md={6} controlId="E-mail">
                <Form.Label>E-mail <span className=" text-danger">*</span>:</Form.Label>
                <Form.Control type="email" placeholder="E-mail"  required/>
                </Form.Group>

                <Form.Group as={Col} xs={12} md={6} controlId="Sigle">
                <Form.Label>Confirmer E-mail<span className=" text-danger">*</span>:</Form.Label>
                <Form.Control type="email" placeholder="Confirmer E-mail" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} xs={12} md={6} controlId="E-mail">
                <Form.Label>Mot de passe <span className=" text-danger">*</span>:</Form.Label>
                <Form.Control type="password" placeholder="Mot de passe"  required/>
                </Form.Group>

                <Form.Group as={Col} xs={12} md={6} controlId="Sigle">
                <Form.Label>Confirmer mot de passe<span className=" text-danger">*</span>:</Form.Label>
                <Form.Control type="password" placeholder="Confirmer mot de passe" />
                </Form.Group>
            </Row>

      {/* <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group> */}

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Sexe <span className=" text-danger">*</span>:</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>Masculin</option>
                        <option>Feminin</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Date de naissance:</Form.Label>
                    <Form.Control type="date"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Pays <span className=" text-danger">*</span>:</Form.Label>
                    
                        <ReactFlagsSelect
                            className="country"
                            selected={selected}
                            onSelect={(code) => setSelected(code)}
                        />
                   
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Ville <span className=" text-danger">*</span>:</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>Undifine</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} xs={12} md={4} controlId="">
                    <Form.Label>Cellulaire <span className=" text-danger">*</span>:</Form.Label>
                    <Form.Control type="text" placeholder="Cellulaire"  required/>
                </Form.Group>

                <Form.Group as={Col} xs={12} md={4} controlId="">
                    <Form.Label>Téléphone Achats/Ventes <span className=" text-danger">*</span>:</Form.Label>
                    <Form.Control type="text" placeholder="Téléphone Achats/Ventes"  required/>
                </Form.Group>

                <Form.Group as={Col} xs={12} md={4} controlId="">
                    <Form.Label>Téléphone RH<span className=" text-danger">*</span>:</Form.Label>
                    <Form.Control type="text" placeholder="Téléphone RH" required/>
                </Form.Group>

            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} xs={12} md={6} controlId="">
                    <Form.Label>Adresse <span className=" text-danger">*</span>:</Form.Label>
                    <Form.Control type="text" placeholder="Adresse"  required/>
                </Form.Group>

                <Form.Group as={Col} xs={12} md={6} controlId="">
                    <Form.Label>Remarque:</Form.Label>
                    <Form.Control type="text" placeholder="120 caractères maximum incluant les espaces"  required/>
                </Form.Group>


            </Row>

      {/* <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <p>En cliquant ci-dessous, vous déclarez avoir lu et accepté les <Link>conditions d’utilisation de JobPaw.com</Link> conditions d’utilisation de JobPaw.com. Vous recevrez un e-mail de bienvenue à vérifier dans son inbox ou spam et tout nouvel appel d’offres lié à votre secteur d’activité.</p>
      <Button variant="primary" type="submit" >
      S’enregistrer 
      </Button>
    </Form>
    </div>
  );
};

export default UserDetails;