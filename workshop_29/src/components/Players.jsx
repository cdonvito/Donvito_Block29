import React, { useState } from "react";
import { usePlayersQuery } from "../api/puppyBowlApi";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

// Define a new React component
const Players = () => {
  // Use the generated hook to fetch data from the API
  // When the component is first rendered, it will start the API fetch
  // It will re-render each time the fetch status changes (e.g., "loading", "data arrived", "error")
  const { data = {}, error, isLoading } = usePlayersQuery();
  const [searchParameter, setSearchParameter] = useState("");
  const navigate = useNavigate();

  // Show a loading message while data is being fetched
  if (isLoading) {
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    );
  }

  // Show an error message if the fetch failed
  if (error) {
    return (
      <section>
        <h2>Error, please try again later.</h2>
      </section>
    );
  }

  console.log(data.data.players);
  console.log(searchParameter);

  const puppiesToDisplay =
    searchParameter !== "" && data.data.players
      ? data.data.players.filter(
          (player) =>
            player.name.toUpperCase().includes(searchParameter.toUpperCase()) ||
            player.breed.toUpperCase().includes(searchParameter.toUpperCase())
        )
      : data.data.players;

  // Show the fetched data after it has arrived
  return (
    <section className="PlayerList">
      <SearchBar
        searchParameter={searchParameter}
        setSearchParameter={setSearchParameter}
      />
      <div className="players">
        {/* Map through the data array and generate a div for each player */}
        {puppiesToDisplay.map((player) => (
          // Use the player's ID as the key for this div
          <div key={player.id} className="player-card">
            {/* Display the player's image, with the player's name as alt text */}
            <img
              src={player.imageUrl}
              alt={player.name}
              className="player-image"
            />

            <div className="player-details">
              <h2>
                {
                  /* Display the player's name */
                  player.name
                }
              </h2>

              <p>
                {
                  /* Display the player's breed */
                  player.breed
                }
              </p>

              <p>
                {
                  /* Display the player's status */
                  player.status
                }
              </p>

              <button onClick={() => navigate(`/${player.id}`)}>
                See Details
              </button>

              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Export the component so it can be imported and used in other files

export default Players;
