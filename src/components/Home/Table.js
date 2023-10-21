import React, { useState, useEffect } from "react";
import "../styles/Table.css";
import { fetchUsers } from "../utils/ApiService";

const Table = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const userList = await fetchUsers();
        setUsers(userList);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };
    fetchUserList();
  }, []);

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
