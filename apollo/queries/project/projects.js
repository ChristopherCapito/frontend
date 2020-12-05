const PROJECTS_QUERY = `
  {
    projects {
      id
      title
      slug
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
