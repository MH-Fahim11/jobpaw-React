import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { createSlug } from "../Menjobs/Jobfrom";
import { tenderItems } from "../Menhomeone/Projectone";
import Breadcrumb from "../Breadcrumb/Main";

const TenderDetails = () => {
  const { id } = useParams();
  const [tender, setTender] = useState(null);

  useEffect(() => {
    const selectedTender = tenderItems.find(
      (singleTender) => createSlug(singleTender.title) === id
    );

    setTender(selectedTender);
  }, [id]);

  if (!tender) {
    return <div>Loading...</div>;
  }

  console.log(tender);
  return (
    <div>
      <Breadcrumb subtitle="Home / Tenders" title={tender.title} />
      <div className="my-5 container">
        <div className="sec-title text-center ">
          <h2 className="sec-title__tagline">{tender.title}</h2>
        </div>
        <p>
          <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
          {tender.description}
        </p>
        <div>
          <p>
            <span style={{ fontWeight: "bold" }}>Company :</span> {tender.organization}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Deadline:</span> {tender.deadline}
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

export default TenderDetails;
