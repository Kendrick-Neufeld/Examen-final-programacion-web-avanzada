"use client";
import React, { useState, useRef } from "react";
import SearchBar from "./componets/SearchBar";
import AnimeCard from "./componets/AnimeCard";
import AnimeInfo from "./componets/AnimeInfo";

import "./App.css";

const App: React.FC = () => {
  const [animeList, setAnimeList] = useState<any[]>([]);
  const [selectedAnime, setSelectedAnime] = useState<any | null>(null);

  const handleSearch = async (query: string) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&sfw`);
    const data = await res.json();
    setAnimeList(data.data.slice(0, 4));
    setSelectedAnime(null);
  };

  const handleSelectAnime = (anime: any) => {
    setSelectedAnime(anime);
  };

  return (
    <div className="webmadewell">
      <header className="sample-header">
        <div className="sample-header-section">
          <h1>Welcome to Anime search Website</h1>
          <h2>Click on any of the anime You searched</h2>
        </div>
      </header>

      <main className="sample-section">
        <div className="search-bar-container">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div id="picsandtitle">
          {animeList.map((anime) => (
            <AnimeCard
              key={anime.mal_id}
              anime={anime}
              onClick={() => handleSelectAnime(anime)}
            />
          ))}
        </div>
        {selectedAnime && <AnimeInfo anime={selectedAnime} />}
      </main>
    </div>
  );
};

export default App;
