import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_ALBUMS, QUERY_GENRES } from "../utils/queries";

const Home = () => {
    const { data } = useQuery(QUERY_ALBUMS);

    const albums = data?.albums || [];

    return (
        <main>
            <div className="flex-row justify-center">

                <div className="col-12 col-md-10 my-3">

                    {albums &&
                        albums.map((album) => (
                            <div key={album._id} className="col-12 col-xl-6">
                                <div className="card mb-3">
                                    <h4 className="card-header bg-dark text-light p-2 m-0">
                                        {album.name}</h4>
                                    <h5>{album.artist}</h5>
                                    <p>{album.year}</p>
                                    <img alt='' src={album.image} width='200'></img>
                                    {/* {album.genre._id} */}
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
