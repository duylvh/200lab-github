import { gql } from "@apollo/client";

export default gql`
  query GetRepoWatcher($name: String!, $owner: String!) {
    repo @client {
      id
      name @export(as: "name")
      owner @export(as: "owner")
    }
    repository(name: $name, owner: $owner) {
      id
      viewerCanSubscribe
      viewerSubscription
      watchers {
        totalCount
      }
    }
  }
  mutation UpdateWatch($id: ID!, $state: SubscriptionState!) {
    updateSubscription(input: { state: $state, subscribableId: $id }) {
      subscribable {
        id
      }
    }
  }
`;
