// eslint-disable-next-line
import React, { useState } from "react";
import "./style.scss";
import Firebase from "../../firebase";
import { useHistory } from "react-router-dom";
import Swipe from "../Swipe";

interface ProfileProps {
  auth: any;
  onClick: any;
}

export default function ChangeProfileData({
  auth,
  onClick
}: ProfileProps) {
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validPicURL, setValidity] = useState(false);

  const query = new URLSearchParams(window.location.search);
  const varToChange = query.get('v')
  
  
  let history = useHistory();

  let updateEmail = function(){
    var user = Firebase.auth.currentUser;

    if(user){//user exists
      user.updateEmail(email)
          .then(() => {//update email
            alert("Your Email has been changed!");
            Firebase.auth.signOut().then(() => {
              auth(false);//set auth to false
              history.replace("/Events-Board/LogIn");
            })//sign out
            .catch(function (error) {
              // An error happened.
              alert(error.code);
              alert(error.message);
            });
          }).catch(function (error){
            alert(error.code);
            alert(error.message);//something happened

            if(error.code === "auth/requires-recent-login")//user has been logged in for too long relog
            {
              Firebase.auth.signOut().then(() => {
                auth(false);//set auth to false
                history.replace("/Events-Board/LogIn");
              })//sign out
              .catch(function (error) {
                // An error happened.
                alert(error.code);
                alert(error.message);
              });
            }
          })
    }
  }

  let updatePhotoURL = function(){
    var user = Firebase.auth.currentUser;

    if(user && validPicURL){//user exists and photoURL is valid
      user.updateProfile({photoURL : photoURL})//update it
        .then(() => {
          alert("Your Picture has been updated!")
          history.replace("/Events-Board");//bring to main no reason to relog
        }).catch(function (error){//something happened
          alert(error.code);
          alert(error.message);
        })
    }
  }

  let updatePassword = function(){
    var user = Firebase.auth.currentUser;

    if(user){//user exists
      if(password === confirmPassword)//password and confirm_password fields have the same value
      {
        user.updatePassword(password)
        .then(() => {//update and logout
          alert("Your Password has been changed!");
          Firebase.auth.signOut().then(() => {
              auth(false);//set auth to false
              history.replace("/Events-Board/LogIn");
            })//sign out
            .catch(function (error) {
              // An error happened.
              alert(error.code);
              alert(error.message);
            });
        }).catch(function (error){//something happened
          alert(error.code);
          alert(error.message);

          if(error.code === "auth/requires-recent-login")//user has been logged in for too long relog
          {
            Firebase.auth.signOut();
            auth(false);
            history.replace("/Events-Board/LogIn");
          }
        })
      }
      else{//adding this ugly if just for this message
        alert("Both fields MUST match!");
      }
    }
  }

  let htmlToRender;
  if(varToChange === "Email")//check if email prep form
  {
    htmlToRender =
    <div>
      <Swipe
          touchEnd={() => {
            onClick(true);
          }}
      ></Swipe>
      <a className="sbbtn" onClick={() => onClick(true)}></a>
      <form className="emailform">
        <h1>Please enter your new Email.</h1>
          <label htmlFor="email">E-mail:</label>
          <input
            aria-required="true"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        <a className="btnmain" onClick={updateEmail}>
          Update Email
        </a>
      </form>
    </div>
    
  }

  if(varToChange === "Photo")//check if photo and prep form
  {
      htmlToRender = 
      <div>
        <Swipe
          touchEnd={() => {
            onClick(true);
          }}
        ></Swipe>
        <a className="sbbtn" onClick={() => onClick(true)}></a>
        <form className="photoform">
        <label htmlFor="photo">Photo URL:</label>
          <input
            aria-required="true"
            type="input"
            name="photo"
            id="photo"
            onChange={(e) => setPhotoURL(e.target.value)}
          ></input>
        <div>
          <p>Live Preview</p>
          <br></br>
          <div className="imgPreview">
           <img src={photoURL} alt="The link provided is not valid" onLoad={() => setValidity(true)} onError={() => setValidity(false)} ></img>
          </div>
        </div>
        <a className="btnmain" onClick={updatePhotoURL} >
          Update Photo
        </a>
        </form>
      </div>
      
  }

  if(varToChange === "Password")//check if password and prep form
  {
    htmlToRender =
    <div>
      <Swipe
          touchEnd={() => {
            onClick(true);
          }}
      ></Swipe>
      <a className="sbbtn" onClick={() => onClick(true)}></a>
      <form className="passwordform">
      <h1>Please enter your new Password.</h1>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          aria-required="true"
          pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <label htmlFor="password">Confirm Password:</label>
        <input
          aria-required="true"
          pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
          type="password"
          name="confirm_password"
          id="confirm_password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
      </div>
      <a className="btnmain" onClick={updatePassword}>
        Update Password
      </a>
      </form>
    </div>
    
  }

  

  return (
      <main >
        {/* render needed form */}
        {htmlToRender} 
      </main>
  );
}
