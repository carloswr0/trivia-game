import React, {useState, useEffect} from 'react';
import './Scores.css';
import loadedTeams from '../../teams.json';

function Scores() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem('scoreboard');
    if(!savedData) {
      setTeams(loadedTeams);
    } else {
      setTeams(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('scoreboard', JSON.stringify(teams));
  }, [teams]);

  const adjustPoints = (index, operation) => {
    const changesToTeams = [...teams]
    changesToTeams[index].points = changesToTeams[index].points + operation;
    setTeams(changesToTeams);
  }

  return (
    <div className="Scores">
      <h1>TEAMS</h1>
        <ul>
          {
            teams && teams.map((team, index) => {
              return(
                <li key={index}>
                  <div>{team.name}</div>
                  <div id="controlpoints">
                    <button id="minus" onClick={() => adjustPoints(index, -50)}>-</button>
                    <p>{team.points}</p>
                    <button id="add" onClick={() => adjustPoints(index, +50)}>+</button>
                  </div>
                </li>
              );
            })
          }
        </ul>
    </div>
  );
}

export default Scores;
