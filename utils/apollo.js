import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import withApollo from 'next-with-apollo';
import possibleTypes from './possibleTypes.json';

// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
export default withApollo(
  // You can get headers and ctx (context) from the callback params
  // e.g. ({ headers, ctx, initialState })
  () =>
    new ApolloClient({
      link: new HttpLink({
        uri: `${process.env.API_URL}/graphql`,
        fetch,
      }),
      cache: new InMemoryCache({ possibleTypes }),
      //  rehydrate the cache using the initial data passed from the server:
      // .restore(initialState || {});
    })
);
