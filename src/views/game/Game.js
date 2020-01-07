import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../../utilities/axiosWithAuth'

function Game() {
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState({});

  useEffect(() => {
    // Axios call here to Rooms endpoint to set rooms state
    axiosWithAuth()
    .get('https://sharknado-trail.herokuapp.com/api/adv/init')
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
  }, [])

  return (
    <div className="Game">
      <h1>Welcome to Sharknado Trail</h1>
    </div>
  );
}

export default Game;