import React from 'react';
import Projects from '../components/Projects';
import Query from '../components/query';
import PROJECTS_QUERY from '../apollo/queries/project/projects';

const Home = () => (
  <div>
    <Query query={PROJECTS_QUERY}>{({ data: { projects } }) => <Projects projects={projects} />}</Query>
  </div>
);

export default Home;
