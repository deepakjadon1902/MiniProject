import React from "react";

import Notice from "./Notice";
import Categories from "./Categories";
import HeroBanner from "../../assets/play-your-own-way-web.avif";

const Hero = () => {
  return (
    <>
      <Notice />
      <Categories />
      <img src={HeroBanner} alt="Hero Banner" />
    </>
  );
};

export default Hero;
