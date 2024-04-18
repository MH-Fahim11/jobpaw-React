import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createSlug, jobslist } from "../Menjobs/Jobfrom";
import Breadcrumb from "../Breadcrumb/Main";

const SignleJob = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const selectedJob = jobslist.find(
      (singleJob) => createSlug(singleJob.title) === jobId
    );

    setJob(selectedJob);
  }, [jobId]);

  if (!job) {
    return <div>Loading...</div>;
  }

  console.log(job);

  return (
    <div>
      <Breadcrumb
        subtitle="Home / Professionals / Find Job"
        title={job?.title}
      />
      <div className="my-5 container">
        <h2>{job.title}</h2>
        <p>
          <strong>Location:</strong> {job.location}
        </p>
        <p>
          <strong>Salary:</strong> {job.salary}
        </p>
        <p>
          <strong>Deadline:</strong> {job.deadline}
        </p>
        <p>
          <strong>Company:</strong> {job.company}
        </p>

        <div>
        <div className="sec-title text-center">
          <h6 className="sec-title__tagline">Responsibilities</h6>
        </div>
          <ol type="1" >
            {job.responsibilities.map((responsibility, index) => (
              <li className="" key={index}>{responsibility}</li>
            ))}
          </ol>
        </div>

        <div>
        <div className="sec-title text-center">
          <h6 className="sec-title__tagline">Qualifications</h6>
        </div>
          <ol type="1">
            {job.qualifications.map((qualification, index) => (
              <li key={index}>{qualification}</li>
            ))}
          </ol>
        </div>

        <div>
        <div className="sec-title text-center">
          <h6 className="sec-title__tagline">Benefits</h6>
        </div>
          <ol type="1">
            {job.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ol>
        </div>
        <button className="hiredots-btn">Apply Now</button>
      </div>
    </div>
  );
};

export default SignleJob;
