import * as React from "react";
import get from "lodash/get";
import debounce from "lodash/debounce";
import { AutoComplete } from "antd";
import { BaseSelectRef } from "rc-select";
import { useLazyQuery } from "@apollo/client";
import { SearchReposDocument } from "./search-repo.gql.generated";
import { SearchType } from "@/generated/github";
import { repoState } from "@/local-state";

function SearchRepo() {
  const searchRef = React.useRef<BaseSelectRef | null>(null);
  const [searchRepos, { data }] = useLazyQuery(SearchReposDocument);

  const handleSearch = debounce((value: string) => {
    searchRepos({
      variables: {
        query: value,
        type: SearchType.REPOSITORY,
        first: 20,
      },
    });
  }, 500);

  const handleSelect = (value: string) => {
    const repo = data?.search?.edges?.find(
      (item) => get(item, "node.nameWithOwner") === value
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

    if (searchRef.current) {
      searchRef.current.blur();
    }
  };

  const options = data?.search.edges
    ?.filter((edge) => edge?.node && "id" in edge.node)
    ?.map((item) => {
      if (item?.node && "id" in item.node) {
        return { label: item.node.nameWithOwner, value: item.node.nameWithOwner };
      }

      return {};
    });

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
