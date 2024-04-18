import React from "react";
import Jobfrom from "../Menjobs/Jobfrom";
import Breadcrumb from "../Breadcrumb/Main";

const FindJob = () => {
  return (
    <div>
      <Breadcrumb
        subtitle="Home / Professionals"
        title="Find Job"
      />
      <Jobfrom />
    </div>
  );
};

export default FindJob;
