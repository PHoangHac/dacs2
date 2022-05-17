import React, { useEffect, useState } from "react";
import axios from "axios";
import "./room.scss";

const DisplayRooms = () => {
  const [listroom, setRoom] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7070/Rooms").then((res) => {
      setRoom(res.data);
      console.log(res);
    });
  }, []);

  return (
    <>
      <div className="all-room">
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
              {/* <th>
                <h1>Action</h1>
              </th> */}
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
