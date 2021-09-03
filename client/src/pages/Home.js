import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_ALBUM } from "../utils/queries";
import { randomInt } from "node:crypto";

const Home = () => {
  const albumIds = [
    //hard code every ID
  ];
  //const randomInt = formula for math.random to choose random id;
  const randomAlbum = albumIds[randomInt]

  const { data } = useQuery(QUERY_ALBUM, { variables: { albumId: randomAlbum } });

  const album = data?.album || [];

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

                {/* radio buttons of all genres for user to select */}
                {/* only show voting buttons if user is logged in */}
                {/* on the click, save the selection to the result, use result mutation */}
              </div>
            </div>
          }

        </div>
        <h1>IS THIS THING ON?</h1>
      </div>
    </main>
  );
};

export default Home;
