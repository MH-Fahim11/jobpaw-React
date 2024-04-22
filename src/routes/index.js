import React from "react";
import { Route, Routes } from "react-router-dom";
import Homeone from "../components/Homeone/Main";
import About from "../components/About/Main";
import TeamDetails from "../components/TeamDetails/Main";
import Jobs from "../components/Jobs/Main";
import History from "../components/History/Main";
import Faq from "../components/Faq/Main";
import Services from "../components/Services/Main";
import ServiceConsulting from "../components/Service-Consulting/Main";
import ServiceResources from "../components/Service-resources/Main";
import ServiceHydro from "../components/Service-Hydro/Main";
import ServiceProgram from "../components/Service-Program/Main";
import ServiceTraining from "../components/Service-Training/Main";
import ServiceManagement from "../components/Service-Management/Main";
import Project from "../components/Project/Main";
import ProjectDetails from "../components/ProjectDetails/Main";
import Blog from "../components/Blog/Main";
import BlogDetails from "../components/BlogDetails/Main";
import Contact from "../components/Contact/Main";
import Professionnels from "../components/Professionnels/Professionnels";
import { ChooseUniversity } from "../components/ProfessionalItems/ChooseUniversity";
import Header from "../components/Header/Main";
import Footer from "../components/Footer/Main";
import SingleUniversity from "../components/ProfessionalItems/SingleUniversity";
import FindJob from "../components/Professionnels/FindJob";
import SignleJob from "../components/Professionnels/SignleJob";
import Testimonial from "../components/Menhomeone/Testimonial";
import Advertise from "../components/Services/Advertise";

import CreateEntreprisesProfile from "../components/Froms/CreateEntreprisesProfile/CreateEntreprisesProfile";
import CreateProfessionnelsProfile from "../components/Froms/CreateProfessionnelsProfile/CreateProfessionnelsProfile";
// import CreateUniversitiesPorfile from "../components/Froms/CreateUniversitiesPorfile/CreateUniversitiesPorfile";

import Login from "../components/login/Login";
import Signup from "../components/login/Signup";
import ReserachPaper from "../components/Professionnels/ReserachPaper";
import SignleResearchPaper from "../components/Professionnels/SignleResearchPaper";

import CreateUniversitiesPorfile from "../components/Froms/CreateUniversitiesPorfile/CreateUniversitiesPorfile";

import Universities from "../components/Universities/Universities";
import SeminerDetails from "../components/SeminerDetails/SeminerDetails";
import TenderDetails from "../components/TenderDetails/TenderDetails";

function index() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homeone />} />
        <Route path="/about" element={<About />} />
        <Route path="/teamdetails" element={<TeamDetails />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/history" element={<History />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-consulting" element={<ServiceConsulting />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/professionnels" element={<Professionnels />} />
        <Route
          path="/professionnels/choose-school-or-universiry"
          element={<ChooseUniversity />}
        />
        <Route
          path="/professionnels/choose-school-or-universiry/:universityId"
          element={<SingleUniversity />}
        />
        <Route path="/professionnels/find-job" element={<FindJob />} />
        <Route path="/professionnels/find-job/:jobId" element={<SignleJob />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/services/advertise-on-jobpaw" element={<Advertise />} />

        <Route
          path="/entreprises/CreateEntreprisesProfile"
          element={<CreateEntreprisesProfile />}
        />
        <Route
          path="/professionnels/CreateProfessionnelsProfile"
          element={<CreateProfessionnelsProfile />}
        />
        <Route
          path="/universities/CreateUniversitiesPorfile"
          element={<CreateUniversitiesPorfile />}
        />

        {/* <Route  path="/CreateCompanyProfile" element={<CreateCompanyProfile />}/> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/professionnels/consult-research-work"
          element={<ReserachPaper />}
        />
        <Route
          path="/professionnels/consult-research-work/:paperId"
          element={<SignleResearchPaper />}
        />
        <Route path="/seminars/:id" element={<SeminerDetails />} />
        <Route path="/tenders/:id" element={<TenderDetails />} />
        <Route path="/universities" element={<Universities />} />
      </Routes>
      <Footer />
    </>
  );
}

export default index;
