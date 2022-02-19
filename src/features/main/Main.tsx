import * as React from "react";
import { Outlet } from "react-router-dom";
import { Empty } from "antd";
import Loading from "@/components/Elements/Loading";
import RepoHeader from "./components/RepoHeader";
import RepoNav from "./components/RepoNav";
import RepoStar from "./components/RepoStar";
import RepoWatch from "./components/RepoWatch";
import MainLayout from "@/components/Layout/MainLayout";
import { useReactiveVar } from "@apollo/client";
import { repoState } from "@/local-state";

function Main() {
  const data = useReactiveVar(repoState);

  if (!data) {
    return (
      <MainLayout>
        <div className="h-full flex-auto grid place-items-center">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No Repository" />
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="sticky top-0 bg-black">
        <RepoHeader
          title={`${data.owner}/${data.name}`}
          actions={
            <div className="inline-flex gap-4">
              <RepoWatch />
              <RepoStar />
            </div>
          }
        />
        <RepoNav />
      </div>
      <React.Suspense fallback={<Loading />}>
        <Outlet />
      </React.Suspense>
    </MainLayout>
  );
}

export default Main;
