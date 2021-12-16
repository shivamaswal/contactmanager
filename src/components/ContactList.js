import React from "react";
import ContactCard from "./ContactCard";
import {Link} from "react-router-dom";

const ContactList = (props) => {
    
    const removeContactHandler=(id)=>{
        props.getContactId(id); 
    };

    const renderContactList=props.contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} clickHandler={removeContactHandler} key={contact.id}></ContactCard>

        );
    })
    return(
        <div className="ui main centered">
            <h1 className="ui container center">Contact List</h1>
            <Link to="/add">
            <button className="ui button blue right">Add Contact</button>
            </Link>
            {renderContactList}
        </div>
    );
}
export default ContactList;