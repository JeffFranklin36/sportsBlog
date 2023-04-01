import { useState, useEffect } from 'react';
import './Scores.css';

function NBAScores() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetch("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard")
      .then(response => response.json())
      .then(data => {
        const today = new Date().toISOString().slice(0, 10);
        const todayScores = data.events.filter(event => event.date.slice(0, 10) === today);
        setScores(todayScores);
      })
      .catch(error => console.log(error));
  }, []);

  if (scores.length === 0) {
    return <div className='noGames'>Sorry no games today</div>;
  }

  return (
    <div className="score-banner">
      {scores.map(score => (
        <div className='matchup' key={score.id}>
          <div className="score">
            <div className="team">{score.competitions[0].competitors[0].team.displayName}</div>
            <div className="score">{score.competitions[0].competitors[0].score}</div>
            <div className="team">{score.competitions[0].competitors[1].team.displayName}</div>
            <div className="score">{score.competitions[0].competitors[1].score}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NBAScores;