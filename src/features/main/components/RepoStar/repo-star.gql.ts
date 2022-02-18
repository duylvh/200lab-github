import { gql } from "@apollo/client";

export default gql`
  query GetRepoStar($name: String!, $owner: String!) {
    repo @client {
      name @export(as: "name")
      owner @export(as: "owner")
    }
    repository(name: $name, owner: $owner) {
      id
      stargazerCount
      viewerHasStarred
    }
  }
  mutation AddRepoStar($starrableId: ID!) {
    addStar(input: { starrableId: $starrableId }) {
      starrable {
        id
        stargazerCount
        viewerHasStarred
      }
    }
  }
  mutation RemoveRepoStar($starrableId: ID!) {
    removeStar(input: { starrableId: $starrableId }) {
      starrable {
        id
        stargazerCount
        viewerHasStarred
      }
    }
  }
`;
