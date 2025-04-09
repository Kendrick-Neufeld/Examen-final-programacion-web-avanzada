"use client";
import React from 'react';
import './AnimeCard.css';

interface Props {
  anime: any;
  onClick: () => void;
}

const AnimeCard: React.FC<Props> = ({ anime, onClick }) => (
  <div className="pTbox" onClick={onClick}>
    <img className="picture" src={anime.images.jpg.large_image_url} alt={anime.title} />
    <div className="titlebox">{anime.title}</div>
  </div>
);

export default AnimeCard;
