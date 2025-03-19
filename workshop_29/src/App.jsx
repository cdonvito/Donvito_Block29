import React from "react";
import Players from "./components/Players";
import CreatePlayerForm from "./components/CreatePlayerForm";
import SearchBar from "./components/SearchBar";

// Define the App component
function App() {
  // This component renders the Players component inside a div
  // This div has a class of 'App', which we could use for styling
  return (
    <section>
      <h1>Puppy Players</h1>
      < CreatePlayerForm />
      < SearchBar />
      <div className="App">
        <Players />
      </div>
    </section>
  );
}

// Export the App component as the default export
export default App;
