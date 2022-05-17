import React, { useState } from "react";
import "./room.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateRooms = () => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [member, setMember] = useState("");
  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState("");

  const Nagigate = useNavigate();

  const CreateSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:7070/Rooms/create", {
        title: title,
        address: address,
        price: price,
        member: member,
        username: username,
      });
      alert("Create Room successful !");
      Nagigate("/DisplayRooms");
    } catch (err) {
      if (err.response) {
        setMsg(err.response.data.msg);
      }
    }
  };

  return (
    <div className="regis-main">
      <h1>Create Room</h1>
      <p>{msg}</p>
      <form onSubmit={CreateSubmit} action="">
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title...."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="address...."
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="price">Price: </label>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="price...."
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="member">Member: </label>
          <input
            type="text"
            id="member"
            name="member"
            placeholder="member...."
            value={member}
            onChange={(e) => {
              setMember(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username...."
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateRooms;
