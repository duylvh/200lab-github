import { from, ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
import { repoState } from "@/local-state";
import generatedTypes from '@/generated/github'

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GITHUB_GQL_API,
});

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: { Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}` },
  });

  return forward(operation);
});

const cache = new InMemoryCache({
  possibleTypes: generatedTypes.possibleTypes,
  typePolicies: {
    Query: {
      fields: {
        repo: {
          read() {
            return repoState();
          },
        },
      },
    },
  },
});

export const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache,
});
