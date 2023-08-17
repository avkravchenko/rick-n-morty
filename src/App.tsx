import React from "react";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Search from "./components/sidebar/search-bar/Search";
import Header from "./components/sidebar/header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Results from "./components/results/Results";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Header />
        <Search />
        <SideBar />
        <Results />
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
