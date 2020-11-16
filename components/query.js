import React from 'react';
import { useQuery } from '@apollo/react-hooks';

// The useQuery hook is used to call the GraphQl API
const Query = ({ children, query, id }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id },
  });

  if (loading) return <p className="text-light">Loading...</p>;
  if (error) return <p className="text-light">Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;
