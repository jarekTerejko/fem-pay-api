import React from "react";
import ContactMain from "../Components/ContactMain";
import SiteHeader from "../Components/SiteHeader";
import Question  from "../Components/Question";
import Footer from "../Components/Footer";

const Contact = () => {
  const title = "Submit a help request and we’ll get in touch shortly.";

  return (
    <>
      <SiteHeader title={title} />
      <ContactMain />
      <Question />
      <Footer />
    </>
  );
};

export default Contact;
