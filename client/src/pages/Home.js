import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_ALBUM } from "../utils/queries";

const Home = () => {
  const albumIds = [
    "6137c6c2dbe8d00b2090ec0f",
    "6137c6c2dbe8d00b2090ec10"
  ];
  const randomInt = Math.floor(Math.random() * 2)
  const randomAlbum = albumIds[randomInt]

  const { data } = useQuery(QUERY_ALBUM, { variables: { albumId: randomAlbum } });

  const album = data?.album || [];

  console.log(randomAlbum)

  return (
    <main>
      <div className="flex-row justify-center">

        <div className="col-12 col-md-10 my-3">

          {album &&
            <div key={album._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {album.name}</h4>
                <h5>{album.artist}</h5>
                <p>{album.year}</p>
                <img alt='' src={album.image} width='200'></img>
              </div>
            </div>

          }
          {/* only show voting buttons if user is logged in */}
          {/* on the click, save the selection to the result, use result mutation */}
        </div>
        <div>
          <input type="radio" id="popArt" name="drone" value="popArt"></input>
          <label for="popArt">Pop Art</label>
        </div>
        <div>
          <input type="radio" id="abstract" name="drone" value="abstract"></input>
          <label for="abstract">Abstract</label>
        </div>
        <div>
          <input type="radio" id="surrealism" name="drone" value="surrealism"></input>
          <label for="surrealism">Surrealism</label>
        </div>
        <div>
          <input type="radio" id="contemporary" name="drone" value="contemporary"></input>
          <label for="contemporary">Contemporary</label>
        </div>
      </div>
    </main>
  );
};

export default Home;
