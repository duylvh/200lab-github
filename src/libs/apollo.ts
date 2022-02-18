import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
import { repoState } from "@/local-state";

const httpLink = new HttpLink({ uri: "https://api.github.com/graphql" });
const apolloLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: { Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}` },
  });

  return forward(operation);
});

const cache = new InMemoryCache({
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
  link: apolloLink.concat(httpLink),
  cache,
});
