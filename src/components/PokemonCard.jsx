import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonCard = ({ name, url }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(url);
        setImage(response.data.sprites?.front_default || null);
      } catch (error) {
        console.error(`Failed to fetch image for ${name}:`, error.message);
      }
    };

    fetchImage();
  }, [url, name]);

  return (
    <div className="border p-3 rounded shadow hover:shadow-lg transition-all flex flex-col items-center">
      <h3 className="font-bold capitalize text-center mb-2">{name}</h3>
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-20 h-20 object-contain mb-2"
        />
      ) : (
        <p className="text-xs text-gray-500">Loading image...</p>
      )}
      <a
        className="text-sm text-blue-500 hover:underline"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        View Details
      </a>
    </div>
  );
};

export default PokemonCard;