import React from 'react';
import { useQuery } from '@apollo/react-hooks';

// The useQuery hook is used to call the GraphQl API
const Query = ({ children, query, id }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id },
  });

  if (loading) return <p className="text-light mt-12 container mx-auto px-8">Loading...</p>;
  if (error) return <p className="text-light mt-12 container mx-auto px-8">Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;
