const PROJECTS_QUERY = `
  {
    projects(sort:"publish_date:desc") {
      id
      title
      slug
      publish_date
      number
      excerpt
      image {
        url
        caption
        alternativeText
      }
    }
  }
`;

export default PROJECTS_QUERY;
