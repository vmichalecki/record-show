import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_ALBUMS, QUERY_ALBUM_GENRES } from "../utils/queries";

const Home = () => {
    // have 4 columns of genres, repeat lines 9 and 11 four times for QUERY_ALBUM_GENRES

    const { data } = useQuery(QUERY_ALBUMS);
    //    const { data } = useQuery(QUERY_ALBUM_GENRES, {variables: {genreId: HARD CODED ID}});

    // assign data to variable and map through it as below with albums.map

    const albums = data?.albums || [];
    //const contempAlbums
    //const popArtalbums
    //etc

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
                                    <p>{album.genre}</p>
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
