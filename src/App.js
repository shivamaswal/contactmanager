import React ,{useState,useEffect} from "react";
import {BrowserRouter as Router,Route, Switch } from "react-router-dom";
import {uuid} from "uuidv4";
import "./App.css";
import Header from './components/Header';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import ContactDetail from './components/ContactDetail';

function App() {
  const LOCAL_CONTACTS_KEY="contacts";
  const [contacts,setContacts] = useState([]);

  const addContactHandler=(contact)=>{
    console.log(contact);
    setContacts([...contacts,{id:uuid(),...contact}]);
  }
  const removeContactHandler=(id)=>{
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  useEffect(()=>{
    const retriveContact=JSON.parse(localStorage.getItem(LOCAL_CONTACTS_KEY));
    if(retriveContact) setContacts(retriveContact); 
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_CONTACTS_KEY,JSON.stringify(contacts)); 
  },[contacts]);

  return (
    <div className="ui container">
      <Router>
      <Header/>
      <Switch>
    <Route path="/" exact render={(props)=>(
      <ContactList {...props} contacts = {contacts} getContactId = {removeContactHandler}
      />
      )}
      />
      <Route path="/add"  render={(props)=>(
        <AddContact {...props} addContactHandler = {addContactHandler}/>
        )}
      />
      <Route path="/contact/:id" component={ContactDetail}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
