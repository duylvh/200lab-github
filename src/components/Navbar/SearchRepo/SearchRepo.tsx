import * as React from "react";
import get from "lodash/get";
import { AutoComplete } from "antd";
import { useLazyQuery } from "@apollo/client";
import { SearchReposDocument, SearchReposQuery } from "./search-repo.gql.generated";
import { SearchType } from "@/generated/github";
import { repoState } from "@/local-state";

type TSearchRepo = NonNullable<SearchReposQuery["search"]["edges"]>[0];

const DEFAULT_REPO = "react-router";

function SearchRepo() {
  const delay = React.useRef<NodeJS.Timeout>();
  const searchRef = React.useRef<any>();
  const [searchRepos, { data }] = useLazyQuery<SearchReposQuery>(SearchReposDocument, {});

  const handleSearch = (value: string) => {
    if (delay.current) {
      clearTimeout(delay.current);
    }

    delay.current = setTimeout(() => {
      searchRepos({
        variables: {
          query: value,
          type: SearchType.REPOSITORY,
          first: 20,
        },
      });
    }, 350);
  };

  const handleSelect = (value: string) => {
    const repo = data?.search?.edges?.find(
      (item) => get(item, "node.nameWithOwner", "") === value
    )?.node;

    if (!repo || !("id" in repo)) {
      repoState(null);
      return;
    }

    const [owner, name] = repo.nameWithOwner.split("/");

    repoState({
      id: repo.id,
      owner: owner,
      name: name,
    });
  };

  const options = data?.search.edges
    ?.map((item) => {
      if (item?.node && "id" in item.node) {
        return { label: item.node.nameWithOwner, value: item.node.nameWithOwner };
      }

      return {};
    })
    .filter((option) => Object.keys(option).length);

  return (
    <AutoComplete
      ref={searchRef}
      options={options}
      onSearch={handleSearch}
      onSelect={handleSelect}
      placeholder="Search or jump to..."
      className="min-w-[200px] focus-within:!min-w-[300px] ease-in-out duration-300"
      dropdownMatchSelectWidth={300}
    />
  );
}

export default SearchRepo;
