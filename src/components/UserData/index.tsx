// eslint-disable-next-line
import React from "react";
import "./style.scss";


interface UserDataProps {
    userData : any;
}


export default function UserData({userData} : UserDataProps) {
    return(   
            <div>
                    <p>Display name: {userData?.displayName}</p>
                    <br></br>
                    <p>Email: {userData?.email}</p>
                    <br></br>
                    <p>PhotoUrl: {userData?.photoURL}</p>
                    <br></br>
                    {userData?.emailVerified ? <p>Your Email is verified!</p> : <p>Your Email has NOT been verified. Please verify it.</p>}
                    <br></br>
            </div>
    );
}