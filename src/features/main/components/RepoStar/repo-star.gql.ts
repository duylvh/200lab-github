import { gql } from "@apollo/client";

export default gql`
  fragment StarrableFragment on Starrable {
    id
    stargazerCount
    viewerHasStarred
  }
  query GetRepoStar($name: String!, $owner: String!) {
    repo @client {
      name @export(as: "name")
      owner @export(as: "owner")
    }
    repository(name: $name, owner: $owner) {
      ...StarrableFragment
    }
  }
  mutation AddRepoStar($starrableId: ID!) {
    addStar(input: { starrableId: $starrableId }) {
      starrable {
        ...StarrableFragment
      }
    }
  }
  mutation RemoveRepoStar($starrableId: ID!) {
    removeStar(input: { starrableId: $starrableId }) {
      starrable {
        ...StarrableFragment
      }
    }
  }
`;
