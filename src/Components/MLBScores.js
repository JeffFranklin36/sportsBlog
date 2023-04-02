import { useState, useEffect } from 'react';
import './Scores.css';

function MLBScores() {
  const [scores, setScores] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(3);

  useEffect(() => {
    fetch("https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard")
      .then(response => response.json())
      .then(data => {
        const today = new Date().toISOString().slice(0, 10);
        const todayScores = data.events.filter(event => event.date.slice(0, 10) === today);
        setScores(todayScores);
      })
      .catch(error => console.log(error));
  }, []);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const getPaginatedScores = () => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return scores.slice(start, end);
  };

  if (scores.length === 0) {
    return <div className='noGames'>Sorry no games today</div>;
  }

  const paginatedScores = getPaginatedScores();

  return (
    <div className="score-banner">
      {paginatedScores.map(score => (
        <div className='matchup' key={score.id}>
          <div className="score">
            <div className="team">{score.competitions[0].competitors[0].team.displayName}</div>
            <div className="score">{score.competitions[0].competitors[0].score}</div>
            <div className="team">{score.competitions[0].competitors[1].team.displayName}</div>
            <div className="score">{score.competitions[0].competitors[1].score}</div>
          </div>
        </div>
      ))}
      {scores.length > pageSize && (
        <div className="pagination">
          {page > 1 && (
            <button className="prev-page" onClick={handlePrevPage}>Prev</button>
          )}
          {paginatedScores.length === pageSize && (
            <button className="next-page" onClick={handleNextPage}>Next</button>
          )}
        </div>
      )}
    </div>
  );
}

export default MLBScores;
