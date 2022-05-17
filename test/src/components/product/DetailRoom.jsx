import React, { useState, useEffect } from "react";
import "./room.scss";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DetailsRoom = () => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [member, setMember] = useState("");
  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState("");
  const { id } = useParams();

  //Chuyen huong
  const Nagigate = useNavigate();

  const UpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:7070/Rooms/${id}`, {
        title: title,
        address: address,
        price: price,
        member: member,
        username: username,
      });
      alert("Update Room successful !");
      Nagigate("/DisplayRooms");
    } catch (err) {
      if (err.response) {
        setMsg(err.response.data.msg);
      }
    }
  };

  const getRoomById = async () => {
    const getdata = await axios.get(`http://localhost:7070/Rooms/${id}`);
    setTitle(getdata.data.title);
    setAddress(getdata.data.address);
    setPrice(getdata.data.price);
    setMember(getdata.data.member);
    setUsername(getdata.data.username);
  };

  useEffect(() => {
    getRoomById();
  }, []);

  return (
    <div className="regis-main">
      <h1>Create Room</h1>
      <p>{msg}</p>
      <form onSubmit={UpdateSubmit} action="">
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
          <button>Update</button>
        </div>
      </form>
    </div>
  );
};

export default DetailsRoom;
