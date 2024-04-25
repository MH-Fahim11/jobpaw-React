import { Link } from "react-router-dom";

// Import job logos
import Joblogo1 from "../../assets/images/jobs/logo-1.png";
import Joblogo2 from "../../assets/images/jobs/logo-2.png";
import Joblogo3 from "../../assets/images/jobs/logo-3.png";
import Joblogo4 from "../../assets/images/jobs/logo-4.png";
import Joblogo5 from "../../assets/images/jobs/logo-5.png";
import jobimage from "../../assets/images/jobs/image-1.png";
import hiring_image from "../../assets/images/services/sv-2.png";
import img1 from '../../assets/images/34FinalPhotos/IMG-20240320-WA0018.jpg'
import img2 from '../../assets/images/34FinalPhotos/IMG-20240320-WA0038.jpg'

export const createSlug = (sentence) => {
  return sentence
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
};

export const jobslist = [
  {
    logo: jobimage,
    image: img1,
    category: "Programming & tech",
    title: "Software Engineer Job",
    location: "San Francisco, California",
    salary: "$75000-$90000",
    deadline: "5/1/2024",
    company: "Brain station 23",
    responsibilities: [
      "Developing responsive web applications.",
      "Collaborating with designers and backend developers.",
      "Implementing UI/UX designs.",
      "Testing and debugging code.",
      "Optimizing application performance.",
    ],

    qualifications: [
      "Proficiency in HTML, CSS, and JavaScript.",
      "Experience with front-end frameworks such as React or Angular.",
      "Understanding of responsive design principles.",
      "Familiarity with version control systems like Git.",
      "Strong problem-solving skills.",
      "Excellent communication and teamwork abilities.",
    ],
    benefits: [
      "Competitive salary.",
      "Flexible working hours.",
      "Remote work opportunities.",
      "Professional development assistance.",
      "Healthcare benefits package.",
    ],
  },
  {
    logo: jobimage,
    image: img2,
    category: "Programming & tech",
    title: "Administrative Coordinator",
    location: "San Francisco, California",
    salary: "$75000-$90000",
    deadline: "5/1/2024",
    company: "Enosis solution",
    responsibilities: [
      "Developing responsive web applications.",
      "Collaborating with designers and backend developers.",
      "Implementing UI/UX designs.",
      "Testing and debugging code.",
      "Optimizing application performance.",
    ],

    qualifications: [
      "Proficiency in HTML, CSS, and JavaScript.",
      "Experience with front-end frameworks such as React or Angular.",
      "Understanding of responsive design principles.",
      "Familiarity with version control systems like Git.",
      "Strong problem-solving skills.",
      "Excellent communication and teamwork abilities.",
    ],
    benefits: [
      "Competitive salary.",
      "Flexible working hours.",
      "Remote work opportunities.",
      "Professional development assistance.",
      "Healthcare benefits package.",
    ],
  },
  {
    logo: jobimage,
    image: img1,
    category: "Programming & tech",
    title: "Human Resources Manager",
    location: "San Francisco, California",
    salary: "$75000-$90000",
    deadline: "5/1/2024",
    company: "Tiger IT",
    responsibilities: [
      "Developing responsive web applications.",
      "Collaborating with designers and backend developers.",
      "Implementing UI/UX designs.",
      "Testing and debugging code.",
      "Optimizing application performance.",
    ],

    qualifications: [
      "Proficiency in HTML, CSS, and JavaScript.",
      "Experience with front-end frameworks such as React or Angular.",
      "Understanding of responsive design principles.",
      "Familiarity with version control systems like Git.",
      "Strong problem-solving skills.",
      "Excellent communication and teamwork abilities.",
    ],
    benefits: [
      "Competitive salary.",
      "Flexible working hours.",
      "Remote work opportunities.",
      "Professional development assistance.",
      "Healthcare benefits package.",
    ],
  },
  {
    logo: jobimage,
    image: img1,
    category: "Programming & tech",
    title: "Graphic & Web Designing",
    location: "San Francisco, California",
    salary: "$75000-$90000",
    deadline: "5/1/2024",
    company: "Republic store",
    responsibilities: [
      "Developing responsive web applications.",
      "Collaborating with designers and backend developers.",
      "Implementing UI/UX designs.",
      "Testing and debugging code.",
      "Optimizing application performance.",
    ],

    qualifications: [
      "Proficiency in HTML, CSS, and JavaScript.",
      "Experience with front-end frameworks such as React or Angular.",
      "Understanding of responsive design principles.",
      "Familiarity with version control systems like Git.",
      "Strong problem-solving skills.",
      "Excellent communication and teamwork abilities.",
    ],
    benefits: [
      "Competitive salary.",
      "Flexible working hours.",
      "Remote work opportunities.",
      "Professional development assistance.",
      "Healthcare benefits package.",
    ],
  },
  {
    logo: jobimage,
    image: img1,
    category: "Programming & tech",
    title: "Digital Marketing Assistant",
    location: "San Francisco, California",
    salary: "$75000-$90000",
    deadline: "5/1/2024",
    company: "Brain station 23",
    responsibilities: [
      "Developing responsive web applications.",
      "Collaborating with designers and backend developers.",
      "Implementing UI/UX designs.",
      "Testing and debugging code.",
      "Optimizing application performance.",
    ],

    qualifications: [
      "Proficiency in HTML, CSS, and JavaScript.",
      "Experience with front-end frameworks such as React or Angular.",
      "Understanding of responsive design principles.",
      "Familiarity with version control systems like Git.",
      "Strong problem-solving skills.",
      "Excellent communication and teamwork abilities.",
    ],
    benefits: [
      "Competitive salary.",
      "Flexible working hours.",
      "Remote work opportunities.",
      "Professional development assistance.",
      "Healthcare benefits package.",
    ],
  },
];

function Jobfrom() {
  return (
    <div className="jobs">
      <div className="container">
        <form
          className="contact-form-validated"
          action="inc/sendemail.php"
          noValidate="novalidate"
        >
          <div
            className="jobs__form wow fadeInUp animated"
            data-wow-duration="1500ms"
          >
            <div className="jobs__group row gutter-y-20">
              <div className="col-md-6">
                <div className="job__control Jobs__control--full">
                  <input type="text" name="name" placeholder="All Jobs" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="jobs__control Jobs__control--full">
                  <input type="text" name="name" placeholder="Any Location" />
                </div>
              </div>
            </div>
          </div>
          <div className="jobs__form__checkbox">{/* Checkbox items */}</div>
        </form>
        <div className="jobs-list">
          {/* Map over jobs array and generate job entries */}
          {jobslist.map((job, index) => (
            <div key={index} className="jobs-list__card">
              <div className="jobs-list__left">
                <div className="jobs-list__logo">
                  <img src={job.logo} alt="" />
                </div>
                <div className="jobs-list__content">
                  <span className="jobs-list__time">
                    <i className="fas fa-clock" /> Posted 3 days ago
                  </span>
                  <h3
                    style={{ marginBottom: "10px" }}
                    className="jobs-list__title"
                  >
                    {job.title} <br />{" "}
                    <span style={{ fontSize: "18px" }}>at {job.company}</span>
                  </h3>
                  <span className="jobs-list__location">
                    Location: {job.location}
                  </span>
                  <p className="jobs-list__location">
                    Deadline: {job.deadline}
                  </p>
                </div>
              </div>
              <div className="jobs-list__right">
                <span className="jobs-list__price">
                  <b>$85,000 - $90,000</b> Per Year
                </span>
                <Link
                  to={`/professionnels/find-job/${createSlug(job?.title)}`}
                  className="hiredots-btn"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Jobfrom;
