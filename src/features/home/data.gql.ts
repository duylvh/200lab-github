import { gql } from "@apollo/client";

export default gql`
  query GetReadme($name: String!, $owner: String!) {
    repo @client {
      name @export(as: "name")
      owner @export(as: "owner")
    }
    repository(name: $name, owner: $owner) {
      id
      object(expression: "master:README.md") {
        ... on Blob {
          text
        }
      }
    }
  }
`;
