import React from 'react';
import Projects from '../components/Projects';
import Query from '../components/query';
import PROJECTS_QUERY from '../apollo/queries/project/projects';

const Home = () => (
  <div className="text-light ">
    <h1 className="md:text-xl lg:text-2xl text-icon font-medium mb-12">Take a look at these.</h1>
    <Query query={PROJECTS_QUERY}>{({ data: { projects } }) => <Projects projects={projects} />}</Query>
  </div>
);

export default Home;
