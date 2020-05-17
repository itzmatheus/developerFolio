import React, { useState, useEffect } from "react";
import GithubProfileCard from "../../components/githubProfileCard/GithubProfileCard";
import { openSource } from "../../portfolio";
import Contact from "../contact/Contact";
import api from '../../services/api';


export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }
  function getProfileData() {
    api.get("/users/"+openSource.githubUserName)
      .then(function(response){
            setProfileFunction(response.data);
    });
  }
  useEffect(() => {
    getProfileData();
  }, [getProfileData]);
  if (openSource.showGithubProfile === "true"){
    return ( <GithubProfileCard prof={prof} key={prof.id} /> );
  } else {
    return(<Contact />);
  }
}
