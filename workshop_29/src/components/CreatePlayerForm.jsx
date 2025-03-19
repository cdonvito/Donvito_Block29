import { useCreatePlayerMutation } from "../api/puppyBowlApi";

function CreatePlayerForm() {
  return (
    <>
      <div id="CreateNewPlayer">
        <h2>Invite a New Puppy Player!</h2>

        <label htmlFor="name">
          Name:
          <input type="text" name="name" placeholder="Name"></input>
        </label>

        <label htmlFor="breed">
          Breed:
          <input type="text" name="breed" placeholder="Breed"></input>
        </label>

        <label htmlFor="status">
          Status:
          <select name="status" placeholder="bench">
            <option value="bench">Bench</option>
            <option value="field">Field</option>
          </select>
        </label>

        <label htmlFor="imageUrl">
          Image URL:
          <input type="url" name="imageUrl" placeholder="Image URL"></input>
        </label>

        <label htmlFor="teamID">
          Team ID:
          <input type="text" name="teamID" placeholder="Team ID"></input>
        </label>
      </div>
    </>
  );
}

export default CreatePlayerForm;
