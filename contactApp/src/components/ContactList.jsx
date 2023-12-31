import React from "react";
import ContactCard from "./ContactCard";

export default function ContactList(props) {
  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} />;
  });

  return <div className="ui ceiled list">{renderContactList}</div>;
}
