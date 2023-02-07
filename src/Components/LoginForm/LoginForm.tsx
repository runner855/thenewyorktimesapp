import React, { useState } from "react";
import "../LoginForm/LoginForm.css";
import { UsersDatabase } from "../../Utilities/Utility";
import { Button } from "antd";
import {
  MODAL_SUBMIT_LABEL,
  MODAL_CLEAR_LABEL,
} from "../../Constants/dictionary";
const { v4: uuidv4 } = require("uuid");

type SignupFormProps = {
  name: string;
  setName: (name: string) => void;
  surname: string;
  setSurname: (surname: string) => void;
  email: string;
  setEmail: (email: string) => void;
  address: string;
  setAddress: (address: string) => void;
  city: string;
  setCity: (city: string) => void;
  country: string;
  setCountry: (country: string) => void;
};

export const LoginForm = ({
  name,
  setName,
  surname,
  setSurname,
  email,
  setEmail,
  address,
  setAddress,
  city,
  setCity,
  country,
  setCountry,
}: SignupFormProps) => {
  const [userDetails, setUserDetails] = useState<string>("");

  const handleClick = () => {
    UsersDatabase.push({
      id: uuidv4(),
      name: `${name}`,
      surname: `${surname}`,
      email: `${email}`,
      address: `${address}`,
      city: `${city}`,
      country: `${country}`,
    });
    setName("");
    setSurname("");
    setEmail("");
    setAddress("");
    setCity("");
    setCountry("");
    setUserDetails(`
    ${name}
     ${surname}
     ${email}
    ${address}
    ${city}
    ${country}`);
  };

  return (
    <form>
      <div className="nyt_logo_container">
        <img
          className="nyt_logo"
          src="https://developer.nytimes.com/files/poweredby_nytimes_200c.png?v=1583354208354"
          alt="logo"
        />
      </div>
      <div className="name">
        <input
          type="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="surname">
        <input
          type="surname"
          placeholder="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      <div className="email">
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="address">
        <input
          type="address"
          placeholder="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="city">
        <input
          type="city"
          placeholder="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="country">
        <input
          type="country"
          placeholder="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <Button className="submit_btn" type="primary" onClick={handleClick}>
        {MODAL_SUBMIT_LABEL}
      </Button>

      <Button
        className="clear_btn"
        type="primary"
        onClick={() => {
          setName("");
          setSurname("");
          setEmail("");
          setAddress("");
          setCity("");
          setCountry("");
        }}
      >
        {MODAL_CLEAR_LABEL}
      </Button>
    </form>
  );
};
