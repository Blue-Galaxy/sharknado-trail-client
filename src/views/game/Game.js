import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../../utilities/axiosWithAuth';
// Components
import Controller from './components/Controller';

function Game() {
  const [currentStatus, setCurrentStatus] = useState({ uuid: null, name: "", title: "", description: "", players: []});
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState("")

  useEffect(() => {
    // Axios call here to Rooms endpoint to set rooms state
    axiosWithAuth()
    .get('https://sharknado-trail.herokuapp.com/api/adv/init')
    .then(res => {
        setCurrentStatus(res.data)
    })
    .catch(err => {
        console.log(err);
    })
  }, [])

  const moveCallerN = () => {
      const request = {direction: "n"}
      axiosWithAuth()
      .post('https://sharknado-trail.herokuapp.com/api/adv/move', request)
      .then(res => {
          setCurrentStatus(currentStatus, ...res.data);
          if (res.data.error_msg){
              setError(res.data.error_msg)
          }
      })
      .catch(err => {
          console.log(err);
      })
  }

    const moveCallerS = () => {
        const request = {direction: "s"}
        axiosWithAuth()
        .post('https://sharknado-trail.herokuapp.com/api/adv/move', request)
        .then(res => {
            setCurrentStatus(currentStatus, ...res.data);
            if (res.data.error_msg){
                setError(res.data.error_msg)
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    const moveCallerE = () => {
        const request = {direction: "e"}
        axiosWithAuth()
        .post('https://sharknado-trail.herokuapp.com/api/adv/move', request)
        .then(res => {
            setCurrentStatus(currentStatus, ...res.data);
            if (res.data.error_msg){
                setError(res.data.error_msg)
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    const moveCallerW = () => {
        const request = {direction: "w"}
        axiosWithAuth()
        .post('https://sharknado-trail.herokuapp.com/api/adv/move', request)
        .then(res => {
            setCurrentStatus(currentStatus, ...res.data);
            if (res.data.error_msg){
                setError(res.data.error_msg)
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

  return (
    <div className="Game">
      <div className="map-container">Map here</div>
      <div className="controller-and-text">
          <Controller moveCallerN={moveCallerN} moveCallerS={moveCallerS} moveCallerE={moveCallerE} moveCallerW={moveCallerW} />
      </div>
    </div>
  );
}

export default Game;