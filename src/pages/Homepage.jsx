import React from "react";

import Layout from "../Layout";
import Hero from "../components/Hero/Hero";
import CallToAction from "../components/CallToAction/CallToAction";

const Homepage = () => {
  return (
    <Layout>
      <Hero />
      <CallToAction />
    </Layout>
  );
};

export default Homepage;
