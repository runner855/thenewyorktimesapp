import React, { useState } from "react";
import "../NavBar/NavBar.css";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ModalContentEnum } from "../../ Types/Apptypes";
import {
  MODAL_LOGIN_LABEL,
  MODAL_SIGNUP_LABEL,
  MODAL_SIGNUPLINK_LABEL,
} from "../../Constants/dictionary";
import { Modal, Select } from "antd";
import { LoginForm } from "../LoginForm/LoginForm";
import { NavBarElements, UsersDatabase } from "../../Utilities/Utility";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MODAL_ACCOUNTDETAILS_LABEL } from "../../Constants/dictionary";
import { AccountDetails } from "../AccountDetails/AccountDetails";

export const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showContent, setShowContent] = useState<string>("");
  const [userName, setUserName] = useState<string | undefined>();
  const [isloggedin, setIsLoggedIn] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [filteredEmployees, setFilteredEmployees] = useState(UsersDatabase);

  const filterByDepartment = (name: string) => {
    setFilteredEmployees(
      UsersDatabase.filter((user) => `${user.name} ${user.surname}` === name)
    );
  };
  console.log(filteredEmployees);

  const users = Array.from(
    new Set(
      UsersDatabase &&
        UsersDatabase.map((user) => `${user.name} ${user.surname}`)
    )
  );

  console.log(users);

  const { v4: uuidv4 } = require("uuid");

  const navigate = useNavigate();

  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLogOut = () => {
    setUserName("");
    setIsLoggedIn(false);
  };

  const handleChange = (e: any) => {
    setUserName(e.target.value);
    setIsLoggedIn(true);
    filterByDepartment(e.target.value);
  };

  const handleClick = () => {
    setIsModalOpen(true);
    setShowContent(ModalContentEnum.ACCOUNT_DETAILS);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          {isloggedin ? (
            <FaUser
              className="account"
              type="primary"
              onClick={() => {
                setIsModalOpen(true);
                setShowContent(ModalContentEnum.ACCOUNT_DETAILS);
              }}
            >
              {MODAL_ACCOUNTDETAILS_LABEL}
            </FaUser>
          ) : (
            <div
              className="login"
              onClick={() => {
                setIsModalOpen(true);
                setShowContent(ModalContentEnum.LOGIN);
              }}
            >
              Login/Register
            </div>
          )}

          <div className="username">{userName}</div>
          <Modal
            title="Login"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            {showContent === ModalContentEnum.LOGIN ? (
              <div className="login_select">
                <select onChange={handleChange}>
                  <option value="">Select User</option>

                  {users.map((selectedUser) => {
                    return <option key={selectedUser}>{selectedUser}</option>;
                  })}
                </select>
              </div>
            ) : showContent === ModalContentEnum.ACCOUNT_DETAILS ? (
              <div>
                {filteredEmployees.map((user) => {
                  const { id, name, surname, email, address } = user;
                  return (
                    <div key={id}>
                      <div className="user">
                        {name} {surname}
                      </div>
                      <div className="email">{email}</div>
                      <div className="address">{address}</div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <>
                <LoginForm
                  name={name}
                  setName={(inputName) => setName(inputName)}
                  surname={surname}
                  setSurname={(inputSurname) => setSurname(inputSurname)}
                  email={email}
                  setEmail={(inputEmail) => setEmail(inputEmail)}
                  address={address}
                  setAddress={(inputAddress) => setAddress(inputAddress)}
                />
              </>
            )}

            <div className="noaccount">{MODAL_SIGNUP_LABEL}</div>
            <div
              className="singup_logout_buttons"
              onClick={() => {
                setShowContent(ModalContentEnum.REGISTER);
              }}
            >
              <div className="signup_container">
                <Link className="signup" to="#">
                  {MODAL_SIGNUPLINK_LABEL}
                </Link>
              </div>
            </div>
            <MdLogout className="logout_icon" onClick={handleLogOut} />
          </Modal>
        </div>
        <div className="menu-icon" onClick={handleShowNavBar}>
          <GiHamburgerMenu />
        </div>
        <div className={`nav-elements ${showNavBar && "active"}`}>
          <ul>
            {NavBarElements.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.to}>{item.navbar_element}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
