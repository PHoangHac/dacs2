import React, { useEffect, useState } from "react";
import axios from "axios";
import "./room.scss";
import { Link } from "react-router-dom";

const DisplayRooms = () => {
  const [listroom, setRoom] = useState([]);

  const displayAllRoom = async () => {
    axios.get("http://localhost:7070/Rooms").then((res) => {
      setRoom(res.data);
      // console.log(res);
    });
  };

  const deleteRoom = async (id) => {
    await axios.delete(`http://localhost:7070/Rooms/${id}`);
    displayAllRoom();
  };

  useEffect(() => {
    displayAllRoom();
  }, []);

  return (
    <>
      <div className="all-room">
        <div>
          <Link id="newroom" to={`/CreateRooms`}>
            Add new Room
          </Link>
        </div>
        <table class="all-room-container">
          <thead>
            <tr>
              <th>
                <h1>Id</h1>
              </th>
              <th>
                <h1>Title</h1>
              </th>
              <th>
                <h1>Address</h1>
              </th>
              <th>
                <h1>Price</h1>
              </th>
              <th>
                <h1>Member</h1>
              </th>
              <th>
                <h1>Username</h1>
              </th>
              <th>
                <h1>Action</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            {listroom.map((value, index) => {
              return (
                <tr key={value.id}>
                  <td>{index + 1}</td>
                  <td>{value.title}</td>
                  <td>{value.address}</td>
                  <td>{value.price}</td>
                  <td>{value.member}</td>
                  <td>{value.username}</td>
                  <td>
                    <Link to={`/DetailRooms/${value.id}`}>Edit</Link>
                    <button onClick={() => deleteRoom(value.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DisplayRooms;
