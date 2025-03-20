import { useState } from "react";
import { useCreatePlayerMutation } from "../api/puppyBowlApi";

// function to create a new player using the form
function CreatePlayerForm() {
  const [createPlayer] = useCreatePlayerMutation();
  const [error, setError] = useState("");
  const [playerData, setPlayerData] = useState({
    name: "",
    breed: "",
    status: "bench",
    imageUrl: "",
    teamId: "",
  });

  const handleCreate = async (event) => {
    event.preventDefault();

    // Gives the user an error if the required fields aren't filled out
    if (
      !playerData.name ||
      !playerData.breed ||
      !playerData.status ||
      !playerData.imageUrl
    ) {
      setError("Please fill out all required fields");
      return;
    }

    try {
      setError("");

      // if the team Id is blank then it deletes it from the POST request
      if (playerData.teamId === "") {
        delete playerData.teamId;
      }
      await createPlayer(playerData).unwrap();
      setPlayerData({
        name: "",
        breed: "",
        status: "bench",
        imageUrl: "",
        teamId: "",
      });
    } catch (error) {
      console.log("Error while creating player: ", error);
    }
  };

  // changes the value of each field based on what the user has typed
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPlayerData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <>
      <div id="CreateNewPlayer">
        <h2>Invite a New Puppy Player!</h2>

        {error && <h3 id="error">{error}</h3>}

        <form onSubmit={handleCreate}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={playerData.name}
              onChange={handleChange}
            ></input>
          </label>

          <label htmlFor="breed">
            Breed
            <input
              type="text"
              name="breed"
              placeholder="Breed"
              value={playerData.breed}
              onChange={handleChange}
            ></input>
          </label>

          <label htmlFor="status">
            Status
            <select
              name="status"
              placeholder="bench"
              value={playerData.status}
              onChange={handleChange}
            >
              <option value="bench">Bench</option>
              <option value="field">Field</option>
            </select>
          </label>

          <label htmlFor="imageUrl">
            Image URL
            <input
              type="url"
              name="imageUrl"
              placeholder="Image URL"
              value={playerData.imageUrl}
              onChange={handleChange}
            ></input>
          </label>

          <label htmlFor="teamID">
            Team ID: (Leave Blank for None)
            <input
              type="text"
              name="teamId"
              placeholder="Team ID"
              value={playerData.teamId}
              onChange={handleChange}
            ></input>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default CreatePlayerForm;
