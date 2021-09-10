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
    <main className="container">
      <div className="row">
        <div className="col">
          <h2 className="p-3 text-center">Pop Art</h2>
          {albumsPop &&
            albumsPop.map((album) => (
              <div key={album._id} className="col-12">
                <div className="card mb-3">
                  <div className="card-header bg-dark text-light p-2 m-0 text-center">
                    {album.name}
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center p-4">
                    <h5>{album.artist}</h5>
                    <p>{album.year}</p>
                    <img alt="" src={album.image} width="200"></img>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="col">
          <h2 className="p-3 text-center">Contemporary</h2>
          {albumsContemporary &&
            albumsContemporary.map((album) => (
              <div key={album._id} className="col-12">
                <div className="card mb-3">
                  <div className="card-header bg-dark text-light p-2 m-0 text-center">
                    {album.name}
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center p-4">
                  <h5>{album.artist}</h5>
                  <p>{album.year}</p>
                  <img alt="" src={album.image} width="200"></img>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="col">
          <h2 className="p-3 text-center">Abstract</h2>
          {albumsAbstract &&
            albumsAbstract.map((album) => (
              <div key={album._id} className="col-12">
                <div className="card mb-3">
                  <div className="card-header bg-dark text-light p-2 m-0 text-center">
                    {album.name}
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center p-4">
                  <h5>{album.artist}</h5>
                  <p>{album.year}</p>
                  <img alt="" src={album.image} width="200"></img>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="col">
          <h2 className="p-3 text-center">Surrealism</h2>
          {albumsSurrealism &&
            albumsSurrealism.map((album) => (
              <div key={album._id} className="col-12">
                <div className="card mb-3">
                  <div className="card-header bg-dark text-light p-2 m-0 text-center">
                    {album.name}
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center p-4">
                  <h5>{album.artist}</h5>
                  <p>{album.year}</p>
                  <img alt="" src={album.image} width="200"></img>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
