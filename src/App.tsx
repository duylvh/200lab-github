import * as React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppProvider from "./providers/AppProvider";
import Home from "./features/home";

const PullRequest = React.lazy(() => import("./features/pull-request"));

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/pull-request" element={<PullRequest />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
