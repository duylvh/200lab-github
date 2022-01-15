import * as React from "react";
import { Outlet, useMatch } from "react-router-dom";
import { Empty } from "antd";
import Loading from "@/components/Elements/Loading";
import RepoHeader from "./components/RepoHeader";
import RepoNav from "./components/RepoNav";
import RepoStar from "./components/RepoStar";
import RepoWatch from "./components/RepoWatch";

function Home() {
  const isRoot = useMatch({
    path: "/",
    end: true,
  });

  // return (
  //   <div className="h-full flex-auto grid place-items-center">
  //     <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No Repository" />
  //   </div>
  // );

  return (
    <div className="h-full flex-auto">
      <RepoHeader
        title="asd"
        actions={
          <div className="inline-flex gap-4">
            <RepoWatch />
            <RepoStar />
          </div>
        }
      />
      <RepoNav />
      <div>asd</div>
      <React.Suspense fallback={<Loading />}>
        <Outlet />
      </React.Suspense>
    </div>
  );
}

export default Home;
