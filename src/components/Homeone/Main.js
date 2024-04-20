import React from "react";
import Sliderone from "../Menhomeone/Sliderone";
import About from "../Menhomeone/About";
import Funfact from "../Menhomeone/Funfact";
import Service from "../Menhomeone/Service";
import Projectone from "../Menhomeone/Projectone";
import Blog from "../Menhomeone/Blog";
import Seminer from "../Menhomeone/Seminer";
import Client from "../Menhomeone/Client";

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
        <Client />
        <Blog />
      </div>
    </>
  );
}

export default Main;
