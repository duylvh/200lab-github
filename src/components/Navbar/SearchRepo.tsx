import { AutoComplete } from "antd";

function SearchRepo() {
  return (
    <AutoComplete
      options={[]}
      placeholder="Search or jump to..."
      className="min-w-[200px] focus-within:!min-w-[300px] ease-in-out duration-300"
    />
  );
}

export default SearchRepo;
