import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { createSlug } from "../Menjobs/Jobfrom";
import { Card, Button } from "react-bootstrap";
import { seminarItems } from "../Menhomeone/Seminer";
import Breadcrumb from "../Breadcrumb/Main";

const SeminerDetails = () => {
  const { id } = useParams();
  const [seminer, setSeminer] = useState(null);

  useEffect(() => {
    const selectedSeminer = seminarItems.find(
      (singleSeminer) => createSlug(singleSeminer.title) === id
    );

    setSeminer(selectedSeminer);
  }, [id]);

  if (!seminer) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Breadcrumb subtitle="Home / Seminar" title={seminer.title} />
      <div className="container my-5">
        <div className="sec-title text-center ">
          <h2 className="sec-title__tagline">{seminer.title}</h2>
        </div>
        <p>
          <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
          {seminer.description}
        </p>
        <div>
          <p>
            <span style={{ fontWeight: "bold" }}>Date:</span> {seminer.date}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Time:</span> {seminer.time}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Location:</span>{" "}
            {seminer.location}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Link to="" className="hiredots-btn">
            Apply for join
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeminerDetails;
