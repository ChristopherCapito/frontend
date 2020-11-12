import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import Query from '../components/query';
import PROJECT_QUERY from '../apollo/queries/project/project';

const Project = () => {
  const router = useRouter();
  return (
    <Query query={PROJECT_QUERY} id={router.query.id}>
      {({ data: { project } }) => {
        const imageUrl =
          process.env.NODE_ENV !== 'development' ? project.image.url : process.env.API_URL + project.image.url;

        return (
          <div>
            <div id="banner" className="" data-src={imageUrl} data-srcset={imageUrl} data-uk-img>
              <h1>{project.title}</h1>
            </div>

            <div className="">
              <div className="">
                <ReactMarkdown source={project.content} />
                <p>
                  <Moment format="MMM Do YYYY">{project.published_at}</Moment>
                </p>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Project;
