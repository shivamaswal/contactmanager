import react from "react";
import React from "react";
import cheems from"./images/cheems2.jpg"
import { BrowserRouter as Router,Link } from "react-router-dom";

const ContactDetail = (props) =>{
        const{name,email}=props.location.state.contact;
    return(
        <div className="ui main">
            <div className="ui card centered">
                <div className="image">
                <img src={cheems} alt="ERROR"  />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                <button className="ui button blue center">Back To Contact List</button>
                </Link>
            </div>
        </div>
    );

}
export default ContactDetail;