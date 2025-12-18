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