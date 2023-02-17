import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import colors from '../../utils/styles/colors';


const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ProjectBox = styled.div`
  height: 500px;
  width: 200px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  background-color: ${colors.secondary};


  h2 {
    color: ${colors.background};
  }
  p {
    color: ${colors.quaternary};
  }
  a {
    color : ${colors.quaternary};
    text-decoration: none;
    transition: 0.3s;
    &:hover {
      color: ${colors.background};
      font-weight: bold;
      transition: 0.3s;
    }

  }
`;



const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/MMMatth/repos?sort=updated&direction=desc')
      .then(response => {
        // Filter only the pinned repositories
        const pinnedRepos = response.data.filter(repo => repo.topics.includes("viewable"));
        // Limit to the first 6 pinned repositories
        const limitedRepos = pinnedRepos.slice(0, 6);

        setProjects(limitedRepos);

        // console.log('GitHub projects:', projects);
      })
      .catch(error => {
        console.error('Error fetching GitHub projects:', error);
      });
  }, []);

  return (
    <div>
      <ProjectContainer>
        {projects.map(project => (
          <ProjectBox
            key={project.id}
          >          
          <h2>{project.name.replace(/-/g," ")}</h2>
            <p>{project.description}</p>
            <a href={project.html_url}>View on GitHub</a>
          </ProjectBox>
        ))}
      </ProjectContainer>
    </div>
  );
};

export default Project;
