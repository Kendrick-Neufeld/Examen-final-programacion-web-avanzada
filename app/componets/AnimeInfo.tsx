"use client";
import React from 'react';
import './AnimeInfo.css';

interface Props {
  anime: any;
}

const AnimeInfo: React.FC<Props> = ({ anime }) => (
  <div id="information">
    <div>
      <h1>Synopsis:</h1>
      <div className="tnborder">{anime.synopsis}</div>
      <h1>Information:</h1>
      <div className="tnborder" id="information2">
        <p>Type: {anime.type}</p>
        <p>Episodes: {anime.episodes}</p>
        <p>Status: {anime.status}</p>
        <p>Aired: from {anime.aired.from} to {anime.aired.to}</p>
        <p>Source: {anime.source}</p>
        <p>Genres: {anime.genres.map((g: any) => g.name).join(', ')}</p>
        <p>Themes: {anime.themes.map((t: any) => t.name).join(', ')}</p>
        <p>Demographics: {anime.demographics.map((d: any) => d.name).join(', ')}</p>
        <p>Duration: {anime.duration}</p>
        <p>Rating: {anime.rating}</p>
        <p>Year: {anime.year}</p>
        <p>Season: {anime.season}</p>
      </div>
    </div>
  </div>
);

export default AnimeInfo;
