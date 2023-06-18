import PropTypes from "prop-types";
// import { useEffect, useState } from "react";
import { Gifitem } from "./GIfItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

        {
            isLoading && <h2>Cargando...</h2>
        }

      <div className="card-grid">
        {images.map((image) => (
          <Gifitem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
