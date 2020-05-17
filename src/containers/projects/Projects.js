import React, { useState, useEffect } from "react";
import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { openSource, socialMediaLinks } from "../../portfolio";
import { Fade } from "react-reveal";
import api from '../../services/api';

export default function Projects() {
  const [repo, setrepo] = useState([]);

  useEffect(() => {
    getRepoData();
  }, []);

  async function getRepoData() {
    const response = await api.get(`/users/${openSource.githubUserName}/repos?sort=updated`);
    setrepo(response.data.slice(0,6));
  }

  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="opensource">
      <h1 className="project-title">Projetos Recentes</h1>
      <div className="repo-cards-div-main">
        {repo.map((repositorie, i) => {
          return <GithubRepoCard repo={repositorie} key={i} />;
        })}
      </div>
      <Button text={"Mais Projetos"} className="project-button" href={socialMediaLinks.github} newTab={true} />
    </div>
    </Fade>
  );
}
