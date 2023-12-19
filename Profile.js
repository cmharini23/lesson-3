import React from "react";
import { ReactDOM } from "react";
import PropTypes from 'prop-types';
function Profile(props){
    return(
        <div>
            <label>Name</label>
            <span>{props.bio.name}</span>
            <label>Email</label>
            <span>{props.bio.email}</span>
            <label>Phone</label>
            <span>{props.bio.phone}</span>
            <label>Age</label>
            <span>{props.bio.age}</span>
            <label>Address</label>
            <span>{props.bio.address}</span>


        </div>
    )
   
}

export default Profile;