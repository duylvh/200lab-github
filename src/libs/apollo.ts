import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({ uri: "https://api.github.com/graphql" });
const apolloLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: { Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}` },
  });

  return forward(operation);
});

export const client = new ApolloClient({
  link: apolloLink.concat(httpLink),
  cache: new InMemoryCache(),
});
