import React from "react";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Search from "./components/search-bar/Search";
import Header from "./components/header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Results from "./components/results/Results";
import { Routes, Route } from "react-router-dom";
import Episodes from "./components/episodes/Episodes";
import CharacterDetails from "./components/character-details/CharacterDetails";
import EpisodeDetails from "./components/episode-details/EpisodeDetails";
import Locations from "./components/locations/Locations";
import LocationDetails from "./components/location-details/LocationDetails";
import WelcomePage from "./components/welcome-page/WelcomePage";
import NotFound from "./components/not-found/NotFound";

const queryClient = new QueryClient();

const Characters: React.FC = () => {
  return (
    <>
      <Search />
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
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterDetails />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episodes/:id" element={<EpisodeDetails />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:id" element={<LocationDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </div>
    </QueryClientProvider>
  );
}

export default App;
