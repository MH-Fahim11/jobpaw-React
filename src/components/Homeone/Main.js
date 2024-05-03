import React from "react";
import Sliderone from "../Menhomeone/Sliderone";
import About from "../Menhomeone/About";
import Funfact from "../Menhomeone/Funfact";
import Service from "../Menhomeone/Service";
import Projectone from "../Menhomeone/Projectone";
import Blog from "../Menhomeone/Blog";
import Seminer from "../Menhomeone/Seminer";
import Client from "../Menhomeone/Client";
import Whychoose2 from "../Menabout/Whychoose2";

function Main() {
  return (
    <>
      <div className="page-wrapper">
        {/* <Header /> */}
        <Sliderone />
        <Funfact />
        <Service />
        <Projectone />
        <Seminer />
        <Blog />
        <Whychoose2 />
        <Client />
      </div>
    </>
  );
}

export default Main;
