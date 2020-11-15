import React from "react";
import AboutMain from "../Components/AboutMain";
import SiteHeader from "../Components/SiteHeader";

const Contact = () => {
  const title = "Submit a help request and we’ll get in touch shortly.";

  return (
    <>
      <SiteHeader title={title} />
      <AboutMain />
    </>
  );
};

export default Contact;
