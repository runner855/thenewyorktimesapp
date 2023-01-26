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

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          {isloggedin ? (
            isloggedin && (
              <FaUser
                className="account"
                type="primary"
                onClick={() => {
                  navigate(`accountdetails`);
                }}
              >
                {MODAL_LOGIN_LABEL}
              </FaUser>
            )
          ) : (
            <h1
              className="login"
              onClick={() => {
                setIsModalOpen(true);
                setShowContent(ModalContentEnum.LOGIN);
              }}
            >
              Login/Register
            </h1>
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
                <Select
                  className="form-control"
                  placeholder="select"
                  style={{ width: 130 }}
                  onChange={(val: string) => setUserName(val)}
                  onSelect={() => setIsLoggedIn(true)}
                  value={userName}
                  options={
                    UsersDatabase &&
                    UsersDatabase.map((username) => ({
                      label: `${username.name} ${username.surname}`,
                      value: `${username.name} ${username.surname}`,
                    }))
                  }
                />
                {isloggedin && (
                  <div className="accountdetails_container">
                    <div className="accountdetails_container_username">
                      {userName}
                    </div>
                  </div>
                )}
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
