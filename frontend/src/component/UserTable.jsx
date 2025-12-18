import React from 'react';

function UserTable({ users }) {
  const activeUsers = users.filter(user => user.status === 'active');
  const inactiveUsers = users.filter(user => user.status === 'inactive');

  return (
    <div>
      <h2>Active Users</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {activeUsers.map((user, idx) => (
            <tr key={idx}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Inactive Users</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {inactiveUsers.map((user, idx) => (
            <tr key={idx}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;

/* App.js
import React from 'react';
import UserTable from './components/UserTable';

const users = [
  { name: "Alice Johnson", email: "alice@example.com", phone: "123-456-7890", status: "active" },
  { name: "Bob Smith", email: "bob@example.com", phone: "234-567-8901", status: "inactive" },
  { name: "Charlie Brown", email: "charlie@example.com", phone: "345-678-9012", status: "active" },
  { name: "Dana White", email: "dana@example.com", phone: "456-789-0123", status: "inactive" }
];

function App() {
  return (
    <div>
      <UserTable users={users} />
    </div>
  );
}

export default App; */