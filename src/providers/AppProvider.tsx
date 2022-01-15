import * as React from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "../libs/apollo";
import MainLayout from "../components/Layout/MainLayout";

const AppProvider: React.FC = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <MainLayout>{children}</MainLayout>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default AppProvider;
