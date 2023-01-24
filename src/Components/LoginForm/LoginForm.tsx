import React, { ReactNode, useState } from "react";
import { UsersDatabase } from "../../Utilities/Utility";
import "../LoginForm/LoginForm.css";

export const LoginForm = () => {
  return (
    <form>
      <div className="logo">
        <img
          src="https://developer.nytimes.com/files/poweredby_nytimes_200c.png?v=1583354208354"
          alt="logo"
        />
      </div>
      <div className="name">
        <input type="name" placeholder="name" />
      </div>
      <div className="surname">
        <input type="surname" placeholder="surname" />
      </div>
      <div className="email">
        <input type="email" placeholder="email" />
      </div>
      <div className="address">
        <input type="address" placeholder="address" />
      </div>
      <div className="button-container">
        <input type="submit" placeholder="hello" />
      </div>
    </form>
  );
};
