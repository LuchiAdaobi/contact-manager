import React from "react";
import user from '../assets/user.png'

export default function ContactCard(props){
    const {id, name, email} = props.contact;
    return (
      <div className="item" key={id}>
          <hr />
        <div className="content">
        <img src={user} alt="user" className="ui avatar image" />
          <div className="header">{name}</div>

          <div>{email}</div>
        </div>
        <i className="trash alternate outline icon" style={{color:'red', marginTop:'.5rem'}}></i>
      </div>
    );
}