import React from "react";
import Breadcrumb from "../Breadcrumb/Main";

const university_services = [
  {
    service: "Publier Recherche et Développement (R&D)",
    benefit: "Gratuit",
  },
  {
    service: "Stages – Support au placement	",
    benefit: "Gratuit",
  },
  {
    service: "Coaching CV - étudiants finissants	",
    benefit: "Gratuit en université    ",
  },
  {
    service: "Coaching emploi - étudiants finissants	",
    benefit: "Gratuit en université    ",
  },
  {
    service: "Coaching orientation - 9ème année au Bac	",
    benefit: "Gratuit en école    ",
  },
  {
    service: "Alertes aux appels d’offres	",
    benefit: "Gratuit ",
  },
  {
    service: "Accès aux appels d’offres	",
    benefit: "Gratuit ",
  },
];

const professionals_service = [
  {
    service: "Publier mémoire et travail de sortie",
    benefit: "Gratuit",
  },
  {
    service: "Créer un CVPaw Pro	",
    benefit: "https://goo.gl/jjyubL",
  },
  {
    service: "Coaching CV	",
    benefit: "https://goo.gl/jjyubL",
  },
  {
    service: "Coaching emploi	",
    benefit: "https://goo.gl/jjyubL",
  },
  {
    service: "Coaching orientation	",
    benefit: "https://goo.gl/jjyubL",
  },
  {
    service: "Coaching carrière et Développement personnel	",
    benefit: "https://goo.gl/jjyubL",
  },
  {
    service: "Montage et Support de Start-up",
    benefit: "https://goo.gl/jjyubL",
  },
  {
    service: "Alertes aux offres d’emploi",
    benefit: "Gratuit",
  },
];

const services_profession = [
  {
    service: "Publier une offre d’emploi	",
    benefit: "https://goo.gl/cZaEse",
  },
  {
    service: "Recruter via le Head Hunter	",
    benefit: "https://goo.gl/QFZ1dW",
  },
  {
    service: "Recruter dans la base de CV	",
    benefit: "https://goo.gl/kEMp8o",
  },
  {
    service: "Publier un appel d’offres	",
    benefit: "	https://goo.gl/JtsHs8",
  },
  {
    service: "Publier un séminaire	",
    benefit: "	https://goo.gl/JrhN7M",
  },
  {
    service: "Publicité via blast e-mail	",
    benefit: "	https://goo.gl/PYSeje",
  },
  {
    service: "Publicité via bannière web	",
    benefit: "	https://goo.gl/jwi4uY",
  },
  {
    service: "Coaching et Analyse d’entreprise	",
    benefit: "https://goo.gl/jjyubL",
  },
  {
    service: "Montage et Support de Start-up	",
    benefit: "	https://goo.gl/jjyubL",
  },
  {
    service: "Accès aux appels d’offres	",
    benefit: "Gratuit",
  },
  {
    service: "Alertes aux appels d’offres	",
    benefit: "Gratuit",
  },
  {
    service: "Publier rapport d’analyse et de recherche	",
    benefit: "Gratuit",
  },
  {
    service: "Publier bourse d’étude	",
    benefit: "Gratuit",
  },
];

const Advertise = () => {
  return (
    <>
      <Breadcrumb subtitle="Home" title="Mettre publicité sur JobPaw" />
      <div className="my-5 container">
        <div className="mb-5">
          <div className="sec-title text-center">
            <h6 className="sec-title__tagline">
              Tableau des services aux universités
            </h6>
          </div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Services aux universités</th>
                <th scope="col">Couts et Avantages</th>
              </tr>
            </thead>
            <tbody>
              {university_services.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.service}</td>
                    <td>{item.benefit}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="mb-5">
          <div className="sec-title text-center">
            <h6 className="sec-title__tagline">
              Tableau des services aux professionnels
            </h6>
          </div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tableau des services aux professionnels</th>
                <th scope="col">Couts et Avantages</th>
              </tr>
            </thead>
            <tbody>
              {professionals_service.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.service}</td>
                    <td>{item.benefit}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="mb-5">
          <div className="sec-title text-center">
            <h6 className="sec-title__tagline">
              Tableau des services aux entreprises
            </h6>
          </div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Services aux entreprises </th>
                <th scope="col">Couts et Avantages</th>
              </tr>
            </thead>
            <tbody>
              {services_profession.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.service}</td>
                    <td>{item.benefit}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Advertise;
