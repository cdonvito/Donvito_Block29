function CreatePlayerForm() {
  return (
    <>
      <div id="CreateNewPlayer">
        <h2>Invite a New Puppy Player!</h2>

        <label for="name">
          Name:
          <input type="text" name="name" placeholder="Name"></input>
        </label>

        <label for="breed">
          Breed:
          <input type="text" name="breed" placeholder="Breed"></input>
        </label>

        <label for="status">
          Status:
          <select name="status" placeholder="bench">
            <option value="bench">Bench</option>
            <option value="field">Field</option>
          </select>
        </label>

        <label for="imageUrl">
          Image URL:
          <input type="url" name="imageUrl" placeholder="Image URL"></input>
        </label>

        <label for="teamID">
          Team ID:
          <input type="text" name="teamID" placeholder="Team ID"></input>
        </label>
      </div>
    </>
  );
}

export default CreatePlayerForm;
