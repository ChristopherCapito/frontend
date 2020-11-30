import { useQuery } from '@apollo/client';
import Card from '../components/card';
import PROJECTS_QUERY from '../apollo/queries/project/projects';
import { addApolloState, initializeApollo } from '../apollo/apolloClient';

export default function Portfolio() {
  const { data } = useQuery(PROJECTS_QUERY, {
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  const { projects } = data;

  const leftProjectsCount = Math.ceil(projects.length / 5);
  const leftProjects = projects.slice(0, leftProjectsCount);
  const rightProjects = projects.slice(leftProjectsCount, projects.length);

  return (
    <div className="text-light container mx-auto px-8">
      <h1 className="md:text-xl lg:text-2xl text-icon font-medium mb-12">Take a look at these.</h1>
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
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: PROJECTS_QUERY,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
}
