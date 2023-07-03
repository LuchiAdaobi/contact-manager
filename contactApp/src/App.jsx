import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

const LOCAL_STORAGE_KEY = "contact";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  };
  useEffect(() => {
    const retrievedContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );

    if (retrievedContacts) {
      setContacts(retrievedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </>
  );
}

export default App;
