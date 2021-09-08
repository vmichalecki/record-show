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
  const randomInt = Math.floor(Math.random() * 2)
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
        </div>

        <div>
          <form onSubmit={handleFormSubmit}>
            <div>
              <input type="radio" id="popArt" name="drone" value="6137fd6261ec664eb85930c9" onChange={handleChange}></input>
              <label for="popArt">Pop Art</label>
            </div>
            <div>
              <input type="radio" id="abstract" name="drone" value="6137fd6261ec664eb85930cc" onChange={handleChange}></input>
              <label for="abstract">Abstract</label>
            </div>
            <div>
              <input type="radio" id="surrealism" name="drone" value="6137fd6261ec664eb85930cb" onChange={handleChange}></input>
              <label for="surrealism">Surrealism</label>
            </div>
            <div>
              <input type="radio" id="contemporary" name="drone" value="6137fd6261ec664eb85930ca" onChange={handleChange}></input>
              <label for="contemporary">Contemporary</label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Home;
