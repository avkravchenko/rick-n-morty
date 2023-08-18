import React from "react";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Search from "./components/sidebar/search-bar/Search";
import Header from "./components/sidebar/header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Results from "./components/results/Results";
import { Routes, Route } from "react-router-dom";
import Episodes from "./components/episodes/Episodes";

const queryClient = new QueryClient();

const Characters: React.FC = () => {
  return (
    <>
      <SideBar />
      <Results />
    </>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Header />
        <Search />
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/episodes" element={<Episodes />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
