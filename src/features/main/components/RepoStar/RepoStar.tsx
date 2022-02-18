import clsx from "clsx";
import { useMutation, useQuery } from "@apollo/client";
import { StarOutlined } from "@ant-design/icons";
import RepoAction from "../RepoAction";
import {
  GetRepoStarDocument,
  AddRepoStarDocument,
  RemoveRepoStarDocument,
} from "./repo-star.gql.generated";

const formatter = new Intl.NumberFormat("en", { notation: "compact" });

const RepoStar = () => {
  const { data, loading } = useQuery(GetRepoStarDocument);
  const [addStar, { loading: addLoading }] = useMutation(AddRepoStarDocument);
  const [removeStar, { loading: removeLoading }] = useMutation(RemoveRepoStarDocument);

  const title = data?.repository?.viewerHasStarred ? "Starred" : "Star";
  const isLoading = loading || addLoading || removeLoading;
  const actionCount = data?.repository?.stargazerCount;

  const toggleStar = () => {
    if (!data?.repository) {
      return;
    }

    const { id, viewerHasStarred } = data.repository;

    const method = viewerHasStarred ? removeStar : addStar;

    method({ variables: { starrableId: id } });
  };

  return (
    <RepoAction
      disabled={isLoading}
      loading={isLoading}
      actionTitle={title}
      actionCount={actionCount}
      formatNumber={formatter.format}
      icon={
        <StarOutlined
          className={clsx("!leading-[0]", {
            "text-yellow-400": data?.repository?.viewerHasStarred,
          })}
        />
      }
      onClick={toggleStar}
    />
  );
};

export default RepoStar;
