import { usePlayerByIdQuery } from "../api/puppyBowlApi";
import { useParams } from "react-router-dom";

function PlayerDetail() {
  const { playerId } = useParams();
  const { data: player, error, isLoading } = usePlayerByIdQuery(playerId);

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

  console.log(player.data.player);

  return (
    <div className="player-details">
      <h2>{player.data.player.name}</h2>

      <p>{player.data.player.breed}</p>

      <p>{player.data.player.status}</p>
    </div>
  );
}

export default PlayerDetail;
