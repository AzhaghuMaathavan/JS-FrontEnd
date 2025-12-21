import React, { useState } from 'react';

function CheckoutForm() {
  const cities = ['Chennai', 'Bengaluru', 'Mumbai', 'Kolkata'];

  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    pin: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = (field, value) => {
    let error = '';

    if (field === 'name' && value.length > 30) {
      error = 'Name must be less than or equal to 30 characters';
    }

    if (field === 'phone' && !/^\d{0,10}$/.test(value)) {
      error = 'The Phone number should only contain a maximum of 10 digits';
    }

    if (field === 'address' && value.length > 100) {
      error = 'Address must be less than or equal to 100 characters';
    }

    if (field === 'city' && value && !cities.includes(value)) {
      error = 'Sorry, we cannot ship to this location';
    }

    if (field === 'pin' && !/^\d{6}$/.test(value)) {
      error = 'PIN must contain exactly 6 digits';
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    setErrors({ ...errors, [name]: validate(name, value) });
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    Object.keys(form).forEach((key) => {
      const err = validate(key, form[key]);
      if (err) newErrors[key] = err;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
    }
  };

  return (
    <div>
      <h1>Checkout From</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input id="name" name="name" value={form.name} onChange={handleChange} />
        <p style={{ color: 'red' }}>{errors.name}</p>

        <label htmlFor="phone">Phone:</label><br />
        <input id="phone" name="phone" value={form.phone} onChange={handleChange} />
        <p style={{ color: 'red' }}>{errors.phone}</p>

        <label htmlFor="address">Address:</label><br />
        <input id="address" name="address" value={form.address} onChange={handleChange} />
        <p style={{ color: 'red' }}>{errors.address}</p>

        <label htmlFor="city">City:</label><br />
        <input id="city" name="city" value={form.city} onChange={handleChange} />
        <p style={{ color: 'red' }}>{errors.city}</p>

        <label htmlFor="pin">PIN:</label><br />
        <input id="pin" name="pin" value={form.pin} onChange={handleChange} />
        <p style={{ color: 'red' }}>{errors.pin}</p>

        <button type="submit">Submit</button>
      </form>

      {success && <h3>Order Placed</h3>}
    </div>
  );
}

export default CheckoutForm;



/*App.js

import React from 'react';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
      <Checkout />
    </div>
  );
}

export default App;
*/