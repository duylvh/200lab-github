import * as React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppProvider from "./providers/AppProvider";
import Main from "./features/main";

const Home = React.lazy(() => import("./features/home"));
const PullRequest = React.lazy(() => import("./features/pull-request"));

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/pulls" element={<PullRequest />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
