import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { createSlug } from "../Menjobs/Jobfrom";
import Breadcrumb from "../Breadcrumb/Main";
import { researchPapers } from "../Menhomeone/Blog";

const SignleResearchPaper = () => {
  const { paperId } = useParams();
  const [paper, setPaper] = useState(null);

  useEffect(() => {
    const selectedPaper = researchPapers.find(
      (singlePaper) => createSlug(singlePaper.title) === paperId
    );

    setPaper(selectedPaper);
  }, [paperId]);

  if (!paper) {
    return <div>Loading...</div>;
  }

  console.log(paper);
  return (
    <div>
      <Breadcrumb
        subtitle="Home / Professionnels / Research paper"
        title={paper?.title}
      />
      <div className="container my-5">
        <h2 className="text-center">{paper?.title}</h2>
        <p>
          <strong>Authors:</strong> {paper.authors.join(", ")}
        </p>
        <p>
          <strong>Publication Date:</strong> {paper.publicationDate}
        </p>
        <p>
          <strong>Journal:</strong> {paper.journal}
        </p>
        <div>
          <p>
            <strong>Abstract:</strong> {paper.abstract}
          </p>
          <p>
            <strong>Keywords:</strong> {paper.keywords.join(", ")}
          </p>
          <p>
            <Link target="_blank" to={paper.link}>Download paper</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignleResearchPaper;
