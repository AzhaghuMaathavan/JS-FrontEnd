import React from "react";

function UserList({ users }) {
  if (users.length === 0) {
    return <p>No users available</p>;
  }

  return (
    <ul>
      {users.map((user, index) => {
        if (!user.active) {
          return <li key={index}>{user.name} (Inactive)</li>;
        }

        if (user.role === "Admin") {
          return <li key={index}>{user.name} (Admin)</li>;
        }

        return <li key={index}>{user.name}</li>;
      })}
    </ul>
  );
}

export default UserList;


/*App.js
import React, { useState } from "react";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([
    { name: "Alice", role: "Admin", active: true },
    { name: "Bob", role: "User", active: false },
    { name: "Charlie", role: "User", active: true }
  ]);

  const [name, setName] = useState("");
  const [role, setRole] = useState("User");

  const addUser = (e) => {
    e.preventDefault();

    if (name.trim() === "") return;

    setUsers([
      ...users,
      { name: name, role: role, active: true }
    ]);

    setName("");
    setRole("User");
  };

  return (
    <div>
      <h1>User List</h1>

      <form onSubmit={addUser}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>

        <button type="submit">Add User</button>
      </form>

      <UserList users={users} />
    </div>
  );
}

export default App;
*/