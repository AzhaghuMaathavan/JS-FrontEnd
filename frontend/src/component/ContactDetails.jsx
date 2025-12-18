import React from 'react'

function ContactDetails(){
    return(
        <>
        <ul>
            <li>support@company.com</li>
            <li>+91 98765 43210</li>
            <li>Available from 9AM to 6PM</li>
        </ul>
        </>
    )
}

export default ContactDetails

/*App.js
import React from "react";
import ContactDetails from "./components/ContactDetails";
import AddressDetails from "./components/AddressDetails";

function App() {
  return (
    <>
    <h1>Contact Us</h1>
    <p>kindly reach out us, if you have any concerns or feedback!</p>
    <AddressDetails />
    <ContactDetails />
    </>
  );
}

export default App;
*/