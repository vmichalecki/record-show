import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_ALBUM_GENRES } from "../utils/queries";

const Home = () => {
  // have 4 columns of genres, repeat lines 9 and 11 four times for QUERY_ALBUM_GENRES

   const { data: dataPop } = useQuery(QUERY_ALBUM_GENRES, {
    variables: { genreId: "6137fd6261ec664eb85930c9" },
  });
  const { data: dataContemporary } = useQuery(QUERY_ALBUM_GENRES, {
    variables: { genreId: "6137fd6261ec664eb85930ca" },
  });
  const { data: dataAbstract } = useQuery(QUERY_ALBUM_GENRES, {
    variables: { genreId: "6137fd6261ec664eb85930cc" },
  });
  const { data: dataSurrealism } = useQuery(QUERY_ALBUM_GENRES, {
    variables: { genreId: "6137fd6261ec664eb85930cb" },
  });

  const albumsPop = dataPop?.albumsByGenre || [];
  const albumsContemporary = dataContemporary?.albumsByGenre || [];
  const albumsAbstract = dataAbstract?.albumsByGenre || [];
  const albumsSurrealism = dataSurrealism?.albumsByGenre || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {albumsPop &&
            albumsPop.map((album) => (
              <div key={album._id} className="col-12 col-xl-6">
                <div className="card mb-3">
                  <h4 className="card-header bg-dark text-light p-2 m-0">
                    {album.name}
                  </h4>
                  <h5>{album.artist}</h5>
                  <p>{album.year}</p>
                  <img alt="" src={album.image} width="200"></img>
                  <p>{album.genre.name}</p>
                </div>
              </div>
            ))}
        </div>

        <div className="col-12 col-md-10 my-3">
          {albumsContemporary &&
            albumsContemporary.map((album) => (
              <div key={album._id} className="col-12 col-xl-6">
                <div className="card mb-3">
                  <h4 className="card-header bg-dark text-light p-2 m-0">
                    {album.name}
                  </h4>
                  <h5>{album.artist}</h5>
                  <p>{album.year}</p>
                  <img alt="" src={album.image} width="200"></img>
                  <p>{album.genre.name}</p>
                </div>
              </div>
            ))}
        </div>

        <div className="col-12 col-md-10 my-3">
          {albumsAbstract &&
            albumsAbstract.map((album) => (
              <div key={album._id} className="col-12 col-xl-6">
                <div className="card mb-3">
                  <h4 className="card-header bg-dark text-light p-2 m-0">
                    {album.name}
                  </h4>
                  <h5>{album.artist}</h5>
                  <p>{album.year}</p>
                  <img alt="" src={album.image} width="200"></img>
                  <p>{album.genre.name}</p>
                </div>
              </div>
            ))}
        </div>

        <div className="col-12 col-md-10 my-3">
          {albumsSurrealism &&
            albumsSurrealism.map((album) => (
              <div key={album._id} className="col-12 col-xl-6">
                <div className="card mb-3">
                  <h4 className="card-header bg-dark text-light p-2 m-0">
                    {album.name}
                  </h4>
                  <h5>{album.artist}</h5>
                  <p>{album.year}</p>
                  <img alt="" src={album.image} width="200"></img>
                  <p>{album.genre.name}</p>
                </div>
              </div>
            ))}
        </div>
        <h1>IS THIS THING ON?</h1>
      </div>
    </main>
  );
};

export default Home;
