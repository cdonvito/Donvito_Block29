import { usePlayerByIdQuery } from "../api/puppyBowlApi";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PlayerDetail() {
  const { playerId } = useParams();
  const { data: player, error, isLoading } = usePlayerByIdQuery(playerId);
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

  return (
    <div className="single-player-card">
      <img
        src={player.data.player.imageUrl}
        alt={player.data.player.name}
        className="single-player-image"
      />

      <h2>{player.data.player.name}</h2>

      <p>{player.data.player.breed}</p>

      <p>{`Status: ${player.data.player.status}`}</p>

      <p>{`ID: ${player.data.player.id}`}</p>

      <p>{`Team: ${
        player.data.player.team ? player.data.player.team.name : "No Team"
      }`}</p>

      <button onClick={() => navigate(`/`)}>Back to Home</button>
    </div>
  );
}

export default PlayerDetail;
