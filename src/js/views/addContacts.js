import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AddContact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact saved:", formData);
  };

  const agregarContacto = async () => {
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "name": "",
  "phone": "",
  "email": "",
  "address": ""
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

try {
  const response = await fetch("https://playground.4geeks.com/contact/agendas/jfplaz/contacts", requestOptions);
  const result = await response.text();
  console.log(result)
} catch (error) {
  console.error(error);
};
    console.log("funciona")
  };
  

  return (
    <div className="container d-flex flex-column align-items-center vh-100 justify-content-center">
      <h2 className="mb-4">Add new contact</h2>
      
      <form onSubmit={handleSubmit} className="w-100">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button onClick={agregarContacto} className="btn btn-primary w-100">
          Save
        </button>
      </form>
      <Link to="/" className="mt-3 text-primary">or get back to contacts</Link>
    </div>
  );
};

export default AddContact;
