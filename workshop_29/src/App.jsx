import React from "react";
import Players from "./components/Players";
import CreatePlayerForm from "./components/CreatePlayerForm";
import { Route, Routes } from "react-router-dom";
import PlayerDetail from "./components/PlayerDetail";

// Define the App component
function App() {
  // This component renders the Players component inside a div
  // This div has a class of 'App', which we could use for styling
  return (
    <section>
      <h1>Puppy Players</h1>
      <CreatePlayerForm />
      <Routes>
        <Route path="/:playerId" element={<PlayerDetail />} />
        <Route path="/" element={<Players />} />
      </Routes>
    </section>
  );
}

// Export the App component as the default export
export default App;
