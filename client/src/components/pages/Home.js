import React from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";

const Home = () => {
  return (
    <div className="grid-2">
      {/* Contact Form */}
      <div>
        <ContactForm></ContactForm>
      </div>
      {/* Contacts + Filter component */}
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
