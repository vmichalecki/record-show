import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALBUM } from "../utils/queries";
import { useMutation } from "@apollo/client";
import { ADD_RESULT } from '../utils/mutations';

const Home = () => {
  const albumIds = [
    "6137fd6261ec664eb85930ce",
    "6137fd6261ec664eb85930cf",
    "6137fd6261ec664eb85930d0",
    "6137fd6261ec664eb85930d1",
    "6137fd6261ec664eb85930d2",
    "6137fd6261ec664eb85930d3",
    "6137fd6261ec664eb85930d4",
    "6137fd6261ec664eb85930d6",
    "6137fd6261ec664eb85930d8",
    "6137fd6261ec664eb85930d9",
    "6137fd6261ec664eb85930da",
    "6137fd6261ec664eb85930db",
    "6137fd6261ec664eb85930dc",
    "6137fd6261ec664eb85930dd",
    "6137fd6261ec664eb85930de",
    "6137fd6261ec664eb85930df",
    "6137fd6261ec664eb85930e0",
    "6137fd6261ec664eb85930e1",
  ];
  const randomInt = Math.floor(Math.random() * 20)
  const randomAlbum = albumIds[randomInt]
  const { data } = useQuery(QUERY_ALBUM, { variables: { albumId: randomAlbum } });
  const album = data?.album || [];

  const [formState, setFormState] = useState('');

  const [addResult, { error }] = useMutation(ADD_RESULT);

  console.log(randomAlbum)

  const handleChange = (event) => {
    const { value } = event.target;
    setFormState(
      value
    );
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState)

    try {
      const { data } = await addResult({
        variables: { userId: "61341b51b1ac9b7b9a46afbd", albumId: "6137fd6261ec664eb85930cf", genreId: formState, },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <main>
      <div className="container mt-3">

        <div className="col-12">

          {album &&
            <div key={album._id} className="col-12">
              <div className="card mb-3">
                <h1 className="card-header bg-dark text-light p-2 m-0 text-center display-1">
                  {album.name}</h1>
                  <div className="d-flex flex-column justify-content-center align-items-center p-4">
                <h2 className="display-4">{album.artist}</h2>
                <h4>{album.year}</h4>
                <img alt='' src={album.image} width='400'></img>
                </div>
              </div>
            </div>

          }
        </div>

        <div className="d-flex flex-column">
          <form className="m-auto" onSubmit={handleFormSubmit}>
            <div className="p-2">
              <input type="radio" id="popArt" name="drone" value="6137fd6261ec664eb85930c9" onChange={handleChange}></input>
              <label className="p-2 h3" for="popArt">Pop Art</label>
            </div>
            <div className="p-2">
              <input type="radio" id="abstract" name="drone" value="6137fd6261ec664eb85930cc" onChange={handleChange}></input>
              <label className="p-2 h3" for="abstract">Abstract</label>
            </div>
            <div className="p-2">
              <input type="radio" id="surrealism" name="drone" value="6137fd6261ec664eb85930cb" onChange={handleChange}></input>
              <label className="p-2 h3"for="surrealism">Surrealism</label>
            </div>
            <div className="p-2">
              <input type="radio" id="contemporary" name="drone" value="6137fd6261ec664eb85930ca" onChange={handleChange}></input>
              <label className="p-2 h3" for="contemporary">Contemporary</label>
            </div>
            <div className="d-flex flex-column">
            <button className="btn btn-dark mb-4 btn-lg" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Home;
