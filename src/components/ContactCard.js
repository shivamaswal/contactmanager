import React from "react";
import cheems from"./images/cheems.jpg"
import { BrowserRouter as Router,Link } from "react-router-dom";

const ContactCard = (props) =>{
    const{id,name,email} = props.contact;
    return(
        <div className="item">
            <img src={cheems} alt="ERROR" className="ui avatar image" />
        <div className="content">
            <Router>
            <Link to={{pathname:'/contact/${id}',state:{contact:props.contact}}}>
            <div className="header">
                {name}
                </div>
             <div>{email}</div>
             </Link>
             <i className="trash alternate outline icon" style={{color:"red",marginTop:"7px"}} 
             onClick={()=> props.clickHandler(id)}></i>   
             </Router>
            </div>
        </div>
    );

}
export default ContactCard;