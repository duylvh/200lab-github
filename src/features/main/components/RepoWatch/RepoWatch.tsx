import { useMutation, useQuery } from "@apollo/client";
import { EyeOutlined } from "@ant-design/icons";
import RepoAction from "../RepoAction";
import { GetRepoWatcherDocument, UpdateWatchDocument } from "./repo-watch.gql.generated";
import { SubscriptionState } from "@/generated/github";

const RepoWatch = () => {
  const { data, loading } = useQuery(GetRepoWatcherDocument);
  const [updateWatchState, { loading: updateLoading }] = useMutation(
    UpdateWatchDocument,
    {
      refetchQueries: [GetRepoWatcherDocument],
    }
  );

  const state = data?.repository?.viewerSubscription;
  const isSubcribed = state === SubscriptionState.SUBSCRIBED;
  const isLoading = loading || updateLoading;

  const handleUpdateWatchState = () => {
    if (!data?.repository) {
      return;
    }

    const { id } = data.repository;
    const nextState = isSubcribed
      ? SubscriptionState.UNSUBSCRIBED
      : SubscriptionState.SUBSCRIBED;

    updateWatchState({ variables: { state: nextState, id } });
  };

  return (
    <RepoAction
      disabled={isLoading}
      loading={isLoading}
      actionTitle={isSubcribed ? "Unwatch" : "Watch"}
      actionCount={data?.repository?.watchers.totalCount}
      icon={<EyeOutlined className="!leading-[0]" />}
      onClick={handleUpdateWatchState}
    />
  );
};

export default RepoWatch;
