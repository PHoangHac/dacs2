import React, { useEffect, useState } from "react";
import axios from "axios";
import "./auth.scss";

const Alluser = () => {
  const [listuser, setListuser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7070/Users").then((res) => {
      setListuser(res.data);
      console.log(res);
    });
  }, []);

  console.log(listuser);

  return (
    <div className="all-user">
      <table class="all-user-container">
        <thead>
          <tr>
            <th>
              <h1>Id</h1>
            </th>
            <th>
              <h1>UserName</h1>
            </th>
            <th>
              <h1>Password</h1>
            </th>
            <th>
              <h1>Phone</h1>
            </th>
            <th>
              <h1>Email</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {listuser.map((value, index) => {
            return (
              <tr key={value.id}>
                <td>{index + 1}</td>
                <td>{value.username}</td>
                <td>{value.password}</td>
                <td>{value.email}</td>
                <td>{value.phonenumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Alluser;
