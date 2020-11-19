import React from 'react';
import PropTypes from 'prop-types';
import Card from './card';

const Projects = ({ projects }) => {
  const leftProjectsCount = Math.ceil(projects.length / 5);
  const leftProjects = projects.slice(0, leftProjectsCount);
  const rightProjects = projects.slice(leftProjectsCount, projects.length);

  return (
    <div>
      <div className="">
        <div>
          {leftProjects.map((project) => (
            <Card project={project} key={`project__${project.id}`} />
          ))}
        </div>
        <div>
          <div className="">
            {rightProjects.map((project) => (
              <Card project={project} key={`project__${project.id}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};
