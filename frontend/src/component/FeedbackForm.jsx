import React, { useState } from "react";

function FeedbackForm() {
  const currentUsers = [
    { email: "user1@example.com", userId: "user1" },
    { email: "user2@example.com", userId: "user2" },
    { email: "user3@example.com", userId: "user3" }
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");
  const [resultMessage, setResultMessage] = useState("");
  const [resultColor, setResultColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = currentUsers.find(u => u.email === email);

    if (!user) {
      setResultMessage("You are not registered, sign up to continue");
      setResultColor("red");
      return;
    }

    if (user.userId !== userId) {
      setResultMessage("User ID does not match the provided email");
      setResultColor("red");
      return;
    }

    setResultMessage("Feedback submitted successfully!");
    setResultColor("green");
  };

  const clearError = () => {
    setResultMessage("");
  };

  return (
    <div>
      <h2>Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              clearError();
            }}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clearError();
            }}
          />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="text"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              clearError();
            }}
          />
        </div>

        <div>
          <label htmlFor="userId">User ID</label>
          <input
            id="userId"
            type="text"
            value={userId}
            onChange={(e) => {
              setUserId(e.target.value);
              clearError();
            }}
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              clearError();
            }}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {resultMessage && (
        <p style={{ color: resultColor }}>
          {resultMessage}
        </p>
      )}
    </div>
  );
}

export default FeedbackForm;
