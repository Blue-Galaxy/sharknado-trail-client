import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../../utilities/axiosWithAuth';
// Components
import Controller from './components/Controller';
import Map from './components/Map';

function Game() {
  const [currentStatus, setCurrentStatus] = useState({ uuid: null, name: "", title: "", description: "", players: []});
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState("")

  useEffect(() => {
    axiosWithAuth()
    .get('https://sharknado-trail.herokuapp.com/api/adv/room')
    .then(res => {
        const roomsArr = [];
        Object.entries(res.data.rooms).forEach(item => {
            roomsArr.push(item[1])
        })
        setRooms(roomsArr)
    })
    .catch(err => {
        console.log(err)
    })
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
          setCurrentStatus(res.data);
          console.log(res.data)
          console.log(currentStatus)
          if (res.data.error_msg){
              setError(res.data.error_msg)
              console.log(res.data.error_msg)
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
            setCurrentStatus(res.data);
            console.log(res.data)
            console.log(currentStatus)
            if (res.data.error_msg){
                setError(res.data.error_msg)
                console.log(res.data.error_msg)
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
            setCurrentStatus(res.data);
            console.log(res.data)
            console.log(currentStatus)
            if (res.data.error_msg){
                setError(res.data.error_msg)
                console.log(res.data.error_msg)
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
            setCurrentStatus(res.data);
            console.log(res.data)
            console.log(currentStatus)
            if (res.data.error_msg){
                setError(res.data.error_msg)
                console.log(res.data.error_msg)
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    const checkStatus = () => {
        console.log(currentStatus)
    }

  console.log(rooms, currentStatus);

  return (
    <div className="Game">
      <h1 onClick={checkStatus}>check status</h1>
      <div className="map-container">
        <Map />
      </div>
      <div className="controller-and-text">
          <Controller moveCallerN={moveCallerN} moveCallerS={moveCallerS} moveCallerE={moveCallerE} moveCallerW={moveCallerW} />
      </div>
    </div>
  );
}

export default Game;