import { gql } from "@apollo/client";

export default gql`
  query SearchRepos($query: String!, $type: SearchType!, $first: Int) {
    search(query: $query, type: $type, first: $first) {
      edges {
        node {
          ... on Repository {
            id
            name
            nameWithOwner
          }
          ... on Starrable {
            stargazerCount
          }
        }
      }
    }
  }
`;
