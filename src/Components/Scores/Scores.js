import React, {useState, useEffect} from 'react';
import './Scores.css';
import loadedTeams from '../../teams.json';

function Scores() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    setTeams(loadedTeams);
    console.log("testing re render", teams)
  }, [teams]);

  const adjustPoints = () => {

  }

  return (
    <div className="Scores">
      <h1>Teams:</h1>
        <ul>
          {
            teams.map((team, index) => {
              return(
                <li key={index}>
                  <div>{team.name}</div>
                  <div id="controlpoints">
                    <div onClick={() => adjustPoints(index)}>-</div>
                    <p>{team.points}</p>
                    <div onClick={() => adjustPoints(index)}>+</div>
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
